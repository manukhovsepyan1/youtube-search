import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SearchVideosQuery } from '../queries/search-videos.query';
import axios from 'axios';
import {
  VideoDataModel,
  VideoSearchResponseModel,
} from '../dto/video-search-response.model';

type YouTubeSearchResult = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width?: number;
        height?: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: 'none' | 'live' | 'upcoming';
    publishTime: string;
  };
};

interface YouTubeResponse {
  items: Array<YouTubeSearchResult>;
  pageInfo: {
    totalResults: number;
  };
  nextPageToken?: string;
  prevPageToken?: string;
}

@QueryHandler(SearchVideosQuery)
export class SearchVideosHandler implements IQueryHandler<SearchVideosQuery> {
  async execute(query: SearchVideosQuery): Promise<VideoSearchResponseModel> {
    const { query: searchTerm, pageToken, maxResults = 10 } = query;
    const apiKey = 'AIzaSyBdZPM2wiEGkXJGk7SMyYbTmiFGNs_IQXw';

    if (!apiKey) {
      throw new Error('YouTube API key is not configured');
    }
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          key: apiKey,
          q: searchTerm,
          part: 'snippet',
          type: 'video',
          maxResults,
          pageToken,
        },
      },
    );

    const data = response.data as YouTubeResponse;
    const items = data.items || [];

    return {
      results: items.map(
        (item): VideoDataModel => ({
          videoId: item.id.videoId || '',
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.default?.url || '',
          publishedAt: item.snippet.publishedAt,
        }),
      ),
      totalResults: data.pageInfo.totalResults,
      nextPageToken: data.nextPageToken || null,
      prevPageToken: data.prevPageToken || null,
    };
  }
}

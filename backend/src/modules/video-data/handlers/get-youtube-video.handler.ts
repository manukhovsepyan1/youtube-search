import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import axios from 'axios';
import { GetYouTubeVideoQuery } from '../queries/get-youtube-video.query';
import { VideoDetailsModel } from '../dto/video-details.model';

@QueryHandler(GetYouTubeVideoQuery)
export class GetYouTubeVideoHandler
  implements IQueryHandler<GetYouTubeVideoQuery>
{
  async execute(query: GetYouTubeVideoQuery): Promise<VideoDetailsModel> {
    const { videoId } = query;
    const apiKey = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;

    const response = await axios.get(url);
    const { items } = response.data;
    
    if (!items || items.length === 0) {
      throw new Error('Video not found');
    }

    const video = items[0];
    const snippet = video.snippet;
    const statistics = video.statistics;

    return {
      videoId,
      title: snippet.title,
      description: snippet.description,
      thumbnailUrl: snippet.thumbnails?.default?.url || '',
      publishedAt: snippet.publishedAt,
      viewCount: parseInt(statistics.viewCount) || 0,
      likeCount: parseInt(statistics.likeCount) || 0,
      commentCount: parseInt(statistics.commentCount) || 0
    };
  }
}

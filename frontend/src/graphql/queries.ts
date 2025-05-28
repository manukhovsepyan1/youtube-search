import { gql } from "graphql-request";

export const SEARCH_VIDEOS = gql`
  query SearchVideos($query: String!, $pageToken: String, $maxResults: Int) {
    searchVideos(query: $query, pageToken: $pageToken, maxResults: $maxResults) {
      results {
        videoId
        title
        description
        thumbnailUrl
        publishedAt
      }
      totalResults
      nextPageToken
      prevPageToken
    }
  }
`;

export const GET_VIDEO_DETAILS = gql`
  query GetVideoDetails($videoId: String!) {
    getVideoDetails(videoId: $videoId) {
      videoId
      title
      description
      thumbnailUrl
      publishedAt
      viewCount
      likeCount
      commentCount
    }
  }
`;

export const GET_SEARCH_HISTORY = gql`
  query GetSearchHistory {
    getSearchHistory {
      history {
        id
        query
        timestamp
      }
    }
  }
`;

export const GET_SEARCH_ANALYTICS = gql`
  query GetSearchAnalytics {
    getSearchAnalytics {
      analytics {
        id
        query
        count
      }
    }
  }
`;

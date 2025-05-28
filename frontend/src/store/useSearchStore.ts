import { create } from 'zustand';

export interface Video {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
}

export interface VideoDetails {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export interface HistoryItem {
  id: string;
  query: string;
  timestamp: string;
}

export interface AnalyticsItem {
  id: string;
  query: string;
  count: number;
}

interface PageToken {
  next: string | null;
  prev: string | null;
}

interface SearchStore {
  query: string;
  results: Video[];
  videoDetails: VideoDetails | null;
  loading: boolean;
  error: string | null;
  pageToken: PageToken;
  history: HistoryItem[];
  analytics: AnalyticsItem[];
  totalResults: number;
  selectedVideo: Video | null;

  setQuery: (query: string) => void;
  setResults: (results: Video[], totalResults: number) => void;
  setVideoDetails: (videoDetails: VideoDetails) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setPageToken: (next: string | null, prev: string | null) => void;
  addHistory: (history: HistoryItem[]) => void;
  addAnalytics: (analytics: AnalyticsItem[]) => void;
  setSelectedVideo: (video: Video) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  videoDetails: null,
  loading: false,
  error: null,
  pageToken: { next: null, prev: null },
  history: [],
  analytics: [],
  totalResults: 0,
  selectedVideo: null,

  setQuery: (query) => set(() => ({ query })),
  setResults: (results, totalResults) =>
    set(() => ({ results, totalResults })),
  setVideoDetails: (videoDetails) => set(() => ({ videoDetails })),
  setLoading: (loading) => set(() => ({ loading })),
  setError: (error) => set(() => ({ error })),
  setPageToken: (next, prev) =>
    set(() => ({ pageToken: { next, prev } })),
  addHistory: (history) => set(() => ({ history })),
  addAnalytics: (analytics) => set(() => ({ analytics })),
  setSelectedVideo: (video) => set(() => ({ selectedVideo: video })),
}));

export default useSearchStore;

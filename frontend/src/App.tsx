import { client } from './utils/graphqlClient';
import { SEARCH_VIDEOS, GET_SEARCH_HISTORY, GET_SEARCH_ANALYTICS } from './graphql/queries';
import useSearchStore, { type AnalyticsItem, type HistoryItem, type Video } from './store/useSearchStore';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import TabNavigation from './components/tabs/TabNavigation';
import VideoDetail from './components/VideoDetail';
import { useEffect } from 'react';

function App() {
  const {
    query,
    setResults,
    setLoading,
    setError,
    setPageToken,
    addHistory,
    addAnalytics
  } = useSearchStore();

  const fetchSearchHistory = async () => {
    const { getSearchHistory }: { getSearchHistory: { history: HistoryItem[] } } = await client.request(GET_SEARCH_HISTORY);
    addHistory(getSearchHistory.history || []);
    const { getSearchAnalytics }: { getSearchAnalytics: { analytics: AnalyticsItem[] } } = await client.request(GET_SEARCH_ANALYTICS);
    addAnalytics(getSearchAnalytics.analytics || []);
  };

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const search = async (q: string, token: string | null = null) => {
    setLoading(true);
    setError(null);
    try {
      const res = await client.request(SEARCH_VIDEOS, {
        query: q,
        pageToken: token,
        maxResults: 10,
      });

      const { searchVideos } = res as { searchVideos: { 
        results: Video[],
        totalResults: number,
        nextPageToken?: string,
        prevPageToken?: string
      }};
      const { results, totalResults, nextPageToken, prevPageToken } = searchVideos;
      setResults(results, totalResults);
      setPageToken(nextPageToken ?? null, prevPageToken ?? null);
      fetchSearchHistory();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <SearchInput onSearch={search} />
      <VideoDetail />
      <div className="mt-4">
        <TabNavigation onSearch={search} />
      </div>
      <SearchResults onPaginate={(token) => search(query, token)} />
    </div>
  );
}

export default App;



import { GET_VIDEO_DETAILS } from '../graphql/queries';
import useSearchStore, { type VideoDetails } from '../store/useSearchStore';
import { client } from '../utils/graphqlClient';


const SearchResults = ({ onPaginate }: { onPaginate: (token: string | null) => void }) => {
  const { results, loading, error, pageToken, setVideoDetails } = useSearchStore();

  const handleVideoClick = async (videoId: string) => {
    const { getVideoDetails }: { getVideoDetails: VideoDetails } = await client.request(GET_VIDEO_DETAILS, { videoId: videoId });
    setVideoDetails(getVideoDetails);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!results.length) return <p className="text-center">No results found</p>;

  return (
    <div className="p-4">
      <ul className="grid gap-4">
        {results.map((video) => (
          <li
            key={video.videoId}
            className="flex gap-4 cursor-pointer"
            onClick={() => handleVideoClick(video.videoId)}
          >
            <img src={video.thumbnailUrl} alt={video.title} className="w-40 rounded" />
            <div>
              <h2 className="text-lg font-bold">{video.title}</h2>
              <p className="text-sm text-gray-500">{new Date(video.publishedAt).toLocaleDateString()}</p>
              <p>{video.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-4 mt-4">
        {pageToken.prev && <button onClick={() => onPaginate(pageToken.prev)} className="bg-gray-200 px-4 py-2 rounded">Prev</button>}
        {pageToken.next && <button onClick={() => onPaginate(pageToken.next)} className="bg-gray-200 px-4 py-2 rounded">Next</button>}
      </div>
    </div>
  );
};

export default SearchResults;
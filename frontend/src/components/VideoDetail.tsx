import useSearchStore from '../store/useSearchStore';

const VideoDetail = () => {
  const { videoDetails } = useSearchStore();
  if (!videoDetails) return null;

  return (
    <div className="p-4">
      <iframe
        className="w-full h-96"
        src={`https://www.youtube.com/embed/${videoDetails.videoId}`}
        title={videoDetails.title}
        allowFullScreen
      />
      <h1 className="text-xl font-bold mt-4">{videoDetails.title}</h1>
      <p className="text-sm text-gray-500">{new Date(videoDetails.publishedAt).toLocaleDateString()}</p>
      <p className="mt-2">{videoDetails.description}</p>
      <div className="flex gap-4 mt-2 text-sm text-gray-600">
        <span>👁️ {videoDetails.viewCount} views</span>
        <span>👍 {videoDetails.likeCount} likes</span>
        <span>💬 {videoDetails.commentCount} comments</span>
      </div>
    </div>
  );
};

export default VideoDetail;
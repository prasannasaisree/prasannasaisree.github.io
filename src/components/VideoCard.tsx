
import { Play } from "lucide-react";
import { VideoData } from "../types/poem";

interface VideoCardProps {
  video: VideoData;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
        <div className="text-center">
          <Play className="text-gray-400 mb-2 mx-auto" size={48} />
          <p className="text-gray-500">YouTube Video Placeholder</p>
          <p className="text-sm text-gray-400">Video ID: {video.embedId}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {video.language}
          </span>
        </div>
        <p className="text-gray-600">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;


import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";
import { RecentPoem } from "../types/poem";

interface RecentPoemCardProps {
  poem: RecentPoem;
  onPoemClick: () => void;
}

const RecentPoemCard = ({ poem, onPoemClick }: RecentPoemCardProps) => {
  return (
    <Link 
      to={`/collection/${poem.collection}#${poem.id}`}
      onClick={onPoemClick}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
    >
      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
        {poem.title}
      </h4>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {poem.language}
        </span>
        {poem.type === "video" && (
          <div className="flex items-center space-x-1 text-red-600">
            <Youtube size={14} />
            <span className="text-xs">Video</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecentPoemCard;

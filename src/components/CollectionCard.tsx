
import { Link } from "react-router-dom";
import { BookOpen, Youtube } from "lucide-react";
import { PoemCollection } from "../types/poem";

interface CollectionCardProps {
  collection: PoemCollection;
  onPoemClick: () => void;
  onCollectionClick: () => void;
}

const CollectionCard = ({ collection, onPoemClick, onCollectionClick }: CollectionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="text-orange-600" size={24} />
          <h4 className="text-xl font-semibold text-gray-800">{collection.title}</h4>
        </div>
        <p className="text-gray-600 mb-4">{collection.description}</p>
        <div className="space-y-2">
          {collection.poems.map((poem) => (
            <Link 
              key={poem.id}
              to={`/collection/${collection.id}#${poem.id}`}
              onClick={onPoemClick}
              className="block text-orange-600 hover:text-orange-800 transition-colors flex items-center space-x-1"
            >
              <span>•</span>
              <span>{poem.title}</span>
              {poem.type === "video" && <Youtube size={14} className="text-red-600" />}
            </Link>
          ))}
        </div>
        <Link 
          to={`/collection/${collection.id}`}
          onClick={onCollectionClick}
          className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;

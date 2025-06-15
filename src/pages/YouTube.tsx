
import { Link } from "react-router-dom";
import { Youtube, ArrowLeft } from "lucide-react";
import { videos } from "../data/videos";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoCard from "../components/VideoCard";

const YouTubePage = () => {
  const { saveCurrentPosition } = useScrollPosition('youtubeScrollPosition');

  const handleNavClick = () => {
    saveCurrentPosition();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <Header onNavClick={handleNavClick} />

      {/* YouTube Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" onClick={handleNavClick} className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=300&fit=crop" 
              alt="Starry night sky representing divine music" 
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Youtube className="text-red-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Devotional Videos</h2>
            </div>
            <p className="text-xl text-gray-600">
              Spiritual songs and poetry recitations from the heart
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Channel Info */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <Youtube className="text-red-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Channel</h3>
            <p className="text-gray-600 mb-6">
              Join our YouTube community for regular uploads of devotional songs, poetry recitations, and spiritual discussions.
            </p>
            <a 
              href="https://youtube.com/@prasannasaisreedevotional" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Youtube size={20} />
              <span>Visit Channel</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouTubePage;

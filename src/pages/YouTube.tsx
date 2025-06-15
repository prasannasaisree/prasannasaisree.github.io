
import { Link } from "react-router-dom";
import { Sun, Youtube, Play, ArrowLeft } from "lucide-react";

const YouTubePage = () => {
  const videos = [
    {
      id: "1",
      title: "Divine Light - Malayalam Devotional Song",
      description: "A heartfelt rendition of the poem 'Divine Light' set to music",
      embedId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      language: "Malayalam"
    },
    {
      id: "2",
      title: "Eternal Grace - English Spiritual Song",
      description: "An English devotional song expressing gratitude for divine grace",
      embedId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      language: "English"
    },
    {
      id: "3",
      title: "Morning Prayers with Sai",
      description: "A peaceful morning prayer session with devotional songs",
      embedId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      language: "Mixed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="text-orange-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-800">Prasanna Saisree</h1>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
              <Link to="/youtube" className="text-gray-700 hover:text-orange-600 transition-colors flex items-center space-x-1">
                <Youtube size={16} />
                <span>Videos</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* YouTube Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors mb-8">
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
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                  {/* Placeholder for YouTube embed */}
                  <div className="text-center">
                    <Play className="text-gray-400 mb-2 mx-auto" size={48} />
                    <p className="text-gray-500">YouTube Video Placeholder</p>
                    <p className="text-sm text-gray-400">Video ID: {video.embedId}</p>
                  </div>
                  {/* Uncomment below to use actual YouTube embeds */}
                  {/* 
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Sun className="text-orange-400" size={20} />
            <p className="text-gray-300">Om Sai Ram</p>
            <Sun className="text-orange-400" size={20} />
          </div>
          <p className="text-gray-400">© 2024 Prasanna Saisree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default YouTubePage;

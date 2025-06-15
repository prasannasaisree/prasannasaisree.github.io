
import { Link } from "react-router-dom";
import { BookOpen, Youtube, Heart, Star } from "lucide-react";

const Index = () => {
  const collections = [
    {
      id: "malayalam-devotion",
      title: "മലയാളം ഭക്തി കവിതകൾ (Malayalam Devotional Poems)",
      description: "Spiritual poems in Malayalam expressing devotion to Sathya Sai Baba",
      poems: ["Divine Light", "Sacred Path"]
    },
    {
      id: "english-reflections",
      title: "English Spiritual Reflections",
      description: "Contemplative verses on divine love and spiritual awakening",
      poems: ["Eternal Grace", "Journey Within"]
    }
  ];

  const recentPoems = [
    { title: "ദിവ്യ ജ്യോതി (Divine Light)", language: "Malayalam", collection: "malayalam-devotion" },
    { title: "Eternal Grace", language: "English", collection: "english-reflections" },
    { title: "പവിത്ര മാർഗ്ഗം (Sacred Path)", language: "Malayalam", collection: "malayalam-devotion" },
    { title: "Journey Within", language: "English", collection: "english-reflections" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="text-orange-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-800">Divine Verses</h1>
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

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-yellow-200/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop" 
              alt="Spiritual sunrise through trees" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sacred Words, Divine Voice
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Spiritual poetry and devotional songs inspired by the teachings of Bhagavan Sri Sathya Sai Baba
          </p>
          <div className="flex justify-center space-x-4">
            <Star className="text-yellow-500" size={24} />
            <Star className="text-yellow-500" size={24} />
            <Star className="text-yellow-500" size={24} />
          </div>
        </div>
      </section>

      {/* Poetry Collections */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Poetry Collections</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="text-orange-600" size={24} />
                    <h4 className="text-xl font-semibold text-gray-800">{collection.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="space-y-2">
                    {collection.poems.map((poem, index) => (
                      <Link 
                        key={index}
                        to={`/collection/${collection.id}`}
                        className="block text-orange-600 hover:text-orange-800 transition-colors"
                      >
                        • {poem}
                      </Link>
                    ))}
                  </div>
                  <Link 
                    to={`/collection/${collection.id}`}
                    className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Poems */}
      <section className="py-12 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Poems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPoems.map((poem, index) => (
              <Link 
                key={index}
                to={`/collection/${poem.collection}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {poem.title}
                </h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {poem.language}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="text-orange-400" size={20} />
            <p className="text-gray-300">Om Sai Ram</p>
            <Heart className="text-orange-400" size={20} />
          </div>
          <p className="text-gray-400">© 2024 Divine Verses. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

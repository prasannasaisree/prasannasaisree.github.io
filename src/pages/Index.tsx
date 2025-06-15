
import { Link } from "react-router-dom";
import { poemCollections } from "../data/collections";
import { recentPoems } from "../data/recentPoems";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollectionCard from "../components/CollectionCard";
import RecentPoemCard from "../components/RecentPoemCard";

const Index = () => {
  const { saveCurrentPosition } = useScrollPosition('homeScrollPosition');

  const handlePoemClick = () => {
    saveCurrentPosition();
  };

  const handleCollectionClick = () => {
    saveCurrentPosition();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    saveCurrentPosition();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <Header onNavClick={handleNavClick} />

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
            On the way to the lord
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Spiritual poetry and devotional songs inspired by the teachings of Bhagavan Sri Sathya Sai Baba
          </p>
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=200&h=200&fit=crop" 
              alt="Sathya Sai Baba - Spiritual Guide and Inspiration" 
              className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-orange-200"
            />
          </div>
        </div>
      </section>

      {/* Poetry Collections */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Poetry Collections</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poemCollections.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                onPoemClick={handlePoemClick}
                onCollectionClick={handleCollectionClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Poems */}
      <section className="py-12 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Poems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPoems.map((poem, index) => (
              <RecentPoemCard
                key={index}
                poem={poem}
                onPoemClick={handlePoemClick}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

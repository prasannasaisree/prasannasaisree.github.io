
import { Link } from "react-router-dom";
import { Sun, Youtube, Mail, BookOpen, Flower2 } from "lucide-react";

const About = () => {
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

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Author Image */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop" 
                alt="Sathya Sai Baba - Spiritual Guide and Inspiration" 
                className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-orange-200"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Prasanna Saisree</h2>
            <div className="flex justify-center space-x-2 mb-6">
              <Flower2 className="text-orange-500" size={20} />
              <Flower2 className="text-orange-500" size={20} />
              <Flower2 className="text-orange-500" size={20} />
            </div>
          </div>

          {/* Author Description */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Prasanna Saisree is a devoted follower of Bhagavan Sri Sathya Sai Baba, expressing her spiritual journey through poetry and devotional songs. Born in Kerala, she has been writing spiritual verses in both Malayalam and English for over a decade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Her poetry reflects the profound teachings of Sathya Sai Baba - Love, Truth, Peace, Non-violence, and Righteous Conduct. Through her verses, she aims to share the divine love and wisdom that has transformed her life, hoping to inspire others on their spiritual path.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When she's not writing, Prasanna enjoys singing devotional songs and sharing her experiences through YouTube videos, creating a bridge between traditional Malayalam poetry and contemporary spiritual expression.
            </p>
          </div>

          {/* Poetry Collections */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="text-orange-600 mr-2" size={24} />
              Poetry Collections
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  മലയാളം ഭക്തി കവിതകൾ (Malayalam Devotional Poems)
                </h4>
                <p className="text-gray-600 mb-3">
                  A collection of heartfelt devotional poetry in Malayalam, exploring themes of divine love, surrender, and spiritual awakening.
                </p>
                <Link 
                  to="/collection/malayalam-devotion"
                  className="text-orange-600 hover:text-orange-800 transition-colors font-medium"
                >
                  View Collection →
                </Link>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  English Spiritual Reflections
                </h4>
                <p className="text-gray-600 mb-3">
                  Contemplative verses in English that delve into the depths of spiritual experience, divine grace, and the journey of self-realization.
                </p>
                <Link 
                  to="/collection/english-reflections"
                  className="text-orange-600 hover:text-orange-800 transition-colors font-medium"
                >
                  View Collection →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect with Prasanna</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Youtube className="text-red-600" size={24} />
                <div>
                  <p className="font-medium text-gray-800">YouTube Channel</p>
                  <a 
                    href="https://youtube.com/@prasannasaisreedevotional" 
                    className="text-orange-600 hover:text-orange-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @prasannasaisreedevotional
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-gray-600" size={24} />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a 
                    href="mailto:prasannasaisree.poems@gmail.com" 
                    className="text-orange-600 hover:text-orange-800 transition-colors"
                  >
                    prasannasaisree.poems@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <p className="text-gray-700 italic text-center">
                "Love is the language that the divine speaks. Poetry is my way of translating that love into words."
              </p>
              <p className="text-center text-gray-600 mt-2">- Prasanna Saisree</p>
            </div>
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

export default About;


import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Youtube, ArrowLeft, BookOpen, Play, Languages } from "lucide-react";
import SaiBabaIcon from "../components/SaiBabaIcon";
import WhatsAppShare from "../components/WhatsAppShare";

const Collection = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the specific poem if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

  // Set document meta tags for social sharing
  useEffect(() => {
    const updateMetaTags = () => {
      const poemId = location.hash.substring(1);
      const collection = collections[id as keyof typeof collections];
      
      if (collection && poemId) {
        const poem = collection.poems.find(p => p.id === poemId);
        if (poem) {
          // Update page title
          document.title = `${poem.title} - ${collection.title}`;
          
          // Update meta description
          let metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', `Read "${poem.title}" - a spiritual poem by Prasanna Saisree inspired by Sathya Sai Baba's teachings`);
          }
          
          // Update Open Graph tags
          let ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) {
            ogTitle.setAttribute('content', `${poem.title} - Prasanna Saisree`);
          }
          
          let ogDescription = document.querySelector('meta[property="og:description"]');
          if (ogDescription) {
            ogDescription.setAttribute('content', `Read "${poem.title}" - a spiritual poem inspired by Sathya Sai Baba's teachings`);
          }
          
          // Use different images based on language/collection
          const imageUrl = id === 'malayalam-devotion' 
            ? 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=630&fit=crop'
            : 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=630&fit=crop';
          
          let ogImage = document.querySelector('meta[property="og:image"]');
          if (ogImage) {
            ogImage.setAttribute('content', imageUrl);
          }
        }
      }
    };

    updateMetaTags();
  }, [location.hash, id]);

  const collections = {
    "malayalam-devotion": {
      title: "മലയാളം ഭക്തി കവിതകൾ (Malayalam Devotional Poems)",
      description: "Spiritual poems in Malayalam expressing devotion to Sathya Sai Baba",
      poems: [
        {
          id: "divine-light",
          title: "ദിവ്യ ജ്യോതി (Divine Light)",
          type: "text",
          content: `സായി ബാബായുടെ ദിവ്യ കിരണങ്ങൾ
എന്റെ ഹൃദയത്തിൽ പ്രകാശിക്കുന്നു
ഇരുട്ടിന്റെ മേഘങ്ങൾ അകന്നുപോകുന്നു
പ്രേമത്തിന്റെ സൂര്യൻ ഉദിക്കുന്നു

ഓം സായി രാം, ഓം സായി രാം
എന്റെ പ്രാണനാഥാ, എന്റെ ഗുരുവേ
നിന്റെ അനുഗ്രഹം എപ്പോഴും എന്നോടൊപ്പം
എന്റെ ജീവിതയാത്രയിൽ വെളിച്ചമാകട്ടെ`
        },
        {
          id: "sacred-path",
          title: "പവിത്ര മാർഗ്ഗം (Sacred Path)",
          type: "text",
          content: `സത്യത്തിന്റെ പാതയിൽ നടക്കുമ്പോൾ
സായിയുടെ കാരുണ്യം കാവലാകുന്നു
അഹിംസയുടെ പൂക്കൾ വിരിയുന്നു
പ്രേമത്തിന്റെ സുഗന്ധം പരക്കുന്നു

ധർമ്മത്തിന്റെ വെളിച്ചത്തിൽ
ശാന്തിയുടെ നദി ഒഴുകുന്നു
സേവയിലൂടെ, ഭക്തിയിലൂടെ
ദൈവത്തോട് അടുക്കുന്നു`
        },
        {
          id: "mothers-love-malayalam",
          title: "അമ്മയുടെ സ്നേഹം (Mother's Love)",
          type: "text",
          translationLink: {
            collection: "english-reflections",
            poemId: "mothers-love-english",
            title: "Mother's Love (English)"
          },
          content: `സായി മാതാവിന്റെ സ്നേഹം
എന്റെ ഹൃദയത്തിൽ നിറയുന്നു
അമ്മയുടെ കരുണാമയമായ കൈകൾ
എന്റെ വേദനകൾ തുടച്ചുമാറ്റുന്നു

നിന്റെ മടിയിൽ ഞാൻ കുട്ടിയാകുന്നു
എല്ലാ ഭാരങ്ങളും മറന്നുപോകുന്നു
അമ്മേ സായി, എന്റെ രക്ഷകയേ
നിന്റെ സ്നേഹത്തിൽ ഞാൻ മുങ്ങുന്നു`
        },
        {
          id: "sais-glory",
          title: "സായി മഹിമ (Sai's Glory) - Video Poem",
          type: "video",
          description: "A melodious rendition of a Malayalam devotional poem praising Sai Baba's divine attributes",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This video poem captures the essence of Sai Baba's teachings through beautiful Malayalam verses accompanied by traditional devotional music."
        }
      ]
    },
    "english-reflections": {
      title: "English Spiritual Reflections",
      description: "Contemplative verses on divine love and spiritual awakening",
      poems: [
        {
          id: "eternal-grace",
          title: "Eternal Grace",
          type: "text",
          content: `In the silence of the morning prayer,
Your grace descends like gentle rain,
Washing away all worldly care,
Healing the heart of every pain.

Sai Baba, your love divine,
Flows through every breath I take,
In your light, my soul does shine,
For love alone, my heart awake.

Truth and peace, your gifts so pure,
Guide me on this sacred way,
In your presence, I am sure,
Love will bloom in every day.`
        },
        {
          id: "journey-within",
          title: "Journey Within",
          type: "text",
          content: `Beyond the veil of mind and thought,
Lies the treasure that we seek,
Not in worldly things we've bought,
But in the love that makes us meek.

Sai teaches us to look inside,
Where the divine presence dwells,
No need to search far and wide,
The truth within our own heart tells.

Service to others, love for all,
Compassion flowing like a stream,
Answer to the inner call,
Living the divine dream.`
        },
        {
          id: "mothers-love-english",
          title: "Mother's Love",
          type: "text",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "mothers-love-malayalam",
            title: "അമ്മയുടെ സ്നേഹം (Malayalam)"
          },
          content: `Sai Mother's love flows through my heart,
Like rivers flowing to the sea,
Her gentle hands heal every part,
Of pain and sorrow within me.

In her lap I find my rest,
Like a child so pure and free,
Mother Sai, you are the best,
Your love is all I'll ever need.

When storms of life come rushing in,
Your embrace keeps me so warm,
Divine Mother, through thick and thin,
You shelter me from every storm.`
        },
        {
          id: "love-and-light",
          title: "Love and Light - Video Poem",
          type: "video",
          description: "An inspiring English poem about spiritual transformation through Sai Baba's teachings",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This spoken word video poem explores themes of inner transformation and divine love, set against peaceful nature imagery."
        }
      ]
    }
  };

  const collection = collections[id as keyof typeof collections];

  if (!collection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Collection not found</h2>
          <Link to="/" className="text-orange-600 hover:text-orange-800 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SaiBabaIcon size={28} className="text-orange-600" />
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

      {/* Collection Header */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=300&fit=crop" 
              alt="Pine trees representing spiritual growth" 
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="text-orange-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-800">{collection.title}</h2>
            </div>
            <p className="text-xl text-gray-600">{collection.description}</p>
          </div>

          {/* Poems */}
          <div className="space-y-12">
            {collection.poems.map((poem, index) => (
              <div key={index} id={poem.id} className="bg-white rounded-lg shadow-lg overflow-hidden scroll-mt-20">
                {poem.type === "text" ? (
                  // Text Poem
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 text-center border-b border-gray-200 pb-4 flex-1">
                        {poem.title}
                      </h3>
                      <div className="ml-4 flex items-center space-x-2">
                        {poem.translationLink && (
                          <Link 
                            to={`/collection/${poem.translationLink.collection}#${poem.translationLink.poemId}`}
                            className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 transition-colors bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg"
                          >
                            <Languages size={16} />
                            <span className="text-sm">{poem.translationLink.title}</span>
                          </Link>
                        )}
                        <WhatsAppShare 
                          poemTitle={poem.title}
                          collectionId={id!}
                          poemId={poem.id}
                        />
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <pre className="whitespace-pre-wrap font-serif text-gray-700 leading-relaxed text-center">
                        {poem.content}
                      </pre>
                    </div>
                  </div>
                ) : (
                  // Video Poem
                  <>
                    <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                      {/* Placeholder for YouTube embed */}
                      <div className="text-center">
                        <Play className="text-gray-400 mb-2 mx-auto" size={48} />
                        <p className="text-gray-500">YouTube Video Placeholder</p>
                        <p className="text-sm text-gray-400">Video ID: {poem.embedId}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{poem.title}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-red-600">
                            <Youtube size={20} />
                            <span className="text-sm">Video</span>
                          </div>
                          <WhatsAppShare 
                            poemTitle={poem.title}
                            collectionId={id!}
                            poemId={poem.id}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{poem.description}</p>
                      <p className="text-sm text-gray-500 italic">{poem.videoDescription}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <SaiBabaIcon size={20} className="text-orange-400" />
            <p className="text-gray-300">Om Sai Ram</p>
            <SaiBabaIcon size={20} className="text-orange-400" />
          </div>
          <p className="text-gray-400">© 2024 Prasanna Saisree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Collection;

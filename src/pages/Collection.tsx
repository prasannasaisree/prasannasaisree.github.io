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
          document.title = `${poem.title} - ${collection.title} | Prasanna Saisree`;
          
          // Update or create meta description
          let metaDescription = document.querySelector('meta[name="description"]');
          if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
          }
          metaDescription.setAttribute('content', `Read "${poem.title}" - a spiritual poem by Prasanna Saisree inspired by Sathya Sai Baba's teachings. Experience divine love through poetry.`);
          
          // Update or create Open Graph title
          let ogTitle = document.querySelector('meta[property="og:title"]');
          if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
          }
          ogTitle.setAttribute('content', `${poem.title} - Prasanna Saisree`);
          
          // Update or create Open Graph description
          let ogDescription = document.querySelector('meta[property="og:description"]');
          if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
          }
          ogDescription.setAttribute('content', `Read "${poem.title}" - a spiritual poem inspired by Sathya Sai Baba's teachings. Experience divine love and wisdom through devotional poetry.`);
          
          // Update or create Open Graph URL
          let ogUrl = document.querySelector('meta[property="og:url"]');
          if (!ogUrl) {
            ogUrl = document.createElement('meta');
            ogUrl.setAttribute('property', 'og:url');
            document.head.appendChild(ogUrl);
          }
          ogUrl.setAttribute('content', `${window.location.origin}/collection/${id}#${poemId}`);
          
          // Update or create Open Graph type
          let ogType = document.querySelector('meta[property="og:type"]');
          if (!ogType) {
            ogType = document.createElement('meta');
            ogType.setAttribute('property', 'og:type');
            document.head.appendChild(ogType);
          }
          ogType.setAttribute('content', 'article');
          
          // Use different images based on poem type and language
          let imageUrl;
          if (poem.type === 'video') {
            imageUrl = 'https://images.unsplash.com/photo-1494790108755-2616c88a5e20?w=1200&h=630&fit=crop&overlay=dark&text=Video%20Poem';
          } else if (id === 'malayalam-devotion') {
            imageUrl = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=630&fit=crop';
          } else {
            imageUrl = 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=630&fit=crop';
          }
          
          // Update or create Open Graph image
          let ogImage = document.querySelector('meta[property="og:image"]');
          if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
          }
          ogImage.setAttribute('content', imageUrl);
          
          // Update or create Open Graph image width
          let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
          if (!ogImageWidth) {
            ogImageWidth = document.createElement('meta');
            ogImageWidth.setAttribute('property', 'og:image:width');
            document.head.appendChild(ogImageWidth);
          }
          ogImageWidth.setAttribute('content', '1200');
          
          // Update or create Open Graph image height
          let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
          if (!ogImageHeight) {
            ogImageHeight = document.createElement('meta');
            ogImageHeight.setAttribute('property', 'og:image:height');
            document.head.appendChild(ogImageHeight);
          }
          ogImageHeight.setAttribute('content', '630');
          
          // Update or create Twitter Card type
          let twitterCard = document.querySelector('meta[name="twitter:card"]');
          if (!twitterCard) {
            twitterCard = document.createElement('meta');
            twitterCard.setAttribute('name', 'twitter:card');
            document.head.appendChild(twitterCard);
          }
          twitterCard.setAttribute('content', 'summary_large_image');
          
          // Update or create Twitter title
          let twitterTitle = document.querySelector('meta[name="twitter:title"]');
          if (!twitterTitle) {
            twitterTitle = document.createElement('meta');
            twitterTitle.setAttribute('name', 'twitter:title');
            document.head.appendChild(twitterTitle);
          }
          twitterTitle.setAttribute('content', `${poem.title} - Prasanna Saisree`);
          
          // Update or create Twitter description
          let twitterDescription = document.querySelector('meta[name="twitter:description"]');
          if (!twitterDescription) {
            twitterDescription = document.createElement('meta');
            twitterDescription.setAttribute('name', 'twitter:description');
            document.head.appendChild(twitterDescription);
          }
          twitterDescription.setAttribute('content', `Read "${poem.title}" - a spiritual poem inspired by Sathya Sai Baba's teachings.`);
          
          // Update or create Twitter image
          let twitterImage = document.querySelector('meta[name="twitter:image"]');
          if (!twitterImage) {
            twitterImage = document.createElement('meta');
            twitterImage.setAttribute('property', 'twitter:image');
            document.head.appendChild(twitterImage);
          }
          twitterImage.setAttribute('content', imageUrl);
        }
      } else {
        // Default collection metadata when no specific poem is selected
        if (collection) {
          document.title = `${collection.title} | Prasanna Saisree`;
          
          let metaDescription = document.querySelector('meta[name="description"]');
          if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
          }
          metaDescription.setAttribute('content', collection.description);
        }
      }
    };

    updateMetaTags();
  }, [location.hash, id]);

  const collections = {
    "malayalam-devotion": {
      title: "മലയാളം ഭക്തി കവിതകൾ (Malayalam Devotional Poems)",
      description: "Spiritual poems in Malayalam expressing devotion to Sathya Sai Baba",
      headerImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=300&fit=crop",
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
പ്രേമത്തിന്റെ സൂഗന്ധം പരക്കുന്നു

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
          id: "divine-compassion-malayalam",
          title: "ദിവ്യ കരുണ (Divine Compassion)",
          type: "text",
          translationLink: {
            collection: "english-reflections",
            poemId: "divine-compassion-english",
            title: "Divine Compassion (English Video)"
          },
          content: `സായിയുടെ കരുണാമയമായ കണ്ണുകൾ
എന്റെ ആത്മാവിനെ സ്പർശിക്കുന്നു
പാപങ്ങളുടെ ഭാരം അകന്നുപോകുന്നു
ശുദ്ധതയുടെ പ്രകാശം വരുന്നു

ക്ഷമയുടെ സമുദ്രം നീയാണ്
സ്നേഹത്തിന്റെ മഴ നീയാണ്
എന്റെ ഗുരുവേ, എന്റെ രക്ഷകയേ
നിന്റെ കരുണയിൽ ഞാൻ കുളിക്കുന്നു`
        },
        {
          id: "inner-peace-malayalam",
          title: "അന്തഃശാന്തി (Inner Peace) - Video Poem",
          type: "video",
          description: "A serene Malayalam poem about finding inner peace through Sai Baba's grace",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This contemplative video poem explores the journey to inner tranquility through Malayalam verses.",
          translationLink: {
            collection: "english-reflections",
            poemId: "inner-peace-english",
            title: "Inner Peace (English)"
          }
        },
        {
          id: "eternal-bliss-malayalam",
          title: "നിത്യാനന്ദം (Eternal Bliss) - Video Poem",
          type: "video",
          description: "A joyful Malayalam devotional song celebrating eternal divine bliss",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This uplifting video poem captures the essence of divine joy and eternal happiness.",
          translationLink: {
            collection: "english-reflections",
            poemId: "eternal-bliss-english",
            title: "Eternal Bliss (English Video)"
          }
        },
        {
          id: "sais-glory",
          title: "സായി മഹിമ (Sai's Glory) - Video Poem",
          type: "video",
          description: "A melodious rendition of a Malayalam devotional poem praising Sai Baba's divine attributes",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This video poem captures the essence of Sai Baba's teachings through beautiful Malayalam verses accompanied by traditional devotional music."
        },
        {
          id: "surrender-malayalam",
          title: "സമർപ്പണം (Surrender)",
          type: "text",
          translationLink: {
            collection: "english-reflections",
            poemId: "surrender-english",
            title: "Surrender (English Video)"
          },
          content: `സായിയുടെ കാൽക്കൽ ഞാൻ സമർപ്പിക്കുന്നു
എന്റെ ഹൃദയവും മനസ്സും
എല്ലാ ആഗ്രഹങ്ങളും വിസർജ്ജിക്കുന്നു
നിന്റെ ഇഷ്ടത്തിന് അധീനമായി

അഹങ്കാരത്തിന്റെ ചങ്ങലകൾ പൊട്ടിച്ച്
വിനയത്തിന്റെ പാത തിരഞ്ഞെടുക്കുന്നു
സായി ബാബാ, എന്റെ നാഥാ
നിന്റെ സേവകനായി മാറ്റണമേ`
        },
        {
          id: "devotion-malayalam",
          title: "ഭക്തി (Devotion) - Video Poem",
          type: "video",
          description: "A heartfelt Malayalam video expressing pure devotion to Sai Baba",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This emotional video poem captures the essence of true devotion and love for the divine.",
          translationLink: {
            collection: "english-reflections",
            poemId: "devotion-english",
            title: "Devotion (English)"
          }
        },
        {
          id: "unity-malayalam",
          title: "ഐക്യം (Unity) - Video Poem",
          type: "video",
          description: "A powerful Malayalam video about oneness and unity in divine love",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This inspiring video poem explores the theme of unity and oneness through Sai Baba's teachings.",
          translationLink: {
            collection: "english-reflections",
            poemId: "unity-english",
            title: "Unity (English Video)"
          }
        }
      ]
    },
    "english-reflections": {
      title: "English Spiritual Reflections",
      description: "Contemplative verses on divine love and spiritual awakening",
      headerImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=300&fit=crop",
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
          id: "divine-compassion-english",
          title: "Divine Compassion - Video Poem",
          type: "video",
          description: "An inspiring English video poem about Sai Baba's infinite compassion",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This heartfelt video poem explores the depths of divine mercy and love through spoken English verses.",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "divine-compassion-malayalam",
            title: "ദിവ്യ കരുണ (Malayalam)"
          }
        },
        {
          id: "inner-peace-english",
          title: "Inner Peace",
          type: "text",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "inner-peace-malayalam",
            title: "അന്തഃശാന്തി (Malayalam Video)"
          },
          content: `In the stillness of my heart,
Where worldly noise cannot reach,
Sai's presence sets apart,
The peace that none can breach.

Gentle whispers in the soul,
Calm the storms of restless mind,
Making broken spirits whole,
Leaving earthly cares behind.

In this sacred quiet space,
Divine love begins to grow,
Wrapped in Sai's eternal grace,
Perfect peace I come to know.`
        },
        {
          id: "eternal-bliss-english",
          title: "Eternal Bliss - Video Poem",
          type: "video",
          description: "A celebratory English video poem about the joy of divine connection",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This joyous video poem celebrates the eternal happiness found in divine love and devotion.",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "eternal-bliss-malayalam",
            title: "നിത്യാനന്ദം (Malayalam Video)"
          }
        },
        {
          id: "love-and-light",
          title: "Love and Light - Video Poem",
          type: "video",
          description: "An inspiring English poem about spiritual transformation through Sai Baba's teachings",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This spoken word video poem explores themes of inner transformation and divine love, set against peaceful nature imagery."
        },
        {
          id: "surrender-english",
          title: "Surrender - Video Poem",
          type: "video",
          description: "A moving English video about letting go and surrendering to divine will",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This profound video poem explores the spiritual journey of surrender and trust in divine guidance.",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "surrender-malayalam",
            title: "സമർപ്പണം (Malayalam)"
          }
        },
        {
          id: "devotion-english",
          title: "Devotion",
          type: "text",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "devotion-malayalam",
            title: "ഭക്തി (Malayalam Video)"
          },
          content: `In the temple of my heart,
Sacred flames of love burn bright,
Devotion sets me apart,
From darkness into light.

Every prayer, every breath,
Offered at your holy feet,
Life or death, joy or death,
In your presence, all complete.

Sai Baba, my beloved guide,
In devotion I find home,
With you forever by my side,
No more need I ever roam.`
        },
        {
          id: "unity-english",
          title: "Unity - Video Poem",
          type: "video",
          description: "An uplifting English video about the oneness of all creation",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This beautiful video poem celebrates the unity of all beings in divine love and consciousness.",
          translationLink: {
            collection: "malayalam-devotion",
            poemId: "unity-malayalam",
            title: "ഐക്യം (Malayalam Video)"
          }
        }
      ]
    },
    "prayers-chants": {
      title: "Prayers & Sacred Chants",
      description: "Traditional prayers and chants for daily spiritual practice",
      headerImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=300&fit=crop",
      poems: [
        {
          id: "morning-prayer",
          title: "Morning Prayer",
          type: "text",
          content: `As dawn breaks with golden light,
I bow before your sacred sight,
Sai Baba, guide my steps today,
In love and service, let me stay.

Bless this morning with your grace,
Let your peace fill every space,
In my heart, your name I keep,
Awake or in my gentle sleep.

Om Sai Ram, Om Sai Ram,
You are my shelter, you are my calm,
Grant me wisdom, grant me strength,
To walk with you at any length.`
        },
        {
          id: "evening-devotion",
          title: "Evening Devotion",
          type: "text",
          content: `As evening shadows softly fall,
I offer gratitude for all,
The blessings of this passing day,
Your loving presence lights my way.

Forgive my errors, calm my mind,
Leave worldly worries far behind,
In quiet prayer, I seek your face,
Surrounded by your boundless grace.

Let peaceful sleep restore my soul,
Make broken spirits pure and whole,
Tomorrow bring new hope and light,
Blessed Sai, guard me through the night.`
        },
        {
          id: "gayatri-mantra",
          title: "Gayatri Mantra - Video Chant",
          type: "video",
          description: "Sacred Sanskrit chant for spiritual illumination and divine wisdom",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "A meditative video presentation of the Gayatri Mantra with beautiful imagery and traditional pronunciation."
        },
        {
          id: "sai-ashtakam",
          title: "Sai Ashtakam",
          type: "text",
          content: `Sukhakarta Dukhaharta, Varta Vighnachi,
Nurvikar Nirupadhi, Sarva Karanachi,
Sadguru Sainatha, Maharaj ki Jai!

Dnyanaswaroopa Samadhan, Sukh Peace,
Kaliyugavatara, Saguna, Parabramha,
Sadguru Sainatha, Maharaj ki Jai!

Bhaktavarsha Bhavya, Bhagyodayakara,
Uttamavara Stotra, Vaibhava Prakara,
Sadguru Sainatha, Maharaj ki Jai!

Ashta Gunavanta, Nirupama Gunakara,
Apurvaisvaryasampanna, Sarva Manojña,
Sadguru Sainatha, Maharaj ki Jai!`
        },
        {
          id: "om-sai-ram-chant",
          title: "Om Sai Ram Chant - Video",
          type: "video",
          description: "Rhythmic chanting of the sacred name Om Sai Ram",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "A peaceful chanting session with the divine name, perfect for meditation and devotional practice."
        },
        {
          id: "divine-names",
          title: "Divine Names",
          type: "text",
          content: `Sai Ram, Sai Ram, sacred name divine,
In every breath, your presence shine,
Sai Nath, Sai Nath, protector true,
My heart and soul belong to you.

Parthi Sai, beloved guide,
Forever by my faithful side,
Prema Sai, love incarnate pure,
In your grace, I am secure.

Bhagavan, the Lord most high,
Lift my spirit to the sky,
Avatar of this blessed age,
Turn my life's every page.

Om Sai Ram, Om Sai Ram,
You are my peace, you are my balm,
In every name, your glory rings,
The joy that true devotion brings.`
        }
      ]
    },
    "wisdom-teachings": {
      title: "Wisdom & Teachings",
      description: "Poetic reflections on Sai Baba's timeless teachings and life lessons",
      headerImage: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=300&fit=crop",
      poems: [
        {
          id: "path-of-truth",
          title: "The Path of Truth",
          type: "text",
          content: `Truth is the lamp that lights the way,
Through darkness of the night and day,
Sai teaches us to speak what's right,
To live in truth's eternal light.

No falsehood can the soul uplift,
Truth alone is the divine gift,
In honest words and righteous deed,
Truth plants the spirit's sacred seed.

When tempted by deceit's sweet call,
Remember truth conquers all,
For Sai Baba shows the way,
Truth shall dawn like breaking day.

Walk the path that leads to God,
Where truthful saints and sages trod,
In truth find peace, in truth find rest,
Truth makes the human spirit blessed.`
        },
        {
          id: "service-love",
          title: "Service & Love",
          type: "text",
          content: `Service to others is service to God,
This truth Sai Baba has long bestowed,
In helping hands and caring heart,
Divine love plays its sacred part.

Love all beings, serve all life,
Cut through ego like a knife,
In every face, see God's own form,
Let compassion keep you warm.

Feed the hungry, heal the sick,
Comfort those whose hearts are thick,
With sorrow's weight and pain's dark cloud,
Service makes God's presence loud.

For in the act of selfless giving,
We find the secret of true living,
Sai's teaching, pure and bright:
Love and serve with all your might.`
        },
        {
          id: "unity-diversity",
          title: "Unity in Diversity - Video Poem",
          type: "video",
          description: "A powerful message about seeing oneness in all of creation",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "This inspiring video explores Sai Baba's teachings on unity, featuring diverse imagery celebrating the oneness of humanity."
        },
        {
          id: "forgiveness",
          title: "Forgiveness",
          type: "text",
          content: `Forgive and you shall be forgiven,
This lesson from heaven is given,
Let go of anger, pain, and spite,
Embrace forgiveness, pure and bright.

When others hurt with word or deed,
Remember mercy's holy creed,
For holding grudges binds the soul,
Forgiveness makes the spirit whole.

Sai teaches us to understand,
That love should guide our heart and hand,
In pardoning those who do us wrong,
We sing divinity's own song.

Release the past, embrace the new,
Let forgiveness carry you,
To heights of peace you've never known,
Where love has fully grown.`
        },
        {
          id: "selfless-action",
          title: "Selfless Action",
          type: "text",
          content: `Work without the fruits in mind,
This wisdom Sai helps us find,
Do your duty, play your part,
With sincere and loving heart.

Attachment binds us to the wheel,
Of suffering that we daily feel,
But selfless action sets us free,
From ego's false identity.

Like a flower gives its scent,
Without thought of what is spent,
Offer all your works to God,
Follow where the masters trod.

In selfless service find your joy,
Let nothing divine love destroy,
For action done with pure intent,
Brings peace that heaven has sent.`
        },
        {
          id: "divine-purpose",
          title: "Divine Purpose - Video Poem",
          type: "video",
          description: "Contemplation on finding one's spiritual purpose in life",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "A reflective video poem about discovering and fulfilling one's divine purpose through Sai Baba's guidance."
        }
      ]
    },
    "festival-celebrations": {
      title: "Festival & Celebration Poems",
      description: "Joyous verses for religious festivals and special occasions",
      headerImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=300&fit=crop",
      poems: [
        {
          id: "guru-purnima",
          title: "Guru Purnima",
          type: "text",
          content: `On this sacred Guru Purnima day,
To our beloved master we pray,
Sai Baba, you are the light divine,
Forever grateful that you are mine.

Guru is the one who leads from dark,
To light where truth leaves its mark,
You showed us the path to the divine,
In your love, our souls align.

Moon is full on this blessed night,
Just as our hearts with pure delight,
Bow down to you, our sacred guide,
With you, we shall always abide.

Guru Brahma, Guru Vishnu too,
Guru Maheshwara, all are you,
On this day of celebration,
Grant us your divine salvation.`
        },
        {
          id: "diwali-lights",
          title: "Diwali Lights - Video Poem",
          type: "video",
          description: "Celebration of the festival of lights with spiritual meaning",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "A festive video poem celebrating Diwali, showing the triumph of light over darkness in beautiful visual poetry."
        },
        {
          id: "christmas-love",
          title: "Christmas Love",
          type: "text",
          content: `At Christmas time, love fills the air,
Sai's message resonates everywhere,
Love all beings, serve with care,
His teaching is beyond compare.

Like the star that shone so bright,
Guiding wise men through the night,
Sai's love lights up our way,
On this blessed Christmas day.

Give and share with open heart,
Let compassion play its part,
In the spirit of the season,
Love is life's most sacred reason.

Christ and Sai both taught the same,
Love is more than just a name,
It's the essence of our being,
Beyond all earthly seeing.`
        },
        {
          id: "new-year-blessings",
          title: "New Year Blessings",
          type: "text",
          content: `As the old year fades away,
New hopes dawn with this new day,
Sai Baba, bless this fresh start,
Guide my mind and heal my heart.

Let the past mistakes be gone,
With forgiveness, carry on,
Grant me wisdom, grant me peace,
Let all suffering find release.

In this year that lies ahead,
Let love and truth be widespread,
May I serve with greater zeal,
Let your presence in me heal.

New Year brings new chances bright,
To walk further in your light,
Bless all beings, great and small,
With your love that conquers all.`
        },
        {
          id: "mahashivaratri",
          title: "Mahashivaratri - Video Poem",
          type: "video",
          description: "Sacred celebration of Lord Shiva and spiritual awakening",
          embedId: "dQw4w9WgXcQ",
          videoDescription: "A devotional video poem for Mahashivaratri, exploring themes of destruction of ego and spiritual transformation."
        },
        {
          id: "celebration-unity",
          title: "Celebration of Unity",
          type: "text",
          content: `All festivals speak the same truth,
From childhood to advanced youth,
That love and light shall always win,
Over darkness and over sin.

Hindu, Muslim, Christian, Sikh,
All are one, the truth we seek,
Sai teaches us to celebrate,
Unity before it's too late.

Every prayer to God above,
Carries the same message of love,
Every ritual, every song,
Reminds us where we all belong.

In the garden of the divine,
Different flowers intertwine,
Each unique in its own way,
Yet together, they pray.

Celebrate our differences,
While cherishing our common senses,
For in unity we find our strength,
To go to any faithful length.`
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
            <div className="flex items-center">
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
              src={collection.headerImage} 
              alt={`Header image for ${collection.title}`} 
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
                    <h3 className="text-2xl font-bold text-gray-800 text-center border-b border-gray-200 pb-4 mb-6">
                      {poem.title}
                    </h3>
                    <div className="prose prose-lg max-w-none mb-6">
                      <pre className="whitespace-pre-wrap font-serif text-gray-700 leading-relaxed text-center">
                        {poem.content}
                      </pre>
                    </div>
                    {/* Author Attribution */}
                    <div className="text-center mb-8">
                      <p className="text-gray-500 italic text-sm">— Prasanna Saisree</p>
                    </div>
                    {/* Translation and Share Links at Bottom */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 pt-6 border-t border-gray-100">
                      {poem.translationLink && (
                        <Link 
                          to={`/collection/${poem.translationLink.collection}#${poem.translationLink.poemId}`}
                          className="flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-800 transition-colors bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg border border-orange-200"
                        >
                          <Languages size={16} />
                          <span className="text-sm font-medium">{poem.translationLink.title}</span>
                        </Link>
                      )}
                      <WhatsAppShare 
                        poemTitle={poem.title}
                        collectionId={id!}
                        poemId={poem.id}
                      />
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
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{poem.title}</h3>
                      {/* Author Attribution for Video */}
                      <p className="text-gray-500 italic text-sm mb-4">by Prasanna Saisree</p>
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center space-x-1 text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                          <Youtube size={16} />
                          <span className="text-sm font-medium">Video</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{poem.description}</p>
                      <p className="text-sm text-gray-500 italic mb-6">{poem.videoDescription}</p>
                      
                      {/* Translation and Share Links at Bottom */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 pt-6 border-t border-gray-100">
                        {poem.translationLink && (
                          <Link 
                            to={`/collection/${poem.translationLink.collection}#${poem.translationLink.poemId}`}
                            className="flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-800 transition-colors bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg border border-orange-200"
                          >
                            <Languages size={16} />
                            <span className="text-sm font-medium">{poem.translationLink.title}</span>
                          </Link>
                        )}
                        <WhatsAppShare 
                          poemTitle={poem.title}
                          collectionId={id!}
                          poemId={poem.id}
                        />
                      </div>
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

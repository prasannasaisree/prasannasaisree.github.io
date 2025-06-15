
import { PoemCollection } from '../types/poem';

export const poemCollections: PoemCollection[] = [
  {
    id: "malayalam-devotion",
    title: "മലയാളം ഭക്തി കവിതകൾ (Malayalam Devotional Poems)",
    description: "Spiritual poems in Malayalam expressing devotion to Sathya Sai Baba",
    poems: [
      { id: "divine-light", title: "Divine Light", type: "text", language: "Malayalam" },
      { id: "sacred-path", title: "Sacred Path", type: "text", language: "Malayalam" },
      { id: "mothers-love-malayalam", title: "Mother's Love (Malayalam)", type: "text", language: "Malayalam" },
      { id: "divine-compassion-malayalam", title: "Divine Compassion", type: "text", language: "Malayalam" },
      { id: "inner-peace-malayalam", title: "Inner Peace (Video)", type: "video", language: "Malayalam" },
      { id: "eternal-bliss-malayalam", title: "Eternal Bliss (Video)", type: "video", language: "Malayalam" },
      { id: "sais-glory", title: "Sai's Glory (Video)", type: "video", language: "Malayalam" }
    ]
  },
  {
    id: "english-reflections",
    title: "English Spiritual Reflections",
    description: "Contemplative verses on divine love and spiritual awakening",
    poems: [
      { id: "eternal-grace", title: "Eternal Grace", type: "text", language: "English" },
      { id: "journey-within", title: "Journey Within", type: "text", language: "English" },
      { id: "mothers-love-english", title: "Mother's Love", type: "text", language: "English" },
      { id: "divine-compassion-english", title: "Divine Compassion (Video)", type: "video", language: "English" },
      { id: "inner-peace-english", title: "Inner Peace", type: "text", language: "English" },
      { id: "eternal-bliss-english", title: "Eternal Bliss (Video)", type: "video", language: "English" },
      { id: "love-and-light", title: "Love and Light (Video)", type: "video", language: "English" }
    ]
  },
  {
    id: "prayers-chants",
    title: "Prayers & Sacred Chants",
    description: "Traditional prayers and chants for daily spiritual practice",
    poems: [
      { id: "morning-prayer", title: "Morning Prayer", type: "text", language: "English" },
      { id: "evening-devotion", title: "Evening Devotion", type: "text", language: "English" },
      { id: "gayatri-mantra", title: "Gayatri Mantra (Video)", type: "video", language: "Sanskrit" },
      { id: "sai-ashtakam", title: "Sai Ashtakam", type: "text", language: "Sanskrit" },
      { id: "om-sai-ram-chant", title: "Om Sai Ram Chant (Video)", type: "video", language: "Sanskrit" },
      { id: "divine-names", title: "Divine Names", type: "text", language: "Sanskrit" }
    ]
  },
  {
    id: "wisdom-teachings",
    title: "Wisdom & Teachings",
    description: "Poetic reflections on Sai Baba's timeless teachings and life lessons",
    poems: [
      { id: "path-of-truth", title: "The Path of Truth", type: "text", language: "English" },
      { id: "service-love", title: "Service & Love", type: "text", language: "English" },
      { id: "unity-diversity", title: "Unity in Diversity (Video)", type: "video", language: "English" },
      { id: "forgiveness", title: "Forgiveness", type: "text", language: "English" },
      { id: "selfless-action", title: "Selfless Action", type: "text", language: "English" },
      { id: "divine-purpose", title: "Divine Purpose (Video)", type: "video", language: "English" }
    ]
  },
  {
    id: "festival-celebrations",
    title: "Festival & Celebration Poems",
    description: "Joyous verses for religious festivals and special occasions",
    poems: [
      { id: "guru-purnima", title: "Guru Purnima", type: "text", language: "English" },
      { id: "diwali-lights", title: "Diwali Lights (Video)", type: "video", language: "English" },
      { id: "christmas-love", title: "Christmas Love", type: "text", language: "English" },
      { id: "new-year-blessings", title: "New Year Blessings", type: "text", language: "English" },
      { id: "mahashivaratri", title: "Mahashivaratri (Video)", type: "video", language: "English" },
      { id: "celebration-unity", title: "Celebration of Unity", type: "text", language: "English" }
    ]
  }
];

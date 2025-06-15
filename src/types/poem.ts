
export interface Poem {
  id: string;
  title: string;
  type: 'text' | 'video';
  language: string;
  content?: string;
  videoId?: string;
  description?: string;
}

export interface PoemCollection {
  id: string;
  title: string;
  description: string;
  poems: Poem[];
}

export interface RecentPoem {
  title: string;
  language: string;
  collection: string;
  type: 'text' | 'video';
  id: string;
}

export interface VideoData {
  id: string;
  title: string;
  description: string;
  embedId: string;
  language: string;
}

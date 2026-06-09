interface NavbarTabsType {
  name: string;
  slug: string;
  icon: React.ReactElement;
  url: string;
}

interface ContentRailType {
  imgUrl: string;
  title: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface AnimeResponse {
  pagination: Pagination;
  data: Anime[];
}

export interface Anime {
  mal_id: number;
  url: string;

  images: {
    jpg: AnimeImageSet;
    webp: AnimeImageSet;
  };

  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };

  approved: boolean;

  titles: AnimeTitle[];

  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];

  type: string;
  source: string;

  episodes: number | null;

  status: string;
  airing: boolean;

  aired: {
    from: string | null;
    to: string | null;

    prop: {
      from: AnimeDateProp;
      to: AnimeDateProp;
    };

    string: string;
  };

  duration: string;
  rating: string | null;

  score: number | null;
  scored_by: number | null;

  rank: number | null;
  popularity: number | null;

  members: number;
  favorites: number;

  synopsis: string | null;
  background: string | null;

  season: string | null;
  year: number | null;

  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };

  producers: AnimeMeta[];
  licensors: AnimeMeta[];
  studios: AnimeMeta[];

  genres: AnimeMeta[];
  explicit_genres: AnimeMeta[];
  themes: AnimeMeta[];
  demographics: AnimeMeta[];
}

export interface AnimeImageSet {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface AnimeTitle {
  type: string;
  title: string;
}

export interface AnimeDateProp {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface AnimeMeta {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface CategoryDataType {
  letter: string;
  categories: { name: string; slug: string }[];
}
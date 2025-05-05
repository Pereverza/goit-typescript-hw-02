export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  alt_description: string | null;
  width: number;
  height: number;
  likes: number;
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}
export interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

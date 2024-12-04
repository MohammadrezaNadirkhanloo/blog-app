interface Author {
  avatar: string;
  avatarUrl: string;
  name: string;
  _id: string;
}
export interface Post {
  _id: string;
  title: string;
  slug: string;
  readingTime: string;
  coverImageUrl: string;
  author: Author;
  commentsCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
}

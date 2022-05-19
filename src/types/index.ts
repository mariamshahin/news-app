export interface Post {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
  comments?: Array<Comment>;
}

export interface Comment {
  name: string;
  email: string;
  message: string;
}

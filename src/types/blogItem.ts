export interface BlogItem {
  id: number;
  title: string;
  image: {
    url: string;
  };
  alt: string;
  date: string;
  description: string;
}

export interface INews {
  id: string;
  title: string;
  time: string;
  url: string;
  image: string | undefined;
}

interface IAuthor {
  name: string;
  ava: string | undefined;
}
export interface INewsBody {
  author: IAuthor;
  description: string;
  content: string;
  title: string;
  time: string;
  image: string | undefined;
}

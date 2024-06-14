export type Categories = {
  id: string;
  name: string;
  Slug: string;
  img: string;
  price: {
    name: string;
    plane: string;
    price: number;
    qtd: number;
    total: number;
    descript: string;
  }[];
};
export type Hotmart = {
  id: number;
  name: string;
  price: number;
  img: string;
  Slug?: String;
  descript: string;
};
export type Admin = {
  id: number;
  name: String;
  url: string;
};
export type Links = {
  name: string;
  path: string;
};









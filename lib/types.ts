export type Product = {
  _id: any;
  title: string;
  slug: {
    current: string;
  };
  images: any[];
  size: string;
  color: string;
  weight: string;
  price: number;
  description: string;
  features: string;
  tags: string[];
  category: {
    title: string;
  };
  quantity: number;
};

export type Category = {
  title: string;
  slug: {
    current: string;
  };
};

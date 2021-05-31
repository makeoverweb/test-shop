export interface TStateShop {
  products: {
    data: TProduct[];
    loading: boolean;
    error: Error | null;
  };
  cart: {
    data: TProduct[];
    loading: boolean;
    error: Error | null;
    total: number;
  };
  orders: { data: TProduct[]; loading: boolean; error: Error | null };
}

export interface TProduct {
  _id: string;
  price: string;
  image: string;
  title: string;
  description: string;
  available: number;
}

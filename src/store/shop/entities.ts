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
  orders: {
    data: TOrderRes[];
    loading: boolean;
    error: Error | null;
  };
}

export interface TProduct {
  id: string;
  price: string;
  image: string;
  title: string;
  description: string;
  available: number;
}
export interface TOrderRes {
  userName: string;
  userPhone: string;
  products: TProduct[];
  id: string;
}
export interface TOrderReq {
  userName: string;
  userPhone: string;
  products: TProduct[];
}

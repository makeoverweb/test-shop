export interface TStateProducts {
  data: TProduct[];
  loading: boolean;
  error: Error | null;
};

export interface TProduct{
  image: string;
  title: string;
  price: number;
  order: number;
  id: string;
};

import { TProduct } from "../products/entities";

export interface TStateCart {
  data: TProduct[];
  loading: boolean;
  error: Error | null;
}

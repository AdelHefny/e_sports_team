import { StaticImageData } from "next/image";
import { createContext } from "react";
export type productType = {
  id: number;
  productName: string;
  price: number;
  discount?: number;
  description: string;
  img: StaticImageData;
  reviews: {
    stars: number;
    comment: string;
  }[];
  category: string[];
};
export const cartContext = createContext<
  [productType[], (productToAdd: productType) => void]
>([[], (productToAdd: productType) => {}]);

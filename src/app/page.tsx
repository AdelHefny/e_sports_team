"use client";
import { cartContext, productType } from "./cartContext";
import HomePage from "./components/frontPage/homePage";
import NavBar from "./components/navBar/navBar";
import { useContext, useState } from "react";

export default function Home() {
  const [cartProducts, setCartProducts] = useState<productType[]>([]);
  const cartSetter = (productToAdd: productType) => {
    setCartProducts((prev) => [...prev, productToAdd]);
  };
  return (
    <cartContext.Provider value={[cartProducts, cartSetter]}>
      <main className="bg-gray-850 spotLight overflow-hidden">
        <NavBar />
        <HomePage />
      </main>
    </cartContext.Provider>
  );
}

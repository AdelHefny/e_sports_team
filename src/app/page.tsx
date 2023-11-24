"use client";
import { cartContext, productType } from "./cartContext";
import NavBar from "./components/navBar/components/navBar/navBar";
import { useContext, useState } from "react";

export default function Home() {
  const [cartProducts, setCartProducts] = useState<productType[]>([]);
  const cartSetter = (productToAdd: productType) => {
    setCartProducts((prev) => [...prev, productToAdd]);
  };
  return (
    <cartContext.Provider value={[cartProducts, cartSetter]}>
      <main className="bg-gray-850 spotLight">
        <NavBar />
      </main>
    </cartContext.Provider>
  );
}

"use client";
import { cartContext, productType } from "./cartContext";
import HomePage from "./components/frontPage/homePage";
import NavBar from "./components/navBar/navBar";
import { useState } from "react";
import Sponsors from "./components/sponsors/sponsors";
import Highlights from "./components/highlights/highlights";
import Matches from "./components/matchesList/matchesList";
import About from "./components/about/about";
import Gallary from "./components/gallary/gallary";

export default function Home() {
  const [cartProducts, setCartProducts] = useState<productType[]>([]);
  const cartSetter = (productToAdd: productType) => {
    setCartProducts((prev) => [...prev, productToAdd]);
  };
  return (
    <cartContext.Provider value={[cartProducts, cartSetter]}>
      <main className="bg-gray-850 spotLight overflow-hidden relative">
        <NavBar />
        <HomePage />
        <Sponsors />
        <Highlights />
        <Matches />
        <About />
        <Gallary />
      </main>
    </cartContext.Provider>
  );
}

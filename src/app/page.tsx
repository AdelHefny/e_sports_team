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
import Team from "./components/team/team";
import Blog from "./components/blog/blog";

export default function Home() {
  const [cartProducts, setCartProducts] = useState<productType[]>([]);
  const cartSetter = (productToAdd: productType) => {
    setCartProducts((prev) => [...prev, productToAdd]);
  };
  return (
    <cartContext.Provider value={[cartProducts, cartSetter]}>
      <main className="bg-gray-850 spotLight relative overflow-hidden">
        <NavBar />
        <HomePage />
        <Sponsors />
        <Highlights />
        <Matches />
        <About />
        <Gallary />
        <Team />
        <Blog />
      </main>
    </cartContext.Provider>
  );
}

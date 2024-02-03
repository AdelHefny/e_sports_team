"use client";
import { cartContext, productType } from "./cartContext";
import HomePage from "./components/frontPage/homePage";
import NavBar from "./components/navBar/navBar";
import { useEffect, useState } from "react";
import Sponsors from "./components/sponsors/sponsors";
import Highlights from "./components/highlights/highlights";
import Matches from "./components/matchesList/matchesList";
import About from "./components/about/about";
import Gallary from "./components/gallary/gallary";
import Team from "./components/team/team";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [cartProducts, setCartProducts] = useState<productType[]>([]);
  const cartSetter = (productToAdd: productType) => {
    setCartProducts((prev) => [...prev, productToAdd]);
  };
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    });
  });
  return (
    <cartContext.Provider value={[cartProducts, cartSetter]}>
      <main className="bg-gray-850 spotLight relative overflow-hidden">
        <button
          className={`fixed bottom-10 right-8 w-10 h-10  goTopBtn ${
            window.scrollY > 200 ? "z-50 opacity-100" : "opacity-0 -z-0"
          }`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          aria-label="return to the top of the page"
        >
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            size="lg"
            className="upArrow"
          />
        </button>
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
      <Footer />
    </cartContext.Provider>
  );
}

import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ShoppingBtn from "./components/navBar/shoppingBtn";
import BurgerBtn from "./components/navBar/burgerBtn";
import "./navBar.css";
import HomeList from "./components/navBar/Lists/homeList";
import TeamMatchesList from "./components/navBar/Lists/teamMatchesList";
import ShopList from "./components/navBar/Lists/shopList";
import BlogList from "./components/navBar/Lists/blogList";

function NavBar() {
  return (
    <nav className="relative flex flex-row min-h-[84px] z-50 max-h-[170px] bg-transparent justify-between max-w-full px-8 md:px-0 md:max-w-[1050px] mx-auto md:space-x-12 items-center">
      <div>
        <Link href={"/"} className="text-3xl text-white font-bold">
          SPA<span className="text-purple">WN</span>
        </Link>
      </div>
      <div className="md:flex hidden min-h-[84px] max-h-[170px]">
        <ul className="flex flex-row flex-wrap h-full items-center space-x-8">
          <li className="h-[80px] homeLink relative flex items-center justify-center">
            <Link
              href={"/asdad"}
              className="w-full h-7 block relative hover:after:w-full after:duration-500 after:content-[''] after:absolute after:bg-purple after:w-3 after:h-[2px] after:bottom-0 after:left-0"
            >
              <h1>Home</h1>
            </Link>
            <HomeList inMobile={false} />
          </li>
          <li className="h-[84px] teamLink relative flex items-center justify-center before:content-[''] before:h-7 before:w-px before:absolute before:-left-4 before:bg-gray-600">
            <Link
              href={"/"}
              className="w-full h-7 block relative hover:after:w-full after:duration-500 after:content-[''] after:absolute after:bg-purple after:w-3 after:h-[2px] after:bottom-0 after:left-0"
            >
              <h1>Team Matches</h1>
            </Link>
            <TeamMatchesList inMobile={false} />
          </li>
          <li className="h-[84px] shopLink relative flex items-center justify-center before:content-[''] before:h-7 before:w-px before:absolute before:-left-4 before:bg-gray-600">
            <Link
              href={"/"}
              className="w-full h-7 block relative hover:after:w-full after:duration-500 after:content-[''] after:absolute after:bg-purple after:w-3 after:h-[2px] after:bottom-0 after:left-0"
            >
              <h1>Shop</h1>
            </Link>
          </li>
          <ShopList inMobile={false} />
          <li className="h-[84px] relative before:content-[''] flex items-center justify-center blogLink before:h-7 before:w-px before:absolute before:-left-4 before:bg-gray-600">
            <Link
              href={"/"}
              className="w-full h-7 relative after:content-[''] after:absolute after:bg-purple hover:after:w-full after:w-3 after:h-[2px] after:bottom-0 after:left-0 before:content-[''] after:transition-all after:duration-500 before:h-full before:w-px before:absolute"
            >
              <h1>Blog</h1>
            </Link>
            <BlogList inMobile={false} />
          </li>
          <li className="flex items-center justify-center relative before:content-[''] before:h-7 before:w-px before:absolute before:-left-4 before:bg-gray-600">
            <Link
              href={"/"}
              className="w-full h-7 relative after:content-[''] after:absolute after:bg-purple after:w-3 after:h-[2px] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500"
            >
              <h1>Forums</h1>
            </Link>
          </li>
        </ul>
      </div>
      <BurgerBtn />
      <div className="md:flex hidden">
        <ul className="flex flex-row items-center space-x-6">
          <li>
            <Link href={"https://store.steampowered.com/"} target="_blank">
              <FontAwesomeIcon
                icon={faSteam}
                className="text-purple w-8 h-5 hover:text-white transition duration-500"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.twitch.tv/"} target="_blank">
              <FontAwesomeIcon
                icon={faTwitch}
                className="text-purple w-8 h-5 hover:text-white transition duration-500"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://discord.com/"} target="_blank">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-purple w-8 h-5 hover:text-white transition duration-500"
              />
            </Link>
          </li>
        </ul>
      </div>
      <ShoppingBtn />
    </nav>
  );
}

export default NavBar;

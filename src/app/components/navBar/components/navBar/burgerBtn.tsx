"use client";
import Link from "next/link";
import { useState } from "react";
import HomeList from "./Lists/homeList";
import TeamMatchesList from "./Lists/teamMatchesList";
import ShopList from "./Lists/shopList";
import BlogList from "./Lists/blogList";
import "../../navBar.css";
function BurgerBtn() {
  const [show, setShow] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showBlog, setshowBlog] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className={`relative h-5 transition-all ${
          show ? "" : "hover:h-6"
        } duration-500 md:hidden flex w-6 before:content-[''] before:transition-all before:duration-500 ${
          show
            ? "before:rotate-45 before:translate-y-full before:top-1/4"
            : "before:top-0"
        } before:absolute  before:h-[4px] before:w-full before:left-0 before:bg-purple after:content-[''] after:transition-all after:duration-500 after:absolute after:left-0 ${
          show
            ? `after:-rotate-45 after:-translate-y-1/2 after:bottom-1/4`
            : "after:bottom-0"
        } after:h-[4px] after:w-full after:bg-purple`}
        aria-label="show menu"
      >
        <span
          className={`${
            show ? `opacity-0` : `opacity-100`
          } h-[4px] w-full bg-purple absolute top-1/2 transition-all duration-500 -translate-y-1/2 left-0`}
        ></span>
      </button>
      <div
        className={`bg-gray-800 ${
          show ? `opacity-100 ` : `opacity-0 pointer-events-none`
        } absolute w-full left-0 bottom-0 translate-y-full h-max transition-all duration-500 md:hidden`}
      >
        <ul className="flex flex-col justify-start flex-wrap items-start pl-6 py-6">
          <li
            className={`relative hover:bg-gray-900 ${
              showHome ? "h-[470px]" : "h-12"
            } w-full pl-6 effect overflow-hidden`}
          >
            <button
              className="w-full h-12 flex justify-start items-center outline-none"
              onClick={() => {
                setShowHome(!showHome);
              }}
            >
              <h1>Home</h1>
            </button>
            <HomeList inMobile={true} />
          </li>
          <li
            className={`relative hover:bg-gray-900 ${
              showTeam ? "h-[310px]" : "h-12"
            } w-full pl-6 effect overflow-hidden`}
          >
            <button
              className="w-full h-12 flex justify-start items-center outline-none"
              onClick={() => {
                setShowTeam(!showTeam);
              }}
            >
              <h1>Team Matches</h1>
            </button>
            <TeamMatchesList inMobile={true} />
          </li>
          <li
            className={`relative ${
              showShop ? "shopMbList " : "h-12"
            } hover:bg-gray-900 w-full pl-6 effect overflow-hidden`}
          >
            <button
              onClick={() => {
                setShowShop(!showShop);
              }}
              className={`w-full h-12 flex justify-start items-center `}
            >
              <h1>Shop</h1>
            </button>
            <ShopList inMobile={true} />
          </li>
          <li
            className={`relative hover:bg-gray-900 w-full h-12 ${
              showBlog ? "h-[380px]" : "h-12"
            } pl-6 effect overflow-hidden`}
          >
            <button
              onClick={() => {
                setshowBlog(!showBlog);
              }}
              className={`w-full h-12 flex justify-start items-center `}
            >
              <h1>Blog</h1>
            </button>
            <BlogList inMobile={true} />
          </li>
          <li className="relative hover:bg-gray-900 w-full h-12 px-6">
            <Link
              href={"/"}
              className="w-full h-12 flex justify-start items-center"
            >
              <h1>Forums</h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerBtn;

"use client";
import Image from "next/image";
import "../homePage.css";
import fnatics from "../../../Images/Fnatic-at-dream-league-9-700x700.jpg";
import Link from "next/link";
import { RefObject, useRef } from "react";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
function EventPrev({
  eventNum,
  setEventNum,
  titleElement,
  bigtitleElement,
}: {
  eventNum: number;
  setEventNum: (right: boolean) => void;
  titleElement: RefObject<HTMLParagraphElement>;
  bigtitleElement: RefObject<HTMLParagraphElement>;
}) {
  const rightBtnImg = useRef<HTMLDivElement>(null);
  const leftBtnImg = useRef<HTMLDivElement>(null);
  const mainImg = useRef<HTMLDivElement>(null);
  const readMore = useRef<HTMLAnchorElement>(null);
  const rotateImg = (value: boolean) => {
    mainImg.current?.classList.add("resize");
    leftBtnImg.current?.classList.add("resize");
    rightBtnImg.current?.classList.add("resize");
    mainImg.current?.classList.add("top-0");
    mainImg.current?.classList.remove("bottom-0");
    mainImg.current?.parentElement?.children[0].classList.remove("scale-110");
    mainImg.current?.parentElement?.children[0].classList.add("scale-100");
    leftBtnImg.current?.classList.add("top-0");
    leftBtnImg.current?.classList.remove("bottom-0");
    rightBtnImg.current?.classList.add("top-0");
    rightBtnImg.current?.classList.remove("bottom-0");
    titleElement.current?.classList.add("opacity-0");
    titleElement.current?.classList.add("translate-x-full");
    bigtitleElement.current?.classList.add("opacity-0");
    bigtitleElement.current?.classList.add("translate-x-full");
    readMore.current?.classList.add("-translate-y-full");
    readMore.current?.classList.add("opacity-0");
    setTimeout(() => {
      titleElement.current?.classList.remove("translate-x-full");
      titleElement.current?.classList.add("-translate-x-1/2");
    }, 300);
    setTimeout(() => {
      setEventNum(value);
      mainImg.current?.classList.remove("resize");
      leftBtnImg.current?.classList.remove("resize");
      rightBtnImg.current?.classList.remove("resize");
      leftBtnImg.current?.classList.add("bottom-0");
      leftBtnImg.current?.classList.remove("top-0");
      rightBtnImg.current?.classList.add("bottom-0");
      rightBtnImg.current?.classList.remove("top-0");
      mainImg.current?.classList.add("bottom-0");
      mainImg.current?.classList.remove("top-0");
      mainImg.current?.parentElement?.children[0].classList.remove("scale-100");
      mainImg.current?.parentElement?.children[0].classList.add("scale-110");
      titleElement.current?.classList.remove("opacity-0");
      titleElement.current?.classList.remove("translate-x-full");
      titleElement.current?.classList.remove("-translate-x-1/2");
      bigtitleElement.current?.classList.remove("opacity-0");
      bigtitleElement.current?.classList.remove("translate-x-full");
      readMore.current?.classList.remove("-translate-y-full");
      readMore.current?.classList.remove("opacity-0");
    }, 1000);
  };
  return (
    <div className="relative z-20 eventContainer after:content-[''] after:absolute after:bg-gray-600 after:opacity-40 after:w-full after:h-full after:top-0">
      <Link
        href={"/"}
        className="w-40 h-12 flex items-center justify-center bg-purple absolute -top-14 right-0 text-xs font-bold border-[1px] border-purple hover:bg-transparent transition duration-700 z-50"
        ref={readMore}
      >
        READ MORE
      </Link>
      <div className="relative">
        <Image
          src={data[eventNum].img}
          alt="hello"
          className="eventImg h-full object-cover max-w-full scale-110"
        />
        <div
          ref={mainImg}
          className="absolute w-full bottom-0 left-0 transition-all duration-500 h-0 bg-gray-700"
        ></div>
      </div>
      <button
        className="absolute bg-purple w-1/3 h-[220px] flex flex-col items-end justify-between space-y-2 pb-4 -translate-x-1/2 left-0 bottom-0 z-50 text-2xl eventBtnsLeft"
        onClick={() => {
          rotateImg(false);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="mt-4 mr-4" />
        <div className="relative overflow-hidden w-[80%] h-[60%] translate-x-1/2">
          <div className="relative">
            <Image
              className="object-cover transition-all duration-500"
              src={data[eventNum - 1 < 0 ? data.length - 1 : eventNum - 1].img}
              alt={`${
                data[eventNum - 1 < 0 ? data.length - 1 : eventNum - 1].title
              }`}
            />
            <div
              ref={leftBtnImg}
              className="absolute w-full bottom-0 left-0 transition-all duration-500 h-0 bg-gray-700"
            ></div>
          </div>
        </div>
      </button>
      <button
        className="absolute bg-extraPurple flex pb-4 flex-col  items-start justify-between w-1/3 space-y-2 h-[220px] translate-x-1/2 right-0 bottom-0 z-50 text-2xl eventBtnsRight"
        onClick={() => {
          rotateImg(true);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className="mt-4 ml-4" />
        <div className="relative overflow-hidden w-[80%] h-[60%] -translate-x-1/2">
          <div className="relative">
            <Image
              className="object-cover transition-all duration-500"
              src={data[eventNum + 1 > data.length - 1 ? 0 : eventNum + 1].img}
              alt={`${
                data[eventNum + 1 > data.length - 1 ? 0 : eventNum + 1].title
              }`}
            />
            <div
              ref={rightBtnImg}
              className="absolute w-full bottom-0 left-0 transition-all duration-500 h-0 bg-gray-700"
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default EventPrev;

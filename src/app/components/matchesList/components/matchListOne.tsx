"use client";
import { matchList } from "../data";
import MatchCard from "./matchCard";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function MatchListOne() {
  const matchListShort = matchList.slice(0, 3);
  const [match, setMatch] = useState(0);
  const matchEle = useRef<HTMLDivElement>(null);
  const handleClick = (left: boolean) => {
    if (left) {
      if (!(match == 0)) {
        setMatch(match - 1);
      }
    } else {
      if (!(match == matchListShort.length - 1)) {
        setMatch(match + 1);
      }
    }
  };
  const handleEffect = (left: boolean) => {
    if ((match != 2 && left == false) || (match != 0 && left == true)) {
      matchEle.current?.classList.add("opacity-0");
      matchEle.current?.parentElement?.classList.remove("bg-opacity-95");
      matchEle.current?.parentElement?.classList.add("bg-opacity-40");
      setTimeout(() => {
        matchEle.current?.parentElement?.classList.add("bg-opacity-95");
        matchEle.current?.parentElement?.classList.remove("bg-opacity-40");
        matchEle.current?.classList.remove("opacity-0");
        handleClick(left);
      }, 300);
    }
  };
  const transition = () => {
    matchEle.current?.classList.add("opacity-0");
    matchEle.current?.parentElement?.classList.remove("bg-opacity-95");
    matchEle.current?.parentElement?.classList.add("bg-opacity-40");
    setTimeout(() => {
      matchEle.current?.parentElement?.classList.add("bg-opacity-95");
      matchEle.current?.parentElement?.classList.remove("bg-opacity-40");
      matchEle.current?.classList.remove("opacity-0");
    }, 300);
  };
  return (
    <div className="flex flex-col h-full relative z-20 w-full">
      <div className="flex flex-row px-4 pl-12 items-center justify-between bg-gray-800 h-16 text-sm">
        <h1 className="relative p-2 before:content-[''] before:w-6 before:h-[2px] before:bg-purple before:absolute before:-left-1/4 before:top-1/2">
          LATEST MATCHES
        </h1>
        <Link href={"/"} className="text-purple">
          SEE ALL <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <section className="bg-purple bg-opacity-95 relative gap-6 h-full flex flex-col transition-all duration-500">
        <button
          className="flex items-center justify-center absolute left-6 top-1/2"
          onClick={() => {
            handleEffect(true);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="xl" />
        </button>
        <MatchCard matchData={matchListShort[match]} refEle={matchEle} />
        <section className="flex flex-row space-x-4 justify-center items-center">
          {matchListShort.map((ele) => (
            <button
              className={`bg-gray-800 ${
                match == ele.id ? "" : "bg-opacity-50"
              } w-3 h-3  rounded-[100%]`}
              onClick={() => {
                if (ele.id != match) {
                  setMatch(ele.id);
                  transition();
                }
              }}
            ></button>
          ))}
        </section>
        <button
          className="flex items-center justify-center absolute right-6 top-1/2"
          onClick={() => {
            handleEffect(false);
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size="xl" />
        </button>
      </section>
    </div>
  );
}

export default MatchListOne;

"use client";
import Link from "next/link";
import { useState, useRef, lazy, Suspense, useEffect } from "react";
import Image from "next/image";
import "../../globals.css";
import fenatic from "../../Images/fnatic-2018-iem-katowice_feature.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./highlight.css";
const Modol = lazy(() =>
  promise.then(() =>
    import("./components/modol").then((module) => {
      return { default: module.default };
    })
  )
);

const promise = new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

function Highlights() {
  const modol = useRef<HTMLDivElement>(null);
  const [showModal, setShowModol] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 550) {
        let scale = Math.min(
          (document.documentElement.scrollTop - 150) / window.innerHeight,
          1
        );
        document.documentElement.style.setProperty(
          "--highlightScale",
          scale.toString()
        );
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 550) {
          let scale = Math.min(
            (document.documentElement.scrollTop - 150) / window.innerHeight,
            1
          );
          document.documentElement.style.setProperty(
            "--highlightScale",
            scale.toString()
          );
        }
      });
    };
  }, []);
  return (
    <>
      <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-6 justify-center p-2 pt-64 md:pl-28 popUpEffect">
        <section className="flex flex-col justify-center space-y-6 relative md:left-72 lg:left-64 pt-72 md:-translate-x-1/2 z-40">
          <h3 className="text-gray-400">Championships 2019</h3>
          <h1 className="text-[42px] font-[600] max-w-full md:w-[20rem] w-full">
            Best Highlights of the Latest Season
          </h1>
          <Link
            href={"/"}
            className="w-40 h-12 flex items-center justify-center bg-purple hover:scale-105 -top-14 right-0 text-xs font-bold border-[1px] border-purple hover:bg-transparent transition duration-500 z-50"
          >
            VIEW NOW
          </Link>
        </section>
        <section className="">
          <div
            className="md:w-[760px] [&>div]:hover:scale-110 relative lg:w-[950px] object-cover max-w-full cursor-pointer after:content-[''] after:absolute after:lef-0 after:top-0 after:w-full after:h-full after:bg-gray-900 after:bg-opacity-60 "
            onClick={() => {
              modol.current?.classList.remove("hidden");
              modol.current?.classList.remove("opacity-0");
              modol.current?.classList.add("flex");
              setShowModol(true);
            }}
          >
            <Image
              src={fenatic}
              alt="highlights"
              className="object-cover w-full"
            />
            <div className="absolute w-16 h-16 rounded-full transition duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-purple z-40">
              <FontAwesomeIcon icon={faPlay} size="xl" />
            </div>
          </div>
        </section>
      </div>
      <Suspense
        fallback={
          <div className="fixed opacity-100 top-0 left-0 w-full h-full flex modol items-center justify-center">
            <div className="bg-white relative w-16 h-16 flex items-center justify-center">
              <div className="bg-transparent w-10 h-10 spinner"></div>
            </div>
          </div>
        }
      >
        {showModal ? <Modol modalRef={modol} /> : <></>}
      </Suspense>
    </>
  );
}

export default Highlights;

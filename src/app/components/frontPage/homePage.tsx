"use client";
import "./homePage.css";
import EventPrev from "./components/eventPrev";
import { useRef, useState } from "react";
import { data } from "./data.js";
function HomePage() {
  const [eventNum, setEventNum] = useState(0);
  const title = useRef<HTMLParagraphElement>(null);
  const titleBig = useRef<HTMLParagraphElement>(null);
  const eventSetter = (right: boolean) => {
    if (right) {
      setEventNum(eventNum + 1 > data.length - 1 ? 0 : eventNum + 1);
    } else {
      setEventNum(eventNum - 1 < 0 ? data.length - 1 : eventNum - 1);
    }
  };
  return (
    <>
      <div className="w-[500vw] overflow-hidden absolute top-0 hidden md:block z-40 h-fit -left-[390vw] opacity-[0.03] text-gray-400 pointer-events-none">
        <h1
          ref={titleBig}
          className="text-[250px] font-bold  tracking-[6px] pointer-events-none bigTitle"
        >
          {data[eventNum].title}
        </h1>
      </div>
      <section className="flex flex-row relative mx-auto h-fit mt-36 justify-center">
        <div className="w-[425px] overflow-hidden absolute hidden md:block z-40 -top-24 left-1/3 pointer-events-none">
          <h1
            ref={title}
            className="text-[64px] font-bold leading-[64px] tracking-[2px]  title"
          >
            {data[eventNum].title}
          </h1>
        </div>
        <div className="relative origin-right datePostionRight h-6 w-36 -left-4 flex flex-row align-center justify-center space-x-2 text-lg font-bold">
          <h1 className="text-purple">0{eventNum + 1}</h1>
          <div className="bg-gray-450 w-[72px] h-1 translate-y-3"></div>
          <h1 className="text-gray-450">0{data.length}</h1>
        </div>
        <EventPrev
          eventNum={eventNum}
          setEventNum={eventSetter}
          titleElement={title}
          bigtitleElement={titleBig}
        />
        <div className="relative z-10">
          <div className="origin-right relative datePostionLeft w-36 h-6 min-w-32 -left-full text-sm">
            <h1 className="text-gray-400 ">{data[eventNum].date}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

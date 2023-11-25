"use client";
import "./homePage.css";
import EventPrev from "./components/eventPrev";
import { useState } from "react";
import { data } from "./data.js";
function HomePage() {
  const [eventNum, setEventNum] = useState(0);
  const eventSetter = (right: boolean) => {
    if (right) {
      setEventNum(eventNum + 1 > data.length - 1 ? 0 : eventNum + 1);
    } else {
      setEventNum(eventNum - 1 < 0 ? data.length - 1 : eventNum - 1);
    }
  };
  return (
    <section className="flex flex-row relative mx-auto h-fit mt-36 justify-center">
      <h1 className="text-[64px] font-bold w-80 absolute hidden md:block z-40 -top-24 left-1/3 leading-[64px] tracking-[2px] pointer-events-none">
        {data[eventNum].title}
      </h1>
      <div className="relative origin-right datePostionRight h-6 w-32 -left-4 flex flex-row align-center justify-center space-x-2 text-lg font-bold">
        <h1 className="text-purple">0{eventNum + 1}</h1>
        <div className="bg-gray-450 w-[72px] h-1 translate-y-3"></div>
        <h1 className="text-gray-450">0{data.length}</h1>
      </div>
      <EventPrev eventNum={eventNum} setEventNum={eventSetter} />
      <div className="relative z-20">
        <div className="origin-right relative datePostionLeft w-32 h-6 min-w-32 -left-full text-sm">
          <h1 className="text-gray-400 ">{data[eventNum].date}</h1>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

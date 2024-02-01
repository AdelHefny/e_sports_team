"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import fighter from "../../Images/bgr.png";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function About() {
  return (
    <section className="w-full sm:h-[1150px] lg:h-[600px] lg:h=[700px] relative overflow-hidden">
      <div className="relative flex flex-col space-y-28 lg:space-y-0 lg:flex-row items-center lg:pl-60 pt-52 z-30 h-full">
        <section className="w-[90%] lg:w-1/2 flex flex-col justify-between min-h-[400px] h-1/2 bottom-0">
          <h3
            className="opacity-80 text-2xl sm:text-3xl font-[600]"
            style={{ color: "#bba5fd" }}
          >
            Go Hard or Go Home.
          </h3>
          <div className="h-48 flex flex-col justify-between">
            <h1 className="text-4xl sm:text-5xl font-[600] leading-[1.384615384615385em]">
              Find out about our history in the about us page.
            </h1>
          </div>
          <button className="relative flex space-x-2 justify-center items-center bg-phosphoras border-2 border-phosphoras hover:bg-transparent transition-all duration-500 hover:-translate-y-3 w-60 h-[70px]">
            <FontAwesomeIcon icon={faBomb} />
            <h3>FIND OUT MORE</h3>
          </button>
        </section>
        <div className="relative z-30 w-[600px] bottom-8">
          <Image src={fighter} alt="fighter background image" />
        </div>
      </div>
      <div className="bg w-full h-full absolute top-0 left-0 z-20 opacity-95"></div>
      <div className="absolute h-[150%] w-[150%] z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ReactPlayer
          width="100%"
          height="100%"
          url={
            "https://www.youtube.com/embed/ohqzWIul0OQ?controls=0&rel=0&playsinline=1&widget_referrer=https%3A%2F%2Fskywarriorthemes.com%2Frespawn%2F&enablejsapi=1&origin=https%3A%2F%2Fskywarriorthemes.com&widgetid=1"
          }
          controls={false}
          playing={true}
          loop={true}
          muted
        />
      </div>
    </section>
  );
}

export default About;

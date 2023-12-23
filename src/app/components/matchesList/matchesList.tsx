import { StaticImageData } from "next/image";
import MatchListOne from "./components/matchListOne";
import "./matchesList.css";
import { useEffect } from "react";
import MatchListTwo from "./components/matchListTwo";
export type MatchDataType = {
  id: number;
  title: string;
  date: string;
  firstTeamName: string;
  firstTeamIcon: StaticImageData;
  firstTeamScore: number;
  secundTeamName: string;
  secundTeamIcon: StaticImageData;
  secondTeamScore: number;
};

function Matches() {
  return (
    <div className="flex items-center justify-center mt-64 relative z-40">
      <div className="listGrid relative -bottom-24">
        <div className=" relative">
          <MatchListOne />
          <div className="matchListBg1 grayscale-[1] absolute w-full h-full top-0 left-0 z-10"></div>
        </div>
        <div className="relative hidden lg:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:hover:bg-opacity-20 before:transition-all before:duration-300 before:z-30 before:hover:bg-purple">
          <section className="grayscale-[1] matchListBg2 w-full h-full"></section>
        </div>
        <section className="relative z-20 hidden lg:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:hover:bg-opacity-20 before:transition-all before:duration-300 before:z-30 before:hover:bg-purple">
          <div className="matchListBg3 grayscale-[1] h-full w-full"></div>
        </section>
        <div className="matchListBg4 bg-purple">
          <MatchListTwo />
        </div>
      </div>
    </div>
  );
}

export default Matches;

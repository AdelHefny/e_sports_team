import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import csgo from "../../../Images/icons8-counter-strike-50.png";
import { MatchDataType } from "../matchesList";
import { RefObject } from "react";

function MatchCard({
  matchData,
  refEle,
}: {
  matchData: MatchDataType;
  refEle: RefObject<HTMLDivElement>;
}) {
  return (
    <section
      className="flex flex-col items-center pt-8 justify-between h-[70%] py-6 transition-all duration-500 ease-in"
      ref={refEle}
    >
      <div className="flex flex-col items-center">
        <Image alt="csgo icon" src={csgo} width={50} height={50} />
        <h1>{matchData.title}</h1>
        <h2 className="text-gray-300">{matchData.date}</h2>
      </div>
      <div className="flex flex-row items-center justify-between text-2xl space-x-6">
        <div className="flex flex-row items-center justify-between space-x-2">
          <Image
            alt={`${matchData.firstTeamName} icon`}
            src={matchData.firstTeamIcon}
            width={50}
            height={50}
          />
          <h1>{matchData.firstTeamScore}</h1>
        </div>
        <h1 className="text-lg">VS</h1>
        <div className="flex flex-row items-center justify-between space-x-2">
          <h1>{matchData.secondTeamScore}</h1>
          <Image
            alt={`${matchData.secundTeamName} icon`}
            src={matchData.secundTeamIcon}
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
}

export default MatchCard;

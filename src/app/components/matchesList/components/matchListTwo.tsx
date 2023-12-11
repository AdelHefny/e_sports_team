import Image from "next/image";
import { matchList } from "../data";
import leagueImg from "../../../Images/leagueOfLegends.jpg";
import csgoImg from "../../../Images/csgo.jpg";
import Link from "next/link";

function MatchListTwo() {
  const matchListShort = matchList.slice(0, 4);
  return (
    <section className="bg-gray-900 w-full h-full">
      {matchListShort.map((ele) => (
        <Link
          key={ele.id}
          href={"/"}
          className="w-full flex flex-row items-center h-1/4 justify-between relative z-10 matchCard cursor-pointer overflow-hidden"
        >
          <div className="w-1/2 justify-center items-center space-x-6 flex flex-row h-full z-20 font-bold text-lg">
            <Image
              src={
                ele.game == "leagueOfLegends" || ele.game == "dota2"
                  ? leagueImg
                  : csgoImg
              }
              alt={`${ele.game} image`}
              className="w-[70%] h-[100%] absolute z-[-1] grayscale-[1] transition-all duration-500 opacity-20"
            />
            <div className="flex flex-row space-x-4 items-center">
              <Image
                src={ele.firstTeamIcon}
                alt={`${ele.firstTeamName} icon`}
                width={60}
                height={55}
              />
              <h1>{ele.firstTeamScore}</h1>
            </div>
            <h1 className="text-gray-300 text-sm">VS</h1>
            <div className="flex flex-row space-x-4 items-center">
              <h1>{ele.secondTeamScore}</h1>
              <Image
                src={ele.secundTeamIcon}
                alt={`${ele.secundTeamName} icon`}
                width={60}
                height={55}
              />
            </div>
          </div>
          <div className="w-1/2 relative z-30 matchTitle pl-8 flex justify-start text-sm hover:[&>*]:text-purple items-start hover:[& > div]:text-gray-300">
            <div className="flex flex-col justify-start items-start  space-y-3">
              <h1 className="text-purple">{ele.date}</h1>
              <h3 className="font-bold">{ele.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default MatchListTwo;

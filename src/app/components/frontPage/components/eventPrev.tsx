import Image from "next/image";
import "../homePage.css";
import fnatics from "../../../Images/Fnatic-at-dream-league-9-700x700.jpg";
import Link from "next/link";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
function EventPrev({
  eventNum,
  setEventNum,
}: {
  eventNum: number;
  setEventNum: (right: boolean) => void;
}) {
  return (
    <div className="relative z-30 eventContainer after:content-[''] after:absolute after:bg-gray-600 after:opacity-40 after:w-full after:h-full after:top-0">
      <Link
        href={"/"}
        className="w-40 h-12 flex items-center justify-center bg-purple absolute -top-14 right-0 text-xs font-bold border-[1px] border-purple hover:bg-transparent transition duration-500"
      >
        READ MORE
      </Link>
      <div className="">
        <Image
          src={data[eventNum].img}
          alt="hello"
          className="eventImg h-full object-cover max-w-full"
        />
      </div>
      <button
        className="absolute bg-purple w-1/3 h-[220px] flex flex-col items-end justify-between space-y-2 pb-4 -translate-x-1/2 left-0 bottom-0 z-50 text-2xl eventBtnsLeft"
        onClick={() => {
          setEventNum(false);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="mt-4 mr-4" />
        <div className="overflow-hidden w-[80%] h-[60%] translate-x-1/2">
          <Image
            className="object-cover transition-all duration-500"
            src={data[eventNum - 1 < 0 ? data.length - 1 : eventNum - 1].img}
            alt={`${
              data[eventNum - 1 < 0 ? data.length - 1 : eventNum - 1].title
            }`}
          />
        </div>
      </button>
      <button
        className="absolute bg-extraPurple flex pb-4 flex-col  items-start justify-between w-1/3 h-[220px] translate-x-1/2 right-0 bottom-0 z-50 text-2xl eventBtnsRight"
        onClick={() => {
          setEventNum(true);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className="mt-4 ml-4" />
        <div className="w-[80%] h-[60%] overflow-hidden -translate-x-1/2">
          <Image
            className="object-cover transition-all duration-500"
            src={data[eventNum + 1 > data.length - 1 ? 0 : eventNum + 1].img}
            alt={`${
              data[eventNum + 1 > data.length - 1 ? 0 : eventNum + 1].title
            }`}
          />
        </div>
      </button>
    </div>
  );
}

export default EventPrev;

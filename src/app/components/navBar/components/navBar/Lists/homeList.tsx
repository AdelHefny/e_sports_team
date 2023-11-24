import {
  faCalendarDays,
  faCartShopping,
  faCirclePlay,
  faNewspaper,
  faPerson,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "../navBar.css";

function HomeList({ inMobile }: { inMobile: boolean }) {
  return (
    <ul
      className={`bg-gray-800 -left-full -bottom-[490%] ${
        inMobile ? `w-full` : "w-64 homeList absolute"
      } flex flex-col space-y-8 p-8 overflow-hidden transition-all duration-500 z-50`}
    >
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faStar} className="text-purple" />
          <h1>HOMEPAGE ESPORTS</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faNewspaper} className="text-purple" />
          <h1>HOMEPAGE MAGAZINE</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="text-purple" />
          <h1>HOMEPAGE EVENT</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faUser} className="text-purple" />
          <h1>HOMEPAGE PLAYER</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-purple" />
          <h1>HOMEPAGE SHOP</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faCirclePlay} className="text-purple" />
          <h1>HOMEPAGE STREAMER</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <FontAwesomeIcon icon={faPerson} className="text-purple" />
          <h1>HOMEPAGE MATCHES</h1>
        </Link>
      </li>
    </ul>
  );
}

export default HomeList;

import Link from "next/link";
import "../../../navBar.css";

function TeamMatchesList({ inMobile }: { inMobile: boolean }) {
  return (
    <ul
      className={`bg-gray-800  ${
        inMobile ? `w-full` : "w-64 teamList absolute -bottom-[280%]"
      } -left-1/4 h-fit flex flex-col space-y-8 p-8 font-bild`}
    >
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <h1>MATCH PAGE</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex w-full flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <h1>TEAM PAGE</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <h1>PLAYER PAGE WHITE</h1>
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className="hover:text-purple flex flex-row items-center space-x-2 text-sm transition-all duration-500"
        >
          <h1>PLAYER PAGE DARK</h1>
        </Link>
      </li>
    </ul>
  );
}

export default TeamMatchesList;

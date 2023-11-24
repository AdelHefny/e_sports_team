import Link from "next/link";
import "../navBar.css";
function BlogList({ inMobile }: { inMobile: boolean }) {
  return (
    <ul
      className={`bg-gray-800 -bottom-[295px] -left-full ${
        inMobile ? "w-full" : "w-60 absolute blogList"
      }  h-fit flex flex-col p-8 space-y-6 text-sm font-bold overflow-hidden transition-all duration-500 z-50`}
    >
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>LOG RIGHT SIDEBAR</Link>
      </li>
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>BLOG LEFT SIDEBAR</Link>
      </li>
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>BLOG FULLWIDTH</Link>
      </li>
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>POST RIGHT SIDEBAR</Link>
      </li>
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>POST LEFT SIDEBAR</Link>
      </li>
      <li className="hover:text-purple transition-all duration-500">
        <Link href={""}>POST FULLWIDTH</Link>
      </li>
    </ul>
  );
}

export default BlogList;

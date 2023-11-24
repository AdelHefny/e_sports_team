import Link from "next/link";
import { shopItems } from "../../../../../shopItems";
import Image from "next/image";
function ShopList({ inMobile }: { inMobile: boolean }) {
  const ourItems = [shopItems[0], shopItems[5], shopItems[7], shopItems[6]];
  return (
    <ul
      className={`bg-gray-800  -left-12 ${
        inMobile
          ? `grid grid-cols-2 grid-rows-2 gap-4 text-xs p-4`
          : "shopList flex absolute -bottom-[380%] translate-y-full flex-row space-x-6 p-8"
      } w-full h-max items-center `}
    >
      {ourItems.map((ele) => (
        <li key={ele.id}>
          <Link
            href={"/"}
            className={` ${
              inMobile ? "text-purple" : "hover:text-purple"
            } flex flex-col space-y-2 h-max`}
          >
            <Image
              src={ele.img}
              alt={`${ele.productName} image`}
              width={255}
              height={245}
              className={`max-w-full imgs transition-all duration-500 ${
                inMobile ? "hover:grayscale" : ""
              }`}
            />
            <h1>{ele.productName}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ShopList;

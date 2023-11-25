"use client";
import { cartContext } from "@/app/cartContext";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "../../navBar.css";
function ShoppingBtn() {
  const [cartProducts] = useContext(cartContext);
  return (
    <div className="relative md:flex hidden">
      <button className="bg-purple hover:bg-transparent border-2 btn border-purple border-solid py-2 px-4 flex flex-col items-center transition duration-500">
        <FontAwesomeIcon icon={faBagShopping} />
        <h1>{cartProducts.length}</h1>
      </button>
      <div className="bg-gray-700 flex-col items-start px-6 cart justify-center absolute bottom-0 right-0 w-96 h-[66px] translate-y-full shadow-md shadow-gray-700 ">
        {cartProducts.length == 0 && (
          <h1 className="text-purple">No products in the cart.</h1>
        )}
        {cartProducts.map((ele) => (
          <h1>{ele.productName}</h1>
        ))}
      </div>
    </div>
  );
}

export default ShoppingBtn;

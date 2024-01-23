"use client";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import "../gallary.css";
import Modal from "./modol";
import { useState, useRef } from "react";

function PhotoCard({
  cardData,
}: {
  cardData: {
    id: number;
    img: StaticImageData;
    imgSm: StaticImageData;
    category: string;
  };
}) {
  const [showModal, setShowModal] = useState(false);
  const modal = useRef<HTMLDivElement>(null);
  const modolShow = (value: boolean) => {
    modal.current?.classList.add("opacity-0");
    setTimeout(() => {
      setShowModal(value);
      modal.current?.classList.remove("opacity-0");
    }, 400);
  };
  return (
    <>
      <li
        className="relative w-full transition-all photoCard duration-300 lg:h-[150px] grayscale-[1] hover:grayscale-0 before:bg-extraPurple hover:before:bg-opacity-25 before:bg-opacity-0 before:transition-all before:duration-300 hover:before:absolute before:top-0 before:left-0 before:content-[''] before:w-full before:h-full cursor-pointer"
        key={cardData.id}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <Image
          src={cardData.imgSm}
          alt="gallary photo"
          className="h-full object-cover w-full"
        />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 items-center justify-center bg-black bg-opacity-40">
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-center w-1/2 h-1/2 rounded-full bg-black bg-opacity-50">
            <FontAwesomeIcon icon={faLink} />
          </div>
        </div>
      </li>
      {showModal && (
        <Modal modalSetter={modolShow} cardData={cardData} modalRef={modal} />
      )}
    </>
  );
}

export default PhotoCard;

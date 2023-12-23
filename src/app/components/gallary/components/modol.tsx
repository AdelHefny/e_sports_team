import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { RefObject } from "react";

function Modal({
  modalSetter,
  cardData,
  modalRef,
}: {
  modalSetter: any;
  cardData: {
    id: number;
    img: StaticImageData;
    imgSm: StaticImageData;
    category: string;
  };
  modalRef: RefObject<HTMLDivElement>;
}) {
  return (
    <section
      className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-70 flex items-center justify-center z-40 cursor-grab transition-all duration-500"
      onClick={() => {
        modalSetter(false);
      }}
      ref={modalRef}
    >
      <Image src={cardData.imgSm} alt={`${cardData.category} image`} />
      <section className="fixed top-0 right-0">
        <button className="p-4">
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
      </section>
    </section>
  );
}

export default Modal;

"use client";
import "../../../globals.css";
import { RefObject } from "react";
function Modol({ modalRef }: { modalRef: RefObject<HTMLDivElement> }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full modol flex items-center justify-center"
      onClick={() => {
        modalRef.current?.classList.add("opacity-0");
        modalRef.current?.classList.add("hidden");
      }}
      ref={modalRef}
    >
      <iframe
        src="https://www.youtube.com/embed/fB8TyLTD7EE?si=f_-VLguNyNL4njb0"
        title="YouTube video player"
        className="w-[90%] h-[51%] sm:w-[560px] sm:h-[315px]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modol;

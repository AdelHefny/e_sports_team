"use client";
import "../../../globals.css";
import { RefObject, Suspense } from "react";
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
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fB8TyLTD7EE?si=iVALPc1qMrhRc5bJ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modol;

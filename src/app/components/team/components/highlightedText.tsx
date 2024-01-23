"use client";
import "../team.css";
import { useRef, useEffect } from "react";
function HighlightedText() {
  const textContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (textContainer.current) {
      textContainer.current.addEventListener("mousemove", (e) => {
        if (textContainer.current) {
          if (textContainer.current.parentElement) {
            textContainer.current.style.transform = `scale(1.1) rotateY(${
              -(e.pageX - window.innerWidth / 2) / 60
            }deg)
            rotateX(${
              -e.pageY +
              (textContainer.current.parentElement.offsetTop +
                textContainer.current.parentElement.offsetHeight / 2) +
              30
            }deg)`;
          }
        }
      });
      textContainer.current.addEventListener("mouseleave", () => {
        if (textContainer.current) {
          if (textContainer.current.parentElement) {
            textContainer.current.style.transform = `scale(1) rotateY(0deg)
            rotateX(0deg)`;
          }
        }
      });
    }

    return () => {
      textContainer.current?.removeEventListener("mousemove", (e) => {
        if (textContainer.current) {
          if (textContainer.current.parentElement) {
            textContainer.current.style.transform = `scale(1.1) rotateY(${
              -(e.pageX - window.innerWidth / 2) / 40
            }deg)
            rotateX(${
              -e.pageY +
              (textContainer.current.parentElement.offsetTop +
                textContainer.current.parentElement.offsetHeight / 2) +
              30
            }deg)`;
          }
        }
      });
      textContainer.current?.removeEventListener("mouseleave", () => {
        if (textContainer.current) {
          if (textContainer.current.parentElement) {
            textContainer.current.style.transform = `scale(1) rotateY(0deg)
            rotateX(0deg)`;
          }
        }
      });
    };
  }, []);
  return (
    <h1
      className="movingText w-fit md:text-6xl text-3xl relative z-30 font-[500]"
      ref={textContainer}
    >
      Meet the amazing <span className="text-purple">members</span>
      <br /> in our pro league team
    </h1>
  );
}

export default HighlightedText;

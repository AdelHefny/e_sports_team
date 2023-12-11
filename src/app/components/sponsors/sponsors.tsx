"use client";
import Image from "next/image";
import { data } from "./data.js";
import "./sponsors.css";
import { useRef, useEffect, useState } from "react";
function Sponsors() {
  const [heighted, setHeighted] = useState(2);
  let isDragging = false,
    prevScroll = 0,
    prevScrollLeft = 0,
    positionDiff = 0;

  const carousel = useRef<HTMLDivElement>(null);
  const carouselParent = useRef<HTMLDivElement>(null);

  const handleDragging = (e: MouseEvent | TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
      positionDiff = pageX - prevScroll;
      if (carousel.current) {
        carousel.current.scrollLeft = prevScrollLeft - positionDiff;
      }
    }
  };

  const startDragging = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    isDragging = true;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    prevScroll = pageX;
    prevScrollLeft = carousel.current?.scrollLeft || 0;
    if (carousel.current) {
      carousel.current.classList.add("dragging");
    }
  };

  const stopDragging = () => {
    let imgWidth = carousel.current?.children[0]?.clientWidth || 0;
    if (carousel.current) {
      carousel.current.classList.remove("dragging");
      let imgsInScreen = 0;
      if (window.innerWidth > 900) {
        imgsInScreen = 5;
      } else if (window.innerWidth > 550) {
        imgsInScreen = 4;
      } else if (window.innerWidth > 410) {
        imgsInScreen = 3;
      } else {
        imgsInScreen = 2;
      }
      if (
        carousel.current.scrollLeft != 0 &&
        !(
          carousel.current.scrollLeft >=
          imgWidth * (data.length - imgsInScreen) - 50
        )
      ) {
        if (Math.abs(imgWidth - positionDiff) >= 0) {
          if (carousel.current.scrollLeft > prevScrollLeft) {
            if (!(heighted >= data.length)) {
              setHeighted((prev) => prev + 1);
            }
          } else {
            if (!(heighted == 0)) {
              setHeighted((prev) => prev - 1);
            }
          }
        }
      }
    }

    isDragging = false;
  };

  useEffect(() => {
    const currentCarousel = carousel.current;
    const currentCarouselParent = carouselParent.current;
    const handleCarouselScroll = () => {
      let imgWidth = carousel.current?.children[0]?.clientWidth || 0;
      let imgsInScreen = 0;
      if (window.innerWidth > 900) {
        imgsInScreen = 5;
      } else if (window.innerWidth > 550) {
        imgsInScreen = 4;
      } else if (window.innerWidth > 410) {
        imgsInScreen = 3;
      } else {
        imgsInScreen = 2;
      }
      if (carousel.current) {
        if (
          !(
            carousel.current.scrollLeft >=
            imgWidth * (data.length - imgsInScreen) - 50
          )
        ) {
          setHeighted((prev) => prev + 1);
          carousel.current.scrollLeft += imgWidth;
        } else {
          setHeighted(() => Math.ceil(imgsInScreen / 2) - 1);
          carousel.current.scrollLeft = 0;
        }
      }
    };
    const intervalId = setInterval(handleCarouselScroll, 3000);

    if (currentCarousel && currentCarouselParent) {
      currentCarousel.addEventListener("mousemove", handleDragging);
      currentCarousel.addEventListener("touchmove", handleDragging);

      currentCarouselParent.addEventListener("mousedown", startDragging);
      currentCarouselParent.addEventListener("touchstart", startDragging);

      currentCarouselParent.addEventListener("mouseup", stopDragging);
      currentCarouselParent.addEventListener("touchend", stopDragging);
      currentCarouselParent.addEventListener("mouseleave", stopDragging);
    }
    return () => {
      clearInterval(intervalId);
      if (currentCarousel && currentCarouselParent) {
        currentCarousel.removeEventListener("mousemove", handleDragging);
        currentCarousel.removeEventListener("touchmove", handleDragging);

        currentCarouselParent.removeEventListener("mousedown", startDragging);
        currentCarouselParent.removeEventListener("touchstart", startDragging);

        currentCarouselParent.removeEventListener("mouseup", stopDragging);
        currentCarouselParent.removeEventListener("touchend", stopDragging);
        currentCarouselParent.removeEventListener("mouseleave", stopDragging);
      }
    };
  }, []);
  return (
    <section
      className="relative z-40 -translate-y-[10%] max-w-[80%] bg-gray-699 mx-auto h-24 overflow-hidden"
      ref={carouselParent}
    >
      <div
        className="flex flex-row items-center overflow-hidden h-full carousel"
        ref={carousel}
        draggable={false}
      >
        {data.map((ele) => (
          <div
            className={`${heighted == ele.id ? "opacity-100" : "opacity-50"}`}
            key={ele.id}
          >
            <Image src={ele.img} alt="sponsor Img" className="select-none" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;

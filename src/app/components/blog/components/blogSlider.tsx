"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../blog.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useMemo, useEffect } from "react";
import data from "./data.js";
import BlogPost from "./blogPost";
const newData = [
  data[data.length - 2],
  data[data.length - 1],
  ...data,
  data[0],
  data[1],
];
function BlogSlider() {
  const slider = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(2);
  const [inMovement, setInMovement] = useState(false);
  const postsLength = useMemo(() => data.length, []);
  useEffect(() => {
    const postSize =
      slider.current.getElementsByTagName("section")[3].getBoundingClientRect()
        .width + 32;
    if (slider.current) {
      slider.current.style.transform = `translateX(-${slide * postSize}px)`;
    }
  }, [slide]);
  const handleClick = (left: boolean) => {
    const postSize =
      slider.current.getElementsByTagName("section")[3].getBoundingClientRect()
        .width + 32;
    if (!inMovement) {
      if (left) {
        setInMovement(true);
        if (slide == 1) {
          slider.current.classList.add("slider-transition");
          setSlide((prev) => prev - 1);
          setTimeout(() => {
            slider.current.classList.remove("slider-transition");
            setSlide(newData.length - 4);
          }, 500);
          setTimeout(() => {
            setInMovement(false);
          }, 520);
        } else {
          slider.current.classList.add("slider-transition");
          setSlide((prev) => prev - 1);
          setTimeout(() => {
            slider.current.classList.remove("slider-transition");
          }, 500);
          setTimeout(() => {
            setInMovement(false);
          }, 520);
        }
      } else {
        setInMovement(true);
        if (slide == newData.length - 4) {
          slider.current.classList.add("slider-transition");
          setSlide((prev) => prev + 1);
          setTimeout(() => {
            slider.current.classList.remove("slider-transition");
            setSlide(1);
          }, 500);
          setTimeout(() => {
            setInMovement(false);
          }, 520);
        } else {
          slider.current.classList.add("slider-transition");
          setSlide((prev) => prev + 1);
          setTimeout(() => {
            slider.current.classList.remove("slider-transition");
          }, 500);
          setTimeout(() => {
            setInMovement(false);
          }, 520);
        }
      }
    }
  };
  return (
    <div>
      <section className="flex flex-col items-start justify-center w-full md:translate-x-[20%] space-y-4 pb-36 blog overflow-hidden ">
        <div className="flex flex-row space-x-4 items-center w-max">
          <div className="flex flex-row space-x-2 blogButtons transition-opacity duration-500">
            <button
              onClick={() => {
                handleClick(true);
              }}
              className="transition-opacity duration-500 blogBtn"
            >
              <span className="hidden">back</span>
              <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
            </button>
            <button
              onClick={() => {
                handleClick(false);
              }}
              className="transition-opacity duration-500 blogBtn"
            >
              <span className="hidden">forward</span>
              <FontAwesomeIcon icon={faChevronRight} size="2xl" />
            </button>
          </div>
          <h1 className="relative pb-2 tracking-wide font-bold text-4xl after:content-[''] after:absolute after:w-12 after:bg-purple after:h-[2px] after:bottom-0 after:left-0">
            From the <span className="text-extraPurple">Blog</span>
          </h1>
        </div>
        <section
          className="flex flex-row itmes-center space-x-8 blogPostss"
          ref={slider}
        >
          {newData.map((ele, index) => (
            <BlogPost postData={ele} key={index} slide={slide} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default BlogSlider;

import Image, { StaticImageData } from "next/image";
import teamMembers from "./data";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSteam,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
type teamMember = {
  id: number;
  hisName: string;
  img: StaticImageData;
  faceBook: string;
  twitter: string;
  steam: string;
}[];
const newTeam = [
  teamMembers[teamMembers.length - 3],
  teamMembers[teamMembers.length - 2],
  teamMembers[teamMembers.length - 1],
  ...teamMembers,
  teamMembers[0],
  teamMembers[1],
  teamMembers[2],
];
function Slider() {
  const [sliderTrans, setSliderTrans] = useState(true);
  const [slide, setSlide] = useState(2);
  const slider = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleTransitionStart = () => {
      player.current.style.transition = "0s";
      slider.current.style.transition = "0s";
      setSliderTrans(false);
    };
    const handleTransitionEnd = () => {
      setSliderTrans(true);
      if (slider.current && player.current) {
        if (slide >= newTeam.length - 3) {
          let ele = slider.current.getElementsByClassName(
            "slide-item"
          )[4] as HTMLDivElement;
          ele.style.transition = "0s";
          setSlide(3);
          slider.current.style.transform = `translateX(${
            -player.current.clientWidth * 3
          }px)`;
        }
        if (slide <= 0) {
          let ele = slider.current.getElementsByClassName("slide-item")[
            newTeam.length - 5
          ] as HTMLDivElement;
          ele.style.transition = "0s";
          setSlide(newTeam.length - 6);
          slider.current.style.transform = `translateX(${
            -player.current.clientWidth * (newTeam.length - 6)
          }px)`;
        }
      }
    };
    slider.current?.addEventListener("transitionstart", handleTransitionStart);
    slider.current?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      slider.current?.addEventListener(
        "transitionstart",
        handleTransitionStart
      );
      slider.current?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [slide]);

  const handleClick = (left: boolean) => {
    if (slider.current && sliderTrans) {
      let mod = 0;
      if (window.innerWidth <= 768) {
        mod = 1;
      }
      if (left) {
        if (slide > 0) {
          setSlide((prevSlide) => prevSlide - 1);
          slider.current.style.transition = "0.5s";
          let fromEle = slider.current.getElementsByClassName("slide-item")[
            slide + 1
          ] as HTMLDivElement;
          fromEle.style.transition = "0.5s";
          let toEle = slider.current.getElementsByClassName("slide-item")[
            slide
          ] as HTMLDivElement;
          toEle.style.transition = "0.5s";
          slider.current.style.transform = `translateX(${
            -slider.current.getElementsByTagName("div")[0].clientWidth *
            (slide - 1 + mod)
          }px)`;
        }
      } else {
        if (slide < 13) {
          setSlide((prevSlide) => prevSlide + 1);
          slider.current.style.transition = "0.5s";
          let fromEle = slider.current.getElementsByClassName("slide-item")[
            slide + 1
          ] as HTMLDivElement;
          fromEle.style.transition = "0.5s";
          let ele = slider.current.getElementsByClassName("slide-item")[
            slide + 2
          ] as HTMLDivElement;
          ele.style.transition = "0.5s";
          slider.current.style.transform = `translateX(${
            -slider.current.getElementsByTagName("div")[0].clientWidth *
            (slide + 1 + mod)
          }px)`;
        }
      }
    }
  };

  useEffect(() => {
    let mod = 0;
    if (window.innerWidth <= 768) {
      mod = 1;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${
        -slider.current.getElementsByTagName("div")[0].clientWidth *
        (slide + mod)
      }px)`;
    }
  }, []);
  return (
    <div className="h-fit relative players">
      <button
        className="absolute bottom-0 left-0 w-16 h-[575px] z-30"
        onClick={() => {
          handleClick(true);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
      </button>
      <section
        className="mt-8 flex flex-row items-center justify-start slide"
        ref={slider}
      >
        {newTeam.map((ele, index) => (
          <div
            className={`slide-item relative overflow-auto before:content-[''] before:z-20 before:absolute before:bg-opacity-70 before:top-0 before:w-full before:h-full ${
              index == slide + 1
                ? "active before:bg-extraPurple"
                : "before:bg-gray-700"
            }`}
            ref={index == slide + 1 ? player : null}
            key={index}
          >
            <Image
              src={ele.img}
              alt={`${ele.hisName} image`}
              className="w-full h-full bg-cover"
            />
            <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center font-[500] text-white z-30 space-y-6">
              <div className="flex flex-col items-center justify-center border-b-[1px] border-purple pb-6">
                <h1 className="text-2xl">{ele.hisName.toUpperCase()}</h1>
                <h1 className="font-[400] text-md">{ele.hisName}</h1>
              </div>
              <div className="flex flex-row space-x-6 text-purple">
                <Link href={ele.faceBook} target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-extraPurple transition duration-1000"
                  />
                </Link>
                <Link href={ele.twitter} target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-extraPurple transition duration-1000"
                  />
                </Link>
                <Link href={ele.steam} target="_blank">
                  <FontAwesomeIcon
                    icon={faSteam}
                    className="hover:text-extraPurple transition duration-1000"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <button
        className="absolute bottom-0 right-0 w-16 h-[575px] bg-transparent bg-opacity-60"
        onClick={() => {
          handleClick(false);
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2xl" />
      </button>
    </div>
  );
}

export default Slider;

"use client";
import PhotoCard from "./components/photoCard";
import { imgs } from "./data";
import "./gallary.css";
import { useState, useRef, MouseEventHandler } from "react";
function Gallary() {
  const ourGrid = useRef<HTMLUListElement>(null);
  const btns = useRef<HTMLDivElement>(null);
  const [filteredImgs, setFilteredImgs] = useState(imgs);
  const removeActive = () => {
    btns.current?.children[0].classList.remove("active");
    btns.current?.children[1].classList.remove("active");
    btns.current?.children[2].classList.remove("active");
    btns.current?.children[3].classList.remove("active");
  };
  return (
    <div className="flex flex-col">
      <section
        className="flex flex-row justify-end items-center space-x-8 p-8 w-full text-sm"
        ref={btns}
      >
        <button
          className="btn border-none w-fit h-6 text-white bg-transparent outline-none active relative"
          onClick={({ target }: { target: any }) => {
            setFilteredImgs(imgs);
            removeActive();
            target.classList.add("active");
            if (ourGrid.current) {
              for (let i = 0; i < ourGrid.current.children.length; i++) {
                ourGrid.current?.children[i].classList.remove("hidden");
                setTimeout(() => {
                  ourGrid.current?.children[i].classList.remove("disabledd");
                }, 100);
              }
            }
          }}
        >
          ALL
        </button>
        <button
          className="btn border-none w-fit h-6 text-white bg-transparent outline-none relative"
          onClick={({ target }: { target: any }) => {
            removeActive();
            target.classList.add("active");
            let ids: number[] = [];
            imgs.map((ele) => {
              if (ele.category != "team") ids.push(ele.id);
            });
            if (ourGrid.current) {
              let removes = [];
              let adds: number[] = [];
              for (let j = 0; j < ourGrid.current.children.length; j++) {
                let condition = false;
                for (let i = 0; i < ids.length; i++) {
                  if (
                    ourGrid.current.children[j].getAttribute("id") ==
                    ids[i].toString()
                  ) {
                    condition = true;
                    break;
                  }
                }
                if (condition) {
                  removes.push(j);
                } else {
                  adds.push(j);
                }
              }
              removes.forEach((ele) => {
                ourGrid.current?.children[ele].classList.add("disabledd");
                setTimeout(() => {
                  ourGrid.current?.children[ele].classList.add("hidden");
                }, 400);
              });
              setTimeout(() => {
                adds.forEach((ele) => {
                  ourGrid.current?.children[ele].classList.remove("hidden");
                  setTimeout(() => {
                    ourGrid.current?.children[ele].classList.remove(
                      "disabledd"
                    );
                  }, 100);
                });
              }, 400);
            }
          }}
        >
          TEAM
        </button>
        <button
          className="btn border-none w-fit h-6 text-white bg-transparent outline-none relative"
          onClick={({ target }: { target: any }) => {
            removeActive();
            target.classList.add("active");
            let ids: number[] = [];
            imgs.map((ele) => {
              if (ele.category != "players") ids.push(ele.id);
            });
            if (ourGrid.current) {
              let removes = [];
              let adds: number[] = [];
              for (let j = 0; j < ourGrid.current.children.length; j++) {
                let condition = false;
                for (let i = 0; i < ids.length; i++) {
                  if (
                    ourGrid.current.children[j].getAttribute("id") ==
                    ids[i].toString()
                  ) {
                    condition = true;
                    break;
                  }
                }
                if (condition) {
                  removes.push(j);
                } else {
                  adds.push(j);
                }
              }
              removes.forEach((ele) => {
                ourGrid.current?.children[ele].classList.add("disabledd");
                setTimeout(() => {
                  ourGrid.current?.children[ele].classList.add("hidden");
                }, 400);
              });
              setTimeout(() => {
                adds.forEach((ele) => {
                  ourGrid.current?.children[ele].classList.remove("hidden");
                  setTimeout(() => {
                    ourGrid.current?.children[ele].classList.remove(
                      "disabledd"
                    );
                  }, 100);
                });
              }, 400);
            }
          }}
        >
          PLAYERS
        </button>
        <button
          className="btn border-none w-fit h-6 text-white bg-transparent outline-none relative"
          onClick={({ target }: { target: any }) => {
            removeActive();
            target.classList.add("active");
            let ids: number[] = [];
            imgs.map((ele) => {
              if (ele.category != "matches") ids.push(ele.id);
            });
            if (ourGrid.current) {
              let removes = [];
              let adds: number[] = [];
              for (let j = 0; j < ourGrid.current.children.length; j++) {
                let condition = false;
                for (let i = 0; i < ids.length; i++) {
                  if (
                    ourGrid.current.children[j].getAttribute("id") ==
                    ids[i].toString()
                  ) {
                    condition = true;
                    break;
                  }
                }
                if (condition) {
                  removes.push(j);
                } else {
                  adds.push(j);
                }
              }
              removes.forEach((ele) => {
                ourGrid.current?.children[ele].classList.add("disabledd");
                setTimeout(() => {
                  ourGrid.current?.children[ele].classList.add("hidden");
                }, 400);
              });
              setTimeout(() => {
                adds.forEach((ele) => {
                  ourGrid.current?.children[ele].classList.remove("hidden");
                  setTimeout(() => {
                    ourGrid.current?.children[ele].classList.remove(
                      "disabledd"
                    );
                  }, 100);
                });
              }, 400);
            }
          }}
        >
          MATCHES
        </button>
      </section>
      <div className="flex flex-col lg:flex-row justify-center">
        <section className="lg:w-[144px] w-full relative z-10">
          <h1 className="text-[102px] font-[600] leading-[90px] mb-[40px] z-40">
            The New face of esport s.
          </h1>
          <button className="w-[144px] h-14 text-sm font-bold bg-purple hover:bg-transparent border-2 border-purple transition duration-500">
            SEE MORE
          </button>
        </section>
        <ul className="lg:w-1/2 w-full myGrid items-start gap-3" ref={ourGrid}>
          {filteredImgs.map((ele) => (
            <PhotoCard key={ele.id} cardData={ele} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallary;

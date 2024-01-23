import HighlightedText from "./components/highlightedText";
import Slider from "./components/slider";
import "./team.css";
function Team() {
  return (
    <div className="pb-40 flex flex-col space-y-10">
      <section className="textContainer text-3xl flex items-center justify-center h-64 flex-col mt-32 after:content-[''] after:absolute after:w-32 after:h-[2px] after:bg-purple after:bottom-0 after:left-1/2 after:-translate-x-1/2">
        <h1 className="md:text-6xl text-gray-450 opacity-20 tracking-wider relative z-20 top-4 md:top-8 font-bold">
          MEET THE TEAM
        </h1>
        <HighlightedText />
      </section>
      <Slider />
    </div>
  );
}

export default Team;

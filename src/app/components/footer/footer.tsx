import {
  faDiscord,
  faSteam,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#121214] text-extraPurple text-sm">
      <div className="w-full h-full py-6 px-16 backdrop-blur-3xl footer flex flex-row justify-between items-center">
        <h3>{new Date().getFullYear()}, Adel hefny.</h3>
        <div className="flex flex-row space-x-4">
          <Link href="https://store.steampowered.com/">
            <span className="hidden">steam</span>
            <FontAwesomeIcon icon={faSteam} />
          </Link>
          <Link href="https://discord.com/">
            <span className="hidden">discord</span>
            <FontAwesomeIcon icon={faTwitch} />
          </Link>
          <Link href="https://www.twitch.tv/">
            <span className="hidden">discord</span>
            <FontAwesomeIcon icon={faDiscord} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

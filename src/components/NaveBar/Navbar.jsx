import { FaHome } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Hint } from "./Hint";
import { Button } from "../ui/button";
import { FaUser } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="w-full px-5 sm:px-10 py-5 shadow-xl  backdrop-blur-lg fixed top-0 z-10">
      <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
        <h3 className="text-3xl text-black-500 font-bold">MY_PIGEONHOLE</h3>
        <ul className="flex gap-8 align-center p-1 flex-wrap">
          <li>
            <a href="#hero">
              <Hint label="Home">
                <Button size="iconSm" variant="ghost">
                  <FaHome
                    size={20}
                    className="hover:bg-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
          <li>
            <a href="#about">
              <Hint label="About">
                <Button size="iconSm" variant="ghost">
                  <FiInfo
                    size={24}
                    className="hover:text-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
          <li>
            <a href="#skills">
              <Hint label="Skills">
                <Button size="iconSm" variant="ghost">
                  <FaTools
                    size={24}
                    className="hover:text-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Hint label="Projects">
                <Button size="iconSm" variant="ghost">
                  <FaProjectDiagram
                    size={24}
                    className="hover:text-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Hint label="Contact">
                <Button size="iconSm" variant="ghost">
                  <FaEnvelope
                    size={24}
                    className="hover:text-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
          <li>
            <a href="#contact">
              {" "}
              <Hint label="User">
                <Button size="iconSm" variant="ghost">
                  <FaUser
                    size={24}
                    className="hover:text-blue-500 text-gray-500"
                  />
                </Button>
              </Hint>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

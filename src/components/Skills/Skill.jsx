import {
  FaCss3Alt,
  FaDatabase,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPaintBrush,
} from "react-icons/fa";
import { Hint } from "../NaveBar/Hint";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="mt-10 text-center">
       <motion.h2
      className="text-center text-4xl sm:text-5xl md:text-6xl 
                 font-extrabold text-gray-700 drop-shadow-lg 
                 tracking-wide uppercase border-b-4 border-gray-500 
                 inline-block px-6 py-2 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      🚀 My Tech Stack...
    </motion.h2>
      {/* Grid for skill items */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-14 mx-auto max-w-2xl shadow-xl ">
        <div className="flex flex-col items-center  ">
          <Hint label="HTML5">
            <Button>
              <FaHtml5
                color="#E34F26"
                size={50}
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="CSS3">
            <Button>
              <FaCss3Alt
                size={50}
                color="#1572B6"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="JavaScript">
            <Button>
              <FaJs
                size={50}
                color="#F7DF1E"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="HTReactJSML5">
            <Button>
              <FaReact
                size={50}
                color="#61DAFB"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="Node.js">
            <Button>
              <FaNodeJs
                size={50}
                color="#68A063"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="SQL / MongoDB">
            <Button>
              <FaDatabase
                size={50}
                color="#4DB33D"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="Git">
            <Button>
              <FaGit
                size={50}
                color="orange"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center">
          <Hint label="GitHub">
            <Button>
              <FaGithub
                color="#fff"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>

        <div className="flex flex-col items-center mb-8">
          <Hint label="ui/Ux">
            <Button>
              <FaPaintBrush
                color="#fff"
                className="hover:bg-blue-500 text-gray-500"
              />
            </Button>
          </Hint>
        </div>
      </div>
    </section>
  );
}

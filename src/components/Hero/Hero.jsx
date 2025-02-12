import img09 from "../../assets/img09.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 sm:px-10 w-full flex flex-col lg:flex-row 
             justify-center items-center mt-20 mb-16 max-w-5xl 
             mx-auto gap-8 lg:gap-12 min-h-screen lg:min-h-[80vh] py-16"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <motion.h4
            className="info-app flex justify-center text-center 
             text-3xl sm:text-4xl md:text-5xl font-extrabold 
             text-white bg-gradient-to-r from-blue-500 to-purple-500 
             text-transparent bg-clip-text 
             drop-shadow-lg tracking-wide 
             uppercase hover:from-rose-500 hover:to-yellow-500 
             transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            ✨ Hi and Welcome to ✨
          </motion.h4>

          <motion.h2
            className="info-app flex justify-center text-center 
             text-4xl sm:text-5xl md:text-6xl font-extrabold 
             bg-gradient-to-r from-blue-500 to-indigo-500 
             text-transparent bg-clip-text 
             drop-shadow-lg hover:from-rose-500 hover:to-yellow-500 
             transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Sandeep <span className="text-yellow-400">Portfolio</span> Website
          </motion.h2>

          <motion.h3
  className="info-app text-center text-2xl sm:text-3xl md:text-4xl 
             font-bold bg-gradient-to-r from-green-400 to-blue-500 
             text-transparent bg-clip-text drop-shadow-md 
             tracking-wide italic hover:from-yellow-400 hover:to-red-500 
             transition-all duration-300 hover:scale-105"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 2 }}
>
  🚀 Here a <span className="text-yellow-400">Geek Developer</span> 💻
</motion.h3>

        </div>
        <motion.p
          className="info-app"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-center">
            your friendly neighbourhood developer... 👨‍💻 Passionate about
            building <b>dynamic and scalable web applications, </b> I specialize
            in creating seamless user experiences and robust backend solutions.
            Skilled in
            <b> JavaScript, React, Node.js, and MongoDB,</b> I bring designs to
            life and ensure efficient functionality. 🚀 With a knack for
            problem-solving and an eye for detail, I thrive in fast-paced
            environments, delivering clean, maintainable code. 🌐 Let’s connect
            to turn ideas into reality! 💻✨
          </p>
        </motion.p>
        <img src={img09} alt="" className="flex-1 " />
      </div>
      <div className="flex-1 ">
        <img
          src="https://user-images.githubusercontent.com/101390725/190355324-a0e8b36a-6c23-46df-93b2-aa01c7dddd24.gif"
          className="w-full h-full bg-cover rounded-md"
        />
      </div>{" "}
    </section>
  );
}

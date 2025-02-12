import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
                        align-center max-w-5xl mx-auto"
    >
      <div className="flex-1">
        <img
          src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
          alt="About"
          className="w-full h-full bg-cover"
        />
      </div>
      <div
        className="flex-1 flex flex-col justify-center
                             items-center gap-5 px-6"
      >
        <div>
          <motion.h2
            className="text-center text-3xl sm:text-4xl md:text-4xl 
             font-extrabold text-gray-700 drop-shadow-lg 
             tracking-wide uppercase border-b-4 border-gray-500 
             inline-block px-6 py-2 rounded-lg 
             transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            🚀 About Me🔥
          </motion.h2>
        </div>
        <p>As I said, I am your friendly neighbourhood developer...</p>
        <p>
          I am a passionate self taught developer (which is quite a subjective
          thing as i learnt from teachers on youtube so does that really counts?
          idk). I am having an experience of about 1 years and had a deep
          understanding of creating web products.
        </p>
      </div>
    </section>
  );
}

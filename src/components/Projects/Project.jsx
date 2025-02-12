import img01 from "../../assets/img01.png";
import img02 from "../../assets/img02.png";
import img03 from "../../assets/img03.png";
import img04 from "../../assets/img04.png";
import img05 from "../../assets/img05.png";
import img06 from "../../assets/img06.png";
import img07 from "../../assets/img07.png";
import img08 from "../../assets/img08.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <motion.h2
        className="text-center text-4xl sm:text-5xl md:text-6xl 
             font-extrabold text-gray-700 drop-shadow-lg 
             tracking-wide uppercase border-b-4 border-gray-500 
             inline-block px-6 py-2 rounded-lg 
             transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        🚀 My Projects 🔥
      </motion.h2>

      <div
        className="p-10 text-gray-800 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
                            hover:scale-[102%] w-full"
      >
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline "
              href="https://new-crypto-tracker-m1v21vzzz-sandeep-sahus-projects.vercel.app/"
            >
              01 Crypto tracker app
            </a>
          </h2>
          <p>
            In this project, you can build a crypto tracker app that displays
            live prices, market trends, and coin details for thousands of
            cryptocurrencies.React's components make it easy to handle complex
            For styling, libraries like Tailwind CSS or CSS modules can be used.
            Another idea is a crypto comparison tool where users can compare
            different coins by price, volume, or market cap. With the historical
            data endpoints, you can develop a charting tool to visualize price
            trends. The API’s simplicity and real-time data make it ideal for
            educational, analytical. projects.
          </p>
        </div>

        <div className="w-80 rounded">
          <a
            href="https://new-crypto-tracker-m1v21vzzz-sandeep-sahus-projects.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img01}
              alt="Project 1"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
      </div>

      <div
        className="p-10 text-gray-800 flex flex-col justify-center items-center gap-5 
          lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
          hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://temperature-converter-eight-eosin.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img02}
              alt="Project 1"
              className="w-full h-full  bg-cover rounded"
            />
          </a>
        </div>

        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://temperature-converter-eight-eosin.vercel.app/"
            >
              02 A temperature converter
            </a>
          </h2>
          <p>
            A temperature converter built with React is a user-friendly
            application that converts temperatures between Celsius, Fahrenheit.
            Using React's state management, the app allows users to input a
            temperature in one unit and see the real-time conversion in the
            others. The app features a simple UI with input fields, dropdowns
            for selecting units, and dynamic output. React's components make it
            easy to handle calculations and updates efficiently. For styling,
            libraries like Tailwind CSS or CSS modules can be used. This project
            is beginner-friendly and helps in understanding React basics,
            including state, props, and event handling.
          </p>
        </div>
      </div>

      <div
        className="p-10 bg-gary-800 flex flex-col justify-center items-center gap-5 
          lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
          hover:scale-[102%] w-full"
      >
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://project-calculat0r-jkci.vercel.app/"
            >
              03 A calculator
            </a>
          </h2>
          <p>
            A calculator built with <b>HTML, CSS, and Js</b> is a functional
            application that performs basic arithmetic operations like addition,
            subtraction, multiplication, and division. The app typically
            features a clean user interface with a numeric keypad and buttons
            for operators. Using React's state management, it handles user input
            and displays real-time results.
          </p>
        </div>

        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://project-calculat0r-jkci.vercel.app/"
            >
              <img
                src={img03}
                alt="Project 1"
                className="w-full h-full 
                                        bg-cover rounded"
              />
            </a>
          </h2>
        </div>
      </div>

      <div
        className="p-10  bg-gary-800 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
          hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://project-redbusm-home-page-clone.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img04}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>

        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://project-redbusm-home-page-clone.vercel.app/"
            >
              04 Redbus clone
            </a>
          </h2>
          <p>
            A RedBus clone built with <b>HTML, CSS, and Js</b> is a web
            application designed for booking bus tickets online. It allows users
            to search for buses by entering travel details like source,
            destination, date, and number of passengers.
          </p>
        </div>
      </div>

      <div
        className="p-10  bg-gary-800 flex flex-col justify-center items-center gap-5 
         lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
         hover:scale-[102%] w-full"
      >
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://tic-tac-toe-game-nine-red.vercel.app/"
            >
              05 A Tic-Tac-Toe game
            </a>
          </h2>
          <p>
            A Tic-Tac-Toe game built with <b>React Js </b> is a fun and
            interactive project for beginners. The game consists of a 3x3 grid
            where two players, "X" and "O," take turns placing their marks.
            React's state management is used to track the game board and
            determine the winner or a draw. The app dynamically updates the
            board and provides real-time feedback, such as highlighting the
            winning line. Components are designed for modularity, with a game
            board and individual squares. Features like resetting the game and
            displaying the current player's turn enhance usability. This project
            helps in mastering React state, props, and event handling.
          </p>
        </div>
        <div className="w-80 rounded">
          <a
            href="https://tic-tac-toe-game-nine-red.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img05}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
      </div>

      <div
        className="p-10  bg-gary-800 flex flex-col justify-center items-center gap-5 
      lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
          hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://to-do-app-flame-delta.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img06}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>

        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://to-do-app-flame-delta.vercel.app/"
            >
              06 A To-Do app
            </a>
          </h2>
          <p>
            A To-Do app built with <b>HTML and Bootstrap</b> is a stylish and
            functional project to manage tasks efficiently. The app features a
            user-friendly interface using Bootstrap components for responsive
            design. Users can add, edit, delete, and mark tasks as complete.
            React's state management is used to handle the task list
            dynamically, ensuring real-time updates. Bootstrap's buttons, forms,
            saving tasks to local storage can be added for better functionality.
          </p>
        </div>
      </div>

      <div
        className="p-10  bg-gary-800 flex flex-col justify-center items-center gap-5 
        lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
        hover:scale-[102%] w-full"
      >
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://tier-list-app-gamma.vercel.app/"
            >
              07 A Tier List app
            </a>
          </h2>
          <p>
            A Tier List app built with <b>React Js with Tailwind Css</b> allows
            users to create and manage custom tier lists, where items can be
            ranked in different tiers. Users can drag and drop items between
            tiers, using a simple and intuitive interface. The app can store
            images for each item by providing a link input or an image upload
            option. React's state management handles the list’s dynamic updates,
            and drag-and-drop functionality can be implemented using libraries
            like react-dnd or react-beautiful-dnd.
          </p>
        </div>

        <div className="w-80 rounded">
          <a
            href="https://tier-list-app-gamma.vercel.app/"
            className="w-full h-full"
          >
            <img
              src={img07}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
      </div>
      <div
        className="p-10  bg-gary-800 flex flex-col justify-center items-center gap-5 
         lg:flex-row-reverse max-w-5xl mx-auto shadow-xl transition hover:shadow-xl 
        hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a href="https://project-gmail.vercel.app/" className="w-full h-full">
            <img
              src={img08}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>

        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://project-gmail.vercel.app/"
            >
              08 An email template
            </a>
          </h2>
          <p>
            An email template built with HTML and CSS is a simple yet effective
            way to design responsive and visually appealing email layouts. It
            typically includes a header, body, and footer sections, formatted
            using basic HTML tags. CSS is used for styling elements such as
            text, buttons, and images to ensure they look good across different
            devices and email clients. Inline CSS is often used for better
            compatibility with email platforms. A well-designed email template
            includes a clear structure with sections for content, links, and
            images. Responsive design techniques like media queries are used to
            ensure the template adapts to mobile devices.
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

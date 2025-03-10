import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "d600897c-fc4d-4684-93fd-aca6f1bb696d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        alert("Message send Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="my-40 max-w-5xl mx-auto p-6">
        <motion.h2
            className="text-center text-4xl sm:text-5xl md:text-5xl 
             font-extrabold text-gray-700 drop-shadow-lg w-full
             tracking-wide uppercase border-b-4 border-gray-500 
             inline-block px-6 py-2 rounded-lg 
             transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            🚀 Contect me 🔥
          </motion.h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 bg-none p-6 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-gray-700 mb-6">
            Get in Touch
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.instagram.com/sandeep11.2__143__/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                <FaInstagram className="inline-block" /> {"  "}
                <span className="font-bold">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                <FaLinkedin className="inline-block" />
                {"  "}
                <span className="font-bold">Linkedin</span>
              </a>
            </li>
            <li>
              <FaWhatsapp className="inline-block" />
              <a
                href="https://wa.me/7522814847"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-800 hover:underline"
              >
                {"  "}
                <span className="font-bold">Chat Now</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 bg-none p-6 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
            Contact Form
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mt-2 px-4 py-2  rounded-md bg-transparent border-gray-800 hover:bg-gray-500"
              placeholder="Your Name"
              type="text"
              name="name"
            />
            <input
              className="w-full mt-2 px-4 py-2 rounded-md bg-transparent border-gray-800 hover:bg-gray-500"
              placeholder="Your Email"
              type="email"
              name="email"
            />
            <textarea
              className="w-full mt-2 px-4 py-2 border-gray-800  rounded-md bg-transparent hover:bg-gray-500"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button
              className="w-full mt-2 px-4 py-2 border-gray-800 rounded-md bg-transparent hover:bg-gray-500 hover:text-slate-300"
              type="submit"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

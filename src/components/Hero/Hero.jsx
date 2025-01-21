// Hero.js
export default function Hero() {
  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                    justify-center items-center align-center mt-40 
                    mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <h4 className="text-center text-xl font-bold">Hi and welcome to</h4>
          <h2 className="text-center text-emerald-500 text-5xl font-bold">
            My Portfolio Website
          </h2>
          <h3 className="text-center text-4xl font-bold text-white">
            {" "}
            I am Sandeep
          </h3>
        </div>

        <p className="text-center">your friendly neighbourhood developer...</p>
      </div>
      <div className="flex-1 ">
        <img
        src="https://user-images.githubusercontent.com/101390725/190355324-a0e8b36a-6c23-46df-93b2-aa01c7dddd24.gif" 
         className="w-full h-full bg-cover rounded-md"
        />
      </div>
    </section>
  );
}

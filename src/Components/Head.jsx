import React from "react";
import Navbar from "./Navbar";

const Head = () => {
  return (
    
    <section
  className="w-full min-h-screen px-6 md:px-20 pt-6 font-poppins
    bg-[url('/images/Frame401.svg')] 
    md:bg-[url('/images/Frame372.png')] 
    bg-no-repeat bg-cover bg-right md:bg-top"
  style={{
    minHeight: "100dvh",
  }}
>
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />

        {/* Mobile Heading */}
        <div className="block md:hidden mt-10">
          <h1 className="text-2xl font-bold text-blue-800 leading-snug">
            Up Scholar Hub
            <br />
            Your Global Education & Migration Partner
          </h1>
        </div>

        {/* Desktop Heading */}
        <div className="max-w-4xl mt-10 hidden md:block">
          <h1 className="text-3xl md:text-6xl font-extrabold text-blue-800 leading-snug">
            Up Scholar Hub <br />
            Your Global Education & <br />
            Migration Partner
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Head;

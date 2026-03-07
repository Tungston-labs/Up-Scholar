// import React from "react";

// const CountriesSection = () => {
//   const cards = Array(6).fill(null);

//   return (
//     <section
//       className="py-10 md:py-16 px-4 md:px-20 font-poppins text-white text-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/images/Frame 60.png')",
//       }}
//     >
//       {" "}
//       <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
//         Our Products & Services{" "}
//       </h2>
//       <p className="text-xs md:text-lg max-w-3xl mx-auto mb-6 md:mb-10 text-white/90 leading-relaxed md:leading-normal">
//         Up Scholar Hub specializes in facilitating opportunities across some of
//         the most sought-after destinations for international students and
//         migrants. While we cater to all of Europe, our primary focus includes:
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
//         {cards.map((_, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md 
//                    w-full max-w-[274px] 
//                    h-[200px] sm:h-[220px] md:h-[240px] lg:h-[263px]"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CountriesSection;

import React from "react";

const CountriesSection = () => {
  const cards = [
    {
      title: "BUSINESS INNOVATION & DISCOVERY VISA",
      icon: "/images/icon1.svg",
    },
    {
      title: "SKILLED JOB VISA",
      icon: "/images/icon2.svg",
    },
    {
      title: "GLOBAL VISA",
      icon: "/images/icon3.svg",
    },
    {
      title: "EMPLOYMENT VISA",
      icon: "/images/icon4.svg",
    },
    {
      title: "SKILL ASSESSMENT",
      icon: "/images/icon5.svg",
    },
    {
      title: "PR MIGRATION",
      icon: "/images/icon6.svg",
    },
  ];

  return (
    <section
      className="py-10 md:py-16 px-4 md:px-20 font-poppins text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Frame 60.png')",
      }}
    >
      <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
        Our Products & Services
      </h2>

      <p className="text-xs md:text-lg max-w-3xl mx-auto mb-6 md:mb-10 text-white/90">
        Up Scholar Hub specializes in facilitating opportunities across some of
        the most sought-after destinations for international students and
        migrants.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden 
            w-full max-w-[274px] h-[260px] flex flex-col items-center justify-start"
          >
            <div className="bg-white w-full h-[55%] flex items-center justify-center px-4">
              <h3 className="text-black text-lg font-semibold text-center leading-snug">
                {card.title}
              </h3>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-blue-700 rounded-t-[60%]" />

            <div
              className="absolute bottom-[70px] w-20 h-20 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: "#E1EAF9" }}
            >
              <img
                src={card.icon}
                alt="icon"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountriesSection;
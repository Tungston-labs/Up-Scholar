import React from "react";

const countries = [
  {
    image: '/images/Frame62.png',
  },
  {
    image: "/images/Frame73.png",
  },
  {
    image: "/images/Frame72.png",
  },
  {
    image: "/images/Frame69.png",
  },
  {
    image: "/images/Frame71.png",
  },
  {
    image: "/images/Frame70.png",
  },
];

const CountriesSection = () => {
  return (
    <section
      className="py-10 md:py-16 px-4 md:px-20 font-poppins text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Frame 60.png')",
      }}
    >
      <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
        Countries We Focus On
      </h2>

      <p className="text-xs md:text-lg max-w-3xl mx-auto mb-6 md:mb-10 text-white/90 leading-relaxed md:leading-normal">
        Up Scholar Hub specializes in facilitating opportunities across some of the most sought-after
        destinations for international students and migrants. While we cater to all of Europe, our
        primary focus includes:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        {countries.map((country, idx) => (
          <img
            key={idx}
            src={country.image}
            alt={`Country ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesSection;

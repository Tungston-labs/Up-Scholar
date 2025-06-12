import React from "react";

const missionVisionData = [
  {
    title: "Our Mission",
    image: "/images/mission_1628441 1.png",
    description:
      "Our mission at Up Scholar Hub is to empower individuals with accessible and accurate pathways for global education and migration. We are dedicated to providing expert, personalized support, ensuring every applicant is guided insightfully from the guidance needed to confidently live and thrive abroad.",
  },
  {
    title: "Our Vision",
    image: "/images/Layer_1.png",
    description:
      "We envision a world where the dream of international education and building a new life abroad is within everyone's reach. Up Scholar Hub aspires to be the transformative consultancy exceptional in global standards, helping clients turn their dreams into applications, experiences, and new lives across borders.",
  },
];

const serviceCards = [
  {
    title: "Show Money Assistance",
    description:
      "Expert guidance and support in fulfilling financial requirements for your visa application.",
    image: "/images/Layer 10.png",
  },
  {
    title: "Visa & Emigration Assistance",
    description:
      "Comprehensive support for all types of visas, from student to work and immigration, ensuring a smooth application process.",
    image: "/images/visa 3.png",
  },
  {
    title: "Visa Slot Booking",
    description:
      "Timely and efficient assistance in securing crucial visa appointment slots.",
    image: "/images/Layer_x0020_1.png",
  },
  {
    title: "Income Tax Report Filing Assistance",
    description:
      "Professional help with income tax report preparation and filing, ensuring compliance for your applications.",
    image: "/images/ITR 1.png",
  },
  {
    title: "CIBIL Score Assistance",
    description:
      "Guidance on understanding and improving your credit score, crucial for many financial applications.",
    image: "/images/cibil score 1.png",
  },
  {
    title: "Education Loan Assistance",
    description:
      "Connecting you with suitable financial institutions and assisting with your education loan application process.",
    image: "/images/education loan 1.png",
  },
  {
    title: "Migration Support",
    description:
      "End-to-end support for your migration journey, including documentation, applications and guidance.",
    image: "/images/Vector.png",
  },
  {
    title: "Accommodation Assistance",
    description:
      "Helping you find suitable and safe accommodation in your destination country.",
    image: "/images/housing solutions 1.png",
  },
  {
    title: "Pre & Post Departure Support",
    description:
      "Comprehensive support, from predeparture briefings to initial settlement assistance upon arrival.",
    image: "/images/17 Travel insurance.png",
  },
  {
    title: "Career Counseling & Course Selection",
    description:
      "Expert advice on choosing the right courses and institutions that align with your career goals.",
    image: "/images/Group (1).png",
  },
  {
    title: "SOP & LOR Review",
    description:
      "Professional review and enhancement of your Statement of Purpose (SOP) and Letters of Recommendation (LOR).",
    image: "/images/g5784.png",
  },
  {
    title: "Application & Admission Guidance",
    description:
      "Meticulous assistance with university and college applications, ensuring all requirements are met.",
    image: "/images/_x32_3_intersection_x2C__way_x2C__choice_x2C__voter_x2C__vote_x2C__politics_x2C__voting.png",
  },
];

const AboutSection = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/Frame 399.png')" }}
    >
      {/* Mission & Vision */}
      <div className="text-center pt-6 md:pt-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold md:font-bold text-[#0E53CC] font-poppins">
          Our Mission & Vision
        </h2>
        <div className="flex justify-center gap-4 md:gap-8 mt-6 md:mt-10 flex-wrap">
          {missionVisionData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 md:p-10 w-full md:max-w-xl border border-gray-200"
            >
              <h3 className="text-lg md:text-2xl font-bold md:font-bold text-[#0E53CC] font-poppins text-center mb-2 md:mb-4">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-14 md:w-20 mx-auto my-3 md:my-6"
              />
              <p className="text-sm md:text-base text-center text-[#0E53CC] font-poppins leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="text-center pt-10 md:pt-20 px-4 md:px-6">
        <h2
          className="text-2xl md:text-4xl font-bold md:font-bold text-[#0E53CC] font-poppins"
          id="services"
        >
          Our Services
        </h2>
        <p className="text-[#0E53CC] max-w-3xl mx-auto mt-2 font-poppins text-sm md:text-base">
          Navigating the path to international education or migration can be daunting, but with Up Scholar Hub, you're never alone. We offer a holistic suite of services designed to cover every aspect of your journey:
        </p>

        <div
          className="overflow-x-auto mt-6 md:mt-10 px-1 pb-6 md:pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 md:gap-6 w-max">
            {serviceCards.map((service, idx) => (
              <div
                key={idx}
                className="w-[280px] md:w-[333px] h-[420px] md:h-[450px] bg-white rounded-[16px] shadow-md border border-gray-200 flex flex-col"
              >
                <div className="bg-[#0E53CC] rounded-t-[16px] text-white font-semibold md:font-bold text-base md:text-lg px-3 font-poppins h-[72px] md:h-[100px] flex items-center justify-center text-center">
                  {service.title}
                </div>
                <div className="flex flex-col items-center justify-start p-4 md:p-6 flex-grow">
                  <img
                    src={service.image}
                    alt="icon"
                    className="w-14 h-14 md:w-20 md:h-20 my-3 md:my-6"
                  />
                  <p className="text-sm md:text-base text-center text-[#0E53CC] font-poppins leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";

const missionVisionData = [
  {
    title: "Our Mission",
    image: "/images/mission_1628441 1.png",
    description:
      "To simplify global mobility by unlocking the four pathways of opportunity—employment,self-employment, business ownership, and investment—through transparent advisory,intelligent technology, and expert-led execution. We empower people to move, work,build, and invest globally with clarity, confidence, and long-term impact.",
  },
  {
    title: "Our Vision",
    image: "/images/Layer_1.png",
    description:
      "To become the world’s most trusted platform enabling individuals and enterprises to build global careers, businesses, and up—without borders.",
  },
];

const serviceCards = [
  {
    title: "Direct Application Support (Agent-Free)",
    description:
      "End-to-end application assistance with no intermediaries, ensuring transparency and accuracy.",
    image: "/images/Layer 10.png",
  },
  {
    title: "Career Counseling & Strategic Guidance",
    description:
      "Personalized career advisory to align global opportunities with individual goals.",
    image: "/images/visa 3.png",
  },
  {
    title: "Document & Digital Portfolio Enhancement",
    description:
      "Professional enhancement of resumes, profiles, and web-based portfolios to meet international standards.",
    image: "/images/Layer_x0020_1.png",
  },
  {
    title: "Interview Preparation & Mock Interview Training",
    description:
      "Structured interview coaching, including real-world simulations and expert feedback.",
    image: "/images/ITR 1.png",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Strategic personal branding and profile optimization to improve global visibility and recruiter reach.",
    image: "/images/cibil score 1.png",
  },
  {
    title: "CV & Cover Letter Development",
    description:
      "Professionally crafted CVs and cover letters tailored to international job markets and visa requirements.",
    image: "/images/education loan 1.png",
  },
  {
    title: "Skill-Based Certification Programs",
    description:
      "Access to curated certification courses aligned with in-demand global skills.",
    image: "/images/Vector.png",
  },
  {
    title: "Certified Skill Licensing Support",
    description:
      "Guidance for obtaining recognized skill licenses, including support where third-party fees apply.",
    image: "/images/housing solutions 1.png",
  },
  {
    title: "AI-Powered Interview & Career Toolkit",
    description:
      "Advanced AI tools to support interview preparation, career positioning, and performance improvement.",
    image: "/images/17 Travel insurance.png",
  },
  {
    title: "Native Language Learning Support",
    description:
      "Language learning assistance customized to the destination country and professional requirements.",
    image: "/images/Group (1).png",
  },
  {
    title: "Skill Assessment & Verification Support",
    description:
      "Assistance with skill assessments and verification across relevant international assessment bodies.",
    image: "/images/g5784.png",
  },
  {
    title: "Post-Placement Growth Consulting",
    description:
      "Ongoing career growth and progression advisory after placement or migration.",
    image:
      "/images/_x32_3_intersection_x2C__way_x2C__choice_x2C__voter_x2C__vote_x2C__politics_x2C__voting.png",
  },
  {
    title: "End-to-End Pre & Post Assistance",
    description:
      "Ongoing career growth and progression advisory after placement or migration.",
    image:
      "/images/technological-support (1) 1.png",
  },
  {
    title: "Career Fair Intelligence & Updates",
    description:
      "Timely information and guidance on global career fairs and hiring events.",
    image:
      "/images/guidances 1.svg",
  },
  {
    title: "Real-World Project Opportunities",
    description:
      "Access to practical, industry-aligned projects to build global experience.",
    image:
      "/images/closure 1.png",
  },
  {
    title: "Professional Networking & Mentorship Sessions",
    description:
      "Curated networking channels and expert-led sessions to expand global professional connections.",
    image:
      "/images/leadership 1.png",
  },

];

const AboutSection = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/Frame 399.png')" }}
    >
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

      <div className="text-center pt-10 md:pt-20 px-4 md:px-6">
        <h2
          className="text-2xl md:text-4xl font-bold md:font-bold text-[#0E53CC] font-poppins"
          id="services"
        >
          Our Services
        </h2>
        <p className="text-[#0E53CC] max-w-3xl mx-auto mt-2 font-poppins text-sm md:text-base">
          One platform. Four global pathways. Unlimited possibilities. From
          careers to capital — your gateway to global opportunity. Building
          global careers, businesses, and futures. Where talent, business, and
          investment go global.{" "}
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

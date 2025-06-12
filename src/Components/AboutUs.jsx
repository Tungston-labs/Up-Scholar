import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="aboutUs"
      className="w-full bg-[#0E53CC] text-[#DDE8F9] font-poppins py-10 px-6 md:px-[71px] flex flex-col gap-4"
    >
      <h2 className="text-2xl md:text-4xl font-bold">About us</h2>
      <p className="text-base md:text-lg leading-relaxed max-w-6xl">
        Welcome to Up Scholar Hub — your trusted partner in international education and migration. <br />
        We provide personalized guidance to help you study, work, or migrate abroad with ease. Our experienced and certified consultants simplify the process, offering top-rated services with a strong track record of success. Your goals are our priority — let’s turn your global dreams into reality.
      </p>
    </section>
  );
};

export default AboutUsSection;

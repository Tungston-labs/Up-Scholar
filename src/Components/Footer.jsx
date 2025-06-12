import React from "react";
import { MapPin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#BACBEA] text-[#0E53CC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left side - Logo & Tagline */}
        <div className="flex flex-col text-left">
          <img
            src="/images/logo 1-01 1.png"
            alt="Upscholar Logo"
            className="w-48 mb-4"
          />
          <h2 className="text-3xl font-bold font-Poppins">
            Global dreams, guided right...
          </h2>
        </div>

        {/* Right side - Contact Info */}
        <div className="text-sm space-y-4 font-Poppins font-semibold">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" />
            <p>
              Upscholar, Ullampilly Building, 4th Floor, <br />
              Seaport - Airport Rd, behind Olimugal Juma Masjid, <br />
              Thrikkakara, Vazhakkala, Kakkanad, <br />
              Kochi, Kerala, 682030
            </p>
          </div>

          <a
            href="https://www.instagram.com/up_scholar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Instagram className="w-5 h-5" />
            <span>up_scholar</span>
          </a>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>upscholar25@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+91 9961437601, +91 8606012859</span>
          </div>
        </div>
      </div>

      {/* Bottom mountain-like curve with copyright inside */}
      <div className="relative mt-[-2px]">
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-[100px] md:h-50"
          preserveAspectRatio="none"
        >
          <path
            fill="#0E53CC"
            d="M0,400 C480,200 960,200 1440,400 L1440,400 L0,400 Z"
          ></path>
        </svg>
        <div className="absolute bottom-0 w-full text-center text-white pb-3 text-[7px] md:text-sm">
          © Copyright 2024, Upscholar. Designed by{" "}
          <span className="font-semibold">Tungston Labs</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


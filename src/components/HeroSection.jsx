"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion as Motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <Motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 from-primary-400 to-secondary-600 text-4xl sm:text-5xl lg:text-6xl">
              
              Hello, I'm
              {" "}
            </span>
            <br></br>
              Habiba
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione reiciendis fuga mollitia provident voluptas numquam porro cupiditate! Ut maiores molestiae fugit pariatur fugiat. Ratione officia id recusandae sit. Dolorum!.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block bg-[#121212] py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </Motion.div>
        <motion div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion>
      </div>
    </section>
  );
};

export default HeroSection;
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

import "../../../src/index.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import banner from "/src/assets/my/banner img.webp";
import img from "/src/assets/my/banner 2.webp";
import video from "/public/video.mp4";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center uppercase">
            Welcome To <span className="text-orange-500">My Website</span>
          </h1>
          <p className="py-4 text-center text-xl">
            Versatile artist with skills in{" "}
            <span className="text-orange-500 font-bold">
              <Typewriter
                options={{
                  strings: ["", "Programming", "Graphics", "Voice"],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </span>
          </p>
          <div className="flex space-x-2 text-center justify-center items-center">
            <Link
              to="https://www.facebook.com/nazmulsaw"
              target="_blank"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <BsFacebook className="text-[28px]"></BsFacebook>
            </Link>
            <Link
              to="https://github.com/ninazmul"
              target="_blank"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <AiFillGithub className="text-[28px]"></AiFillGithub>
            </Link>
            {/* <Link
                to="#email"
                className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
              >
                <TfiEmail className="text-[28px]"></TfiEmail>
              </Link> */}
            <Link
              to="https://www.linkedin.com/in/ninazmul"
              target="_blank"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
            </Link>
            <Link
              to="https://www.fiverr.com/ninazmul"
              target="_blank"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <TbBrandFiverr className="text-[28px] rounded-full"></TbBrandFiverr>
            </Link>
            <Link
              to="https://www.upwork.com/freelancers/~01369d0d10ed1780e4"
              target="_blank"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <SiUpwork className="text-[28px] rounded-full" />
            </Link>
          </div>
        </div>
        <div className="">
          <img src={banner} className="w-96" />
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-orange-200 uppercase px-4 border-orange-500">
            Intro Video
          </h1>
        </div>
        <div className="flex justify-center items-center p-4">
          <iframe
            src={video}
            className="w-[300px] h-[170px] md:w-[530px] md:h-[300px] lg:w-[890px] lg:h-[500px] rounded-lg border-orange-500 border-2 card_glow"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 p-4">
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-orange-200 uppercase px-4 border-orange-500">
              ABOUT ME
            </h1>
          </div>
          <p className="py-2 text-justify">
            "As-salamu alaykum, I am a multi-talented creative professional with
            expertise in graphic design, voice-over and dubbing, video editing,
            and Website development. With years of experience and a keen eye for
            detail, I deliver high-quality and engaging content that exceeds
            expectations. My goal is to help businesses and individuals achieve
            their communication and marketing objectives through visually
            stunning and compelling designs, professional voice-overs and
            dubbing, engaging video edits, and Web development. Let's work
            together to bring your ideas to life.
          </p>
          <Link to="/about" className="">
            <button className="neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-lg py-2 px-4 uppercase relative overflow-hidden text-center">
              RESUME
            </button>
          </Link>
        </div>
        <div className="">
          <img src={img} className="rounded-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;

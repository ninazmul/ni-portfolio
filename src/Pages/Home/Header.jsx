import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import "../../../src/index.css"
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Header = () => {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, [])
  
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div data-aos="fade-up">
              <img
                src="https://i.ibb.co/JzRVm6t/1694098148342-removebg-preview.png"
                className="rounded-full border-2 p-1 border-fuchsia-500 img_glow "
              />
            </div>
            <div>
              <h1
                data-aos="fade-right"
                className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase"
              >
                Welcome To <span className="text-fuchsia-500">My Website</span>
              </h1>
              <p data-aos="fade-left" className="py-6 text-center">
                Versatile artist with skills in programming, graphics, and voice
              </p>
              <div
                data-aos="fade-right"
                className="flex space-x-2 text-center justify-center items-center"
              >
                <a
                  href="https://www.facebook.com/nazmulsaw"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <BsFacebook className="text-[28px]"></BsFacebook>
                </a>
                <a
                  href="https://github.com/ninazmul"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <AiFillGithub className="text-[28px]"></AiFillGithub>
                </a>
                <a
                  href="#email"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <TfiEmail className="text-[28px]"></TfiEmail>
                </a>
                <a
                  href="https://www.linkedin.com/in/ninazmul/"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col-reverse lg:flex-row">
            <div className="" data-aos="fade-down">
              <img
                src="https://i.ibb.co/JQRnskq/IMG-20230527-134518.png"
                className="rounded-full w-96 border-2 p-1 border-fuchsia-500 img_glow "
              />
            </div>
            <div className="lg:w-1/2 space-x-4">
              <h1
                data-aos="fade-left"
                className="text-3xl md:text-5xl font-bold leading-normal text-center"
              >
                <span className="text-fuchsia-500">ABOUT ME</span>
              </h1>
              <p data-aos="fade-right" className="py-6 text-justify">
                "As-salamu alaykum, I am a multi-talented creative professional
                with expertise in graphic design, voice-over and dubbing, video
                editing, and Website development. With years of experience and a
                keen eye for detail, I deliver high-quality and engaging content
                that exceeds expectations. My goal is to help businesses and
                individuals achieve their communication and marketing objectives
                through visually stunning and compelling designs, professional
                voice-overs and dubbing, engaging video edits, and Web
                development. Let's work together to bring your ideas to life.
              </p>
              <Link to="/about" className="">
                <button
                  data-aos="fade-right"
                  className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                >
                  RESUME
                </button>
              </Link>

              <div
                data-aos="fade-left"
                className="flex space-x-2 text-center justify-center items-center"
              >
                <a
                  href="https://www.facebook.com/nazmulsaw"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <BsFacebook className="text-[28px]"></BsFacebook>
                </a>
                <a
                  href="https://github.com/ninazmul"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <AiFillGithub className="text-[28px]"></AiFillGithub>
                </a>
                <a
                  href="#email"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <TfiEmail className="text-[28px]"></TfiEmail>
                </a>
                <a
                  href="https://www.linkedin.com/in/ninazmul/"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
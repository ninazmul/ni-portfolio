import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { TfiEmail } from "react-icons/tfi";
import "../../../src/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import Slider from "../Home/Slider";


const About = () => {
    useEffect(() => {
      Aos.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750,
      });
    }, []);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div data-aos="fade-up" className="flex-1">
            <img
              src="https://i.ibb.co/JpKCHwp/1694098009329.jpg"
              className="border-2 p-1 border-fuchsia-500 img_glow "
            />
          </div>
          <div className="flex-1">
            <p data-aos="fade-left" className=" text-xl text-center">
              As-salamu alaykum
            </p>
            <h1
              data-aos="fade-right"
              className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase"
            >
              I'm <span className="text-fuchsia-500">Nazmul Islam</span>
            </h1>
            <p data-aos="fade-left" className="py-6 md:text-xl px-2 md:px-4 text-justify">
              But you can call me{" "}
              <span className="text-fuchsia-500">N.I. Nazmul</span>. I'm not
              your run-of-the-mill professional; I'm a creative chameleon with a
              diverse skill set. You see, I wear many hats - I'm a web-weaving
              wizard, a voice virtuoso, a graphics guru, and a master of visual
              storytelling through photo and video editing. My secret sauce?
              It's a blend of unwavering passion for design, a hawk-like eye for
              detail, and a deep well of technical expertise. These ingredients
              allow me to approach each project with a dash of uniqueness and a
              pinch of effectiveness. Picture this: I can whip up graphics that
              make your eyes dance, infuse voiceovers with soul, and breathe
              life into photos and videos. My track record of delivering
              exceptional results is a testament to my versatility and
              dedication to my craft. The pages of my portfolio unfold a
              tapestry of creativity, showcasing my wide-ranging talents. I
              thrive on fresh challenges and am always raring to go, ready to
              embark on new and exciting projects. But here's the kicker: I'm
              not just about pixels and code. When I'm not crafting digital
              wonders, I'm out in the world, lending a hand as a volunteer and
              rescuing our furry friends. I'm a curious soul, constantly thirsty
              for knowledge, and I'm a sucker for adventure. Animals? Well, they
              hold a special place in my heart. And if you happen to be honest
              and selfless, you're my kind of person. We should definitely sit
              down over a cup of coffee and chat. You see, there's not much I
              can say about myself because who I am depends on the stories and
              experiences I share with people like you. Thanks for taking the
              time to get to know me!
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
              {/* <a
                href="/email"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <TfiEmail className="text-[28px]"></TfiEmail>
              </a> */}
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
      <div className="flex flex-col lg:flex-row gap-4 py-6">
        <div className="lg:w-1/2 p-4">
          <Slider></Slider>
        </div>
        <div className="lg:w-1/2">
          <h1
            data-aos="fade-left"
            className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase text-fuchsia-500"
          >
            Summary
          </h1>
          <p data-aos="fade-left" className="text-justify md:text-xl px-2 md:px-4">
            I possess a wide array of creative skills, including proficiency in
            website development, voiceover and dubbing, graphic design, as well
            as photo and video editing. These talents allow me to approach
            projects with a unique and effective perspective, consistently
            delivering exceptional results. Whether it's crafting stunning
            visuals, adding life to voiceovers, or enhancing photos and videos,
            my skills and experience are finely honed for the job, ensuring
            high-quality outcomes every time.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center py-4"
      >
        <a
          data-aos="fade-right"
          href="https://drive.google.com/file/d/19uV3Bw3Red_WC96L8Q7IAopGJ-CtxeiR/view?usp=sharing"
          className="btn btn-outline font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center my-1 text-xl w-72 text-white hover:text-none"
        >
          Download RESUME{" "}
          <span>
            <FaDownload />
          </span>
        </a>
        <a
          data-aos="fade-left"
          href="https://drive.google.com/file/d/1zbkc1hdZ1Ip6VQfFNFgrQD6lDsoxu5SY/view?usp=sharing"
          className="btn btn-outline font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center my-1 text-xl w-72 text-white hover:text-none"
        >
          Download CV{" "}
          <span>
            <FaDownload />
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;

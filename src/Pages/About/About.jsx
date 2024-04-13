import "../../../src/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import Slider from "../Home/Slider";
import acLogo from "/src/assets/Ac logo white text.webp";

import img from "/src/assets/my/1694098009329.webp";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src={img}
              className="border-2 p-1 border-orange-500 img_glow "
            />
          </div>
          <div className="flex-1">
            <p className=" text-xl text-center">As-salamu alaykum</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase">
              I'm <span className="text-orange-500">Nazmul Islam</span>
            </h1>
            <p className="md:py-6 md:text-xl md:px-4 text-justify">
              But you can call me{" "}
              <span className="text-orange-500">N.I. Nazmul</span>. I'm not your
              run-of-the-mill professional, I'm a creative chameleon with a
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
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 py-6">
        <div className="lg:w-1/2 p-4">
          <Slider></Slider>
        </div>
        <div className="lg:w-1/2">
          <div className="flex justify-center py-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase text-orange-200 border-b-4 px-4 border-orange-500 rounded-lg">
              Summary
            </h1>
          </div>
          <p className="text-justify md:text-xl px-2 md:px-4">
            I possess a wide array of creative skills, including proficiency in
            website development, voiceover and dubbing, graphic design, as well
            as photo and video editing. These talents allow me to approach
            projects with a unique and effective perspective, consistently
            delivering exceptional results. Whether it's crafting stunning
            visuals, adding life to voiceovers, or enhancing photos and videos,
            my skills and experience are finely honed for the job, ensuring
            high-quality outcomes every time.
          </p>
          <div className="flex flex-col items-center justify-center py-4">
            <a
              href="https://drive.google.com/file/d/1aihDBamIngdPD7HTmNsYOysAdE4E3ay4/view?usp=sharing"
              className="btn btn-outline font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center my-1 text-xl w-72 text-orange-200 hover:text-none"
            >
              Download RESUME{" "}
              <span>
                <FaDownload />
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1d-tRE1wM4H1c2tmUWF8P09hyJRrz3Xl6/view?usp=sharing"
              className="btn btn-outline font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center my-1 text-xl w-72 text-orange-200 hover:text-none"
            >
              Download CV{" "}
              <span>
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-2">
          <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase px-4 text-orange-200 border-b-4 border-orange-500 rounded-lg">
            My Agency
          </h1>
        </div>
        <div>
          <div className=" glass flex flex-col md:flex-row rounded-lg items-center p-4">
            <img src={acLogo} alt="" className="w-40 lg:w-52 p-4" />
            <div className="">
              <h2 className="text-2xl font-bold font-serif">
                ArtistyCode Studio
              </h2>
              <p className="text-xs">
                ArtistyCode Studio is a versatile digital agency offering
                expertise in website development using technologies such as MERN
                Stack, Next.js, and Wordpress. Our services extend to graphic
                design, including branding and logo design, as well as
                advertisement services like spokesperson and product review
                videos. With a focus on delivering comprehensive digital
                solutions, we empower businesses to thrive online.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to="https://artistycode-studio.web.app"
                  target="_blank"
                  className="card-actions justify-end"
                >
                  <button className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center">
                    Visit now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

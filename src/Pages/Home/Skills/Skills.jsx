// import { useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="py-4 md:py-10">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-orange-200 uppercase px-4 border-orange-500">
          My Skills
        </h1>
      </div>
      <div className="pt-4">
        <Marquee autoFill={true} speed={150} pauseOnHover={true}>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            HTML5
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            CSS3
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            JavaScript
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Tailwind Css
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            React.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            Next.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Node.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            Voice-Over
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            MongoDB
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Adobe PhotoShop
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            Adobe Illustrator
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            Adobe Premiere Pro
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Figma
          </p>
        </Marquee>
        <Marquee direction="right" autoFill={true} pauseOnHover={true}>
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/GFC9nh6/html-5-5968267.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/pJL2CmN/css-3-5968242.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/zGjqMw0/Java-Script-logo.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/5WkztDL/299463877-560030875914611-8025210373789510385-n.jpg"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/hVdyJ3j/Screenshot-from-2024-01-14-08-07-41.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/xCVZh9K/node-js-909x1024.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/vmSY4xT/with-mic-1st.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/5s4DV6C/mongodbinc-logo.jpg"
            alt=""
          />

          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/cb9T9mt/premiere-pro-5968525.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/NCS24GS/illustrator-5968472.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/Xp1gjHL/photoshop-5968520.png"
            alt=""
          />
          <img
            className="w-32 p-2 rounded-lg"
            src="https://i.ibb.co/vYBbJG5/figma-5968705.png"
            alt=""
          />
        </Marquee>
        <Marquee autoFill={true} speed={150} pauseOnHover={true}>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            HTML5
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            CSS3
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            JavaScript
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Tailwind Css
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            React.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            Next.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Node.Js
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            Voice-Over
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            MongoDB
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Adobe PhotoShop
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-black">
            Adobe Illustrator
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-yellow-500">
            Adobe Premiere Pro
          </p>
          <p className="uppercase font-serif text-2xl lg:text-4xl font-bold px-2 text-white">
            Figma
          </p>
        </Marquee>
      </div>
      <Link to="/portfolio" className="flex justify-center">
        <button className="btn btn-outline m-4 border-t-0 border-x-0 border-b-4 neno-button shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-lg uppercase relative overflow-hidden text-center font-extrabold text-orange-200">
          Project Gallery
        </button>
      </Link>
    </div>
  );
};

export default Skills;

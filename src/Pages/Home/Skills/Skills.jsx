import { useRef } from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const layers = container.getElementsByClassName("layer");

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const calculateMovement = (layer, speed) => {
      const x = ((mouseX - window.innerWidth / 2) * speed) / 100;
      const y = ((mouseY - window.innerHeight / 2) * speed) / 100;

      layer.style.transform = `translate(${x}px, ${y}px)`;
    };

    Array.from(layers).forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      calculateMovement(layer, speed);
    });
  };

  const handleMouseLeave = () => {
    const layers = containerRef.current.getElementsByClassName("layer");

    Array.from(layers).forEach((layer) => {
      layer.style.transform = "translate(0, 0)";
    });
  };

    return (
      <div className="py-4">
        <div
          className="relative h-96 overflow-hidden flex justify-center items-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <img
            className="layer absolute top-10 left-0 w-12 md:w-20 cover"
            data-speed="-15"
            src="https://i.ibb.co/GFC9nh6/html-5-5968267.png"
            alt=""
          />
          <img
            className="layer absolute top-28 left-16 md:top-16 lg:top-20 md:left-40 lg:left-72 w-8 md:w-16 cover"
            data-speed="15"
            src="https://i.ibb.co/pJL2CmN/css-3-5968242.png"
            alt=""
          />
          <img
            className="layer absolute top-10 left-100 rounded-lg w-12 md:w-20 cover"
            data-speed="5"
            src="https://i.ibb.co/zGjqMw0/Java-Script-logo.png"
            alt=""
          />
          <img
            className="layer absolute top-28 right-16 md:top-16 lg:top-20 md:right-40 lg:right-72 rounded-lg w-8 md:w-16 cover"
            data-speed="-15"
            src="https://i.ibb.co/5WkztDL/299463877-560030875914611-8025210373789510385-n.jpg"
            alt=""
          />
          <img
            className="layer absolute top-10 right-0 rounded-full w-12 md:w-20 cover"
            data-speed="15"
            src="https://i.ibb.co/hVdyJ3j/Screenshot-from-2024-01-14-08-07-41.png"
            alt=""
          />
          <img
            className="layer absolute top-100 left-0 md:left-16 lg:left-24 w-12 md:w-20 cover"
            data-speed="10"
            src="https://i.ibb.co/xCVZh9K/node-js-909x1024.png"
            alt=""
          />
          <h1 className="layer absolute text-3xl md:text-5xl font-bold leading-normal text-center uppercase py-6 cover">
            My <span className="text-fuchsia-500">Skill's</span>
          </h1>
          <img
            className="layer absolute bottom-10 right-100 w-12 md:w-20 cover"
            data-speed="-5"
            src="https://i.ibb.co/vYBbJG5/figma-5968705.png"
            alt=""
          />
          <img
            className="layer absolute top-100 rounded-full right-0 md:right-16 w-12 md:w-20 cover"
            data-speed="10"
            src="https://i.ibb.co/5s4DV6C/mongodbinc-logo.jpg"
            alt=""
          />

          <img
            className="layer absolute bottom-28 right-16 md:bottom-16 lg:bottom-20 md:right-40 lg:right-72 w-8 md:w-16 cover"
            data-speed="15"
            src="https://i.ibb.co/cb9T9mt/premiere-pro-5968525.png"
            alt=""
          />
          <img
            className="layer absolute bottom-28 left-16 md:bottom-16 lg:bottom-20 md:left-40 lg:left-72 w-8 md:w-16 cover"
            data-speed="-10"
            src="https://i.ibb.co/NCS24GS/illustrator-5968472.png"
            alt=""
          />
          <img
            className="layer absolute bottom-10 left-0 w-12 md:w-20 cover"
            data-speed="15"
            src="https://i.ibb.co/Xp1gjHL/photoshop-5968520.png"
            alt=""
          />
          <img
            className="layer absolute bottom-10 rounded-full right-0 w-12 md:w-20 cover"
            data-speed="-15"
            src="https://i.ibb.co/vmSY4xT/with-mic-1st.png"
            alt=""
          />
        </div>
        <Link to="/portfolio" className="flex justify-center">
          <button className="btn btn-outline m-4 border-t-0 border-x-0 border-b-4 neno-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center font-extrabold text-white">
            My Portfolio
          </button>
        </Link>
      </div>
    );
};

export default Skills;

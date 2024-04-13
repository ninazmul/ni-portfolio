import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../../src/index.css";
import { Link } from "react-router-dom";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col md:flex-row items-center p-4 justify-between">
        <aside className="items-center grid-flow-col">
          <Link>
            <img
              className="w-52"
              src="https://i.ibb.co/353tbns/N-I-Logo-croped.png"
              alt=""
            />
          </Link>
          <div>
            <p className="text-orange-500">
              Developer - <span className="text-orange-200">N.I. Nazmul</span>
            </p>
            <p className="text-orange-500">
              Copyright © - All right reserved by
              <Link
                to="https://artistycode-studio.web.app"
                target="_blank"
                className="text-orange-200"
              >
                {" "}
                ArtistyCode Studio
              </Link>
            </p>
          </div>
        </aside>
        <div className="">
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
      </footer>
    </div>
  );
};

export default Footer;

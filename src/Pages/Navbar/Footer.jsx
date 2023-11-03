import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import "../../../src/index.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col md:flex-row items-center p-4 justify-between">
        <aside className="items-center grid-flow-col">
          <img className="w-52" src="/public/N.I. Logo.png" alt="" />
          <p className="text-fuchsia-500">
            Copyright © 2023 - All right reserved by<span className="text-white"> N.I. Nazmul</span>
          </p>
        </aside>
        <div className="">
          <div className="flex justify-center items-center space-x-2">
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
      </footer>
    </div>
  );
};

export default Footer;

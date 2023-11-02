import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import "../../../src/index.css"


const Header = () => {
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/public/1694098148342-removebg-preview.png"
              className="rounded-full border-2 p-1 border-fuchsia-500 img_glow "
            />
            <div>
              <h1 className="text-5xl font-bold leading-normal">
                Welcome To <span className="text-fuchsia-500">My Website</span>
              </h1>
              <p className="py-6">
                Versatile artist with skills in programming, graphics, and voice
              </p>
              <div className="flex space-x-2">
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
                  href="https://web.whatsapp.com/"
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
                >
                  <IoLogoWhatsapp className="text-[28px]"></IoLogoWhatsapp>
                </a>
                <a
                  href=""
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
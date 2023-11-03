import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import "../../../src/index.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-neutral-content">
        <aside>
          <img className="w-52" src="/public/N.I. Logo.png" alt="" />
          <p>
            N.I. Nazmul (Nazmul Islam)
            <br />
            Versatile artist with skills in programming, graphics, and voice
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social Media</header>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

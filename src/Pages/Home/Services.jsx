import { FaCode } from "react-icons/fa";
import { MdSettingsVoice } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { MdCoPresent } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbBusinessplan } from "react-icons/tb";


const Services = () => {
  return (
    <div className="my-10" data-aos="fade-up">
      <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase py-6">
        All <span className="text-fuchsia-500">Services</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <FaCode />
          </button>
          <div className="">
            <dialog
              id="my_modal_1"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">Services Offered:</span>
                  <br />{" "}
                  <span className="font-bold underline">
                    Static Website $105:
                  </span>{" "}
                  <br /> 1. Clean and modern design. <br /> 2. Responsive layout
                  for all devices. <br /> 3. Fast loading times. <br />
                  <span className="font-bold underline">
                    Dynamic Website $350:
                  </span>{" "}
                  <br /> 1. Interactive and dynamic user interface. <br /> 2.
                  Seamless navigation. <br /> 3. Customized features tailored to
                  your needs. <br />
                  <span className="font-bold underline">
                    E-commerce Website $995:
                  </span>{" "}
                  <br />
                  1. Fully functional online store. <br /> 2. Secure payment
                  gateways.
                  <br /> 3. Inventory management and order tracking.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <MdSettingsVoice />
          </button>
          <div className="">
            <dialog
              id="my_modal_2"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">Services Offered:</span>
                  <br />{" "}
                  <span className="font-bold underline">
                    Voice Over in Bengali, Hindi, and English $1/min:
                  </span>{" "}
                  <br />
                  1. Delivering captivating and expressive voice-overs for a
                  variety of projects, including commercials, documentaries,
                  e-learning modules, animations, and more. <br /> 2.
                  Customizing tone, pace, and style to suit the unique
                  requirements of each project.
                  <br />
                  <span className="font-bold underline">
                    Dubbing Services $2/min:
                  </span>{" "}
                  <br />
                  1. Providing seamless dubbing services to synchronize voices
                  with on-screen characters for films, TV shows, and video
                  content. <br /> 2. Ensuring high-quality lip-syncing and
                  natural flow for an authentic viewing experience. <br />{" "}
                  <span className="font-bold underline">
                    Script Adaptation and Translation $5/500
                    <span className="text-xs">Words</span>:
                  </span>{" "}
                  <br /> 1. Assisting with script adaptation and translation to
                  maintain cultural nuances and linguistic accuracy. <br /> 2.
                  Offering bilingual capabilities to cater to diverse language
                  preferences. <br />
                  <span className="font-bold underline">
                    Quick Turnaround:
                  </span>{" "}
                  <br /> 1. Meeting tight deadlines with a commitment to swift
                  delivery without compromising on quality. <br /> 2. Efficient
                  project management to ensure timely completion. <br />
                  <span className="font-bold underline">
                    Quality Assurance:
                  </span>{" "}
                  <br /> 1. Utilizing professional recording equipment and
                  studios for crystal-clear audio quality. <br /> 2. Regular
                  quality checks and revisions to meet client expectations.{" "}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <SiTaichigraphics />
          </button>
          <div className="">
            <dialog
              id="my_modal_3"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">
                    Services Offered $10:
                  </span>
                  <br />
                  <span className="font-bold underline">Logo Design:</span>{" "}
                  <br />
                  1. Craft a memorable and impactful logo that reflects your
                  brand's essence. <br /> 2. Multiple design concepts to choose
                  from.
                  <br /> 3. Revisions until you're completely satisfied. <br />
                  <span className="font-bold underline">
                    Branding Collateral:
                  </span>{" "}
                  <br />
                  1. Design of business cards, letterheads, and other essential
                  branding materials. <br /> 2. Consistent and cohesive branding
                  across all touchpoints. <br />{" "}
                  <span className="font-bold underline">
                    Print Design:
                  </span>{" "}
                  <br /> 1. Eye-catching posters, brochures, flyers, and
                  promotional materials. <br /> 2. High-resolution, print-ready
                  files for professional results. <br />
                  <span className="font-bold underline">
                    Digital Graphics:
                  </span>{" "}
                  <br /> 1. Social media graphics for a strong online presence.{" "}
                  <br /> 2. Web banners, email signatures, and other digital
                  assets. <br />
                  <span className="font-bold underline">
                    Packaging Design:
                  </span>{" "}
                  <br /> 1. Creative and effective packaging solutions for your
                  products. <br /> 2. Stand out on the shelves with unique and
                  compelling packaging. <br />
                  <span className="font-bold underline">
                    Illustrations:
                  </span>{" "}
                  <br /> 1. Custom illustrations to add a personal touch to your
                  projects. <br /> 2. Digital or hand-drawn illustrations based
                  on your preferences.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <MdCoPresent />
          </button>
          <div className="">
            <dialog
              id="my_modal_4"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">Services Offered:</span>
                  <br />
                  <span className="font-bold underline">
                    Spokesperson Videos $5/min:
                  </span>{" "}
                  <br />
                  Engage your audience with a charismatic presenter delivering
                  your message. <br />
                  <span className="font-bold underline">
                    Green Screen Services $10/min:
                  </span>{" "}
                  <br /> Elevate your visuals with our professional studio and
                  customizable backgrounds. <br />
                  <span className="font-bold underline">
                    Promotional Videos $50/min:
                  </span>{" "}
                  <br />
                  Boost your brand with captivating promotional content
                  integrated seamlessly into your presentations.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <TfiWrite />
          </button>
          <div className="">
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">Services Offered:</span>
                  <br />
                  <span className="font-bold underline">
                    Translation Services: $5/500
                    <span className="text-xs">Words</span>:
                  </span>{" "}
                  <br />
                  My translation service specializes in providing accurate and
                  culturally nuanced translations between Bengali and English. I
                  guarantee translations that resonate effectively with your
                  target audience. <br />
                  <span className="font-bold underline">
                    Subtitle Integration $5/500
                    <span className="text-xs">Words</span>:
                  </span>{" "}
                  <br /> I excel in providing comprehensive subtitle services
                  for your videos. This includes expertly integrating subtitles,
                  ensuring perfect synchronization with the audio, and
                  delivering a visually appealing format. My focus is on
                  delivering a seamless and professional subtitle experience for
                  your content.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_6").showModal()}
            className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl p-8 uppercase relative overflow-hidden text-center text-2xl md:text-8xl"
          >
            <TbBusinessplan />
          </button>
          <div className="">
            <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box glass">
                <h3 className="font-bold text-lg">As-salamu alaykum!</h3>
                <p className="py-4 text-start">
                  <span className="font-bold text-xl">Services Offered:</span>
                  <br />
                  <span className="font-bold underline">
                    Website Creation:
                  </span>{" "}
                  <br />
                  I bring your vision to life with captivating and functional
                  websites. My expertise ensures that your online presence is
                  not just a website but a dynamic platform that engages and
                  converts visitors into customers. <br />
                  <span className="font-bold underline">
                    Logo and Branding Graphics:
                  </span>{" "}
                  <br /> Make a lasting impression with a unique and memorable
                  brand identity. I design logos and branding graphics,
                  including banners, covers, and social media posts, that
                  capture the essence of your business and resonate with your
                  target audience. <br />
                  <span className="font-bold underline">
                    Promotional and Product Review Videos:
                  </span>{" "}
                  <br />
                  Elevate your brand with compelling video content. From
                  engaging promotional videos that tell your brand story to
                  detailed product review videos that build trust, I create
                  content that leaves a lasting impact.
                  <br />
                  <span className="font-bold underline">
                    Website and Business Maintenance:
                  </span>{" "}
                  <br />
                  My commitment doesn’t end with the launch of your website. I
                  provide ongoing maintenance to ensure your online platform is
                  secure, up-to-date, and optimized for performance. Focus on
                  your core operations while I handle the technicalities.
                  <br />
                  <span className="font-bold underline">
                    Business Boost and Promotion:
                  </span>{" "}
                  <br />
                  Amplify your reach and impact with my strategic business
                  boosting and promotion services. From targeted marketing
                  campaigns to social media strategies, I ensure your business
                  gets the attention it deserves.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-2xl uppercase relative overflow-hidden text-center">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

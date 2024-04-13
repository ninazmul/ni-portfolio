import { FaCode } from "react-icons/fa";
import { MdSettingsVoice } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { MdCoPresent } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbBusinessplan } from "react-icons/tb";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Services = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
  };

  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setSlidesToShow(3);
    } else if (windowWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial calculation

    // Update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="py-4 md:py-10">
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-orange-200 uppercase px-4 border-orange-500">
          All Services
        </h1>
      </div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title">Explore our web solutions:</h2>
                <p className="text-xs">
                  Static, Dynamic, or E-commerce websites tailored to your
                  needs. From sleek designs to seamless functionality, we've got
                  you covered.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
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
                    <br /> 1. Clean and modern design. <br /> 2. Responsive
                    layout for all devices. <br /> 3. Fast loading times. <br />
                    <span className="font-bold underline">
                      Dynamic Website $350:
                    </span>{" "}
                    <br /> 1. Interactive and dynamic user interface. <br /> 2.
                    Seamless navigation. <br /> 3. Customized features tailored
                    to your needs. <br />
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
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title">Voice-Over & Dubbing Services:</h2>
                <p className="text-xs">
                  Captivating voice-overs in Bengali, Hindi, and English.
                  Seamless dubbing for films and TV. Script adaptation and
                  translation. Quick turnaround and quality assurance
                  guaranteed.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
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
                    <br /> 1. Assisting with script adaptation and translation
                    to maintain cultural nuances and linguistic accuracy. <br />{" "}
                    2. Offering bilingual capabilities to cater to diverse
                    language preferences. <br />
                    <span className="font-bold underline">
                      Quick Turnaround:
                    </span>{" "}
                    <br /> 1. Meeting tight deadlines with a commitment to swift
                    delivery without compromising on quality. <br /> 2.
                    Efficient project management to ensure timely completion.{" "}
                    <br />
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
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title">Creative Design Solutions:</h2>
                <p className="text-xs">
                  Crafting memorable logos, cohesive branding collateral,
                  eye-catching print and digital designs, creative packaging
                  solutions, and custom illustrations tailored to your brand's
                  identity and vision.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
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
                    <span className="font-bold underline">
                      Logo Design:
                    </span>{" "}
                    <br />
                    1. Craft a memorable and impactful logo that reflects your
                    brand's essence. <br /> 2. Multiple design concepts to
                    choose from.
                    <br /> 3. Revisions until you're completely satisfied.{" "}
                    <br />
                    <span className="font-bold underline">
                      Branding Collateral:
                    </span>{" "}
                    <br />
                    1. Design of business cards, letterheads, and other
                    essential branding materials. <br /> 2. Consistent and
                    cohesive branding across all touchpoints. <br />{" "}
                    <span className="font-bold underline">
                      Print Design:
                    </span>{" "}
                    <br /> 1. Eye-catching posters, brochures, flyers, and
                    promotional materials. <br /> 2. High-resolution,
                    print-ready files for professional results. <br />
                    <span className="font-bold underline">
                      Digital Graphics:
                    </span>{" "}
                    <br /> 1. Social media graphics for a strong online
                    presence. <br /> 2. Web banners, email signatures, and other
                    digital assets. <br />
                    <span className="font-bold underline">
                      Packaging Design:
                    </span>{" "}
                    <br /> 1. Creative and effective packaging solutions for
                    your products. <br /> 2. Stand out on the shelves with
                    unique and compelling packaging. <br />
                    <span className="font-bold underline">
                      Illustrations:
                    </span>{" "}
                    <br /> 1. Custom illustrations to add a personal touch to
                    your projects. <br /> 2. Digital or hand-drawn illustrations
                    based on your preferences.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title"> Dynamic Visual Solutions:</h2>
                <p className="text-xs">
                  Elevate your brand with captivating videos. Whether it's
                  charismatic Spokesperson Videos, customizable Green Screen
                  Services, or engaging Promotional Videos, we deliver dynamic
                  solutions to captivate your audience and boost your message.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
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
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title"> Linguistic Solutions:</h2>
                <p className="text-xs">
                  We specialize in precise Bengali to English translations and
                  seamless subtitle integration for videos. Our services ensure
                  effective communication and engagement with your audience.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
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
                    culturally nuanced translations between Bengali and English.
                    I guarantee translations that resonate effectively with your
                    target audience. <br />
                    <span className="font-bold underline">
                      Subtitle Integration $5/500
                      <span className="text-xs">Words</span>:
                    </span>{" "}
                    <br /> I excel in providing comprehensive subtitle services
                    for your videos. This includes expertly integrating
                    subtitles, ensuring perfect synchronization with the audio,
                    and delivering a visually appealing format. My focus is on
                    delivering a seamless and professional subtitle experience
                    for your content.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="h-full px-2">
            <div className="card glass h-64">
              <div className="card-body">
                <h2 className="card-title">Digital Solutions Suite:</h2>
                <p className="text-xs">
                  Our digital services cover everything you need for online
                  success. From websites to branding, videos, and ongoing
                  support, we've got you covered. Boost your business with our
                  strategic marketing solutions.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center "
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>

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
                    provide ongoing maintenance to ensure your online platform
                    is secure, up-to-date, and optimized for performance. Focus
                    on your core operations while I handle the technicalities.
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
                      <button className="btn btn-outline text-orange-200 neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </Slider>
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className=" hover:text-black p-2 text-2xl glass rounded-lg"
            onClick={goToPrev}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className=" hover:text-black p-2 text-2xl glass rounded-lg"
            onClick={goToNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center"></div>
    </div>
  );
};

export default Services;


import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ReviewsScroll from "../Portfolio/Review/ReviewsScroll";
import { Link } from "react-router-dom";

const AutoScrollReviews = () => {
      const sliderRef = useRef(null);
      const [slidesToShow, setSlidesToShow] = useState(4);

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        swipeToSlide: true,
        focusOnSelect: false,
        slidesToShow: slidesToShow,
      };

      const updateSlidesToShow = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1024) {
          setSlidesToShow(4);
        } else if (windowWidth >= 768) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(2);
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
    <div className="my-10" data-aos="fade-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase py-6">
        Client's <span className="text-fuchsia-500">Reviews</span>
      </h1>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <ReviewsScroll></ReviewsScroll>
          </div>
        </Slider>

        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className="bg-gray-500 text-dark hover:text-white p-2 text-2xl glass hover:bg-black rounded-lg"
            onClick={goToPrev}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className="bg-gray-500 text-dark hover:text-white p-2 text-2xl glass hover:bg-black rounded-lg"
            onClick={goToNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Link to="/dashboard/addReview" className="flex justify-center">
        <button className="btn btn-outline m-4 border-t-0 border-x-0 border-b-4 neno-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center font-extrabold text-white">
          Give Review
        </button>
      </Link>
    </div>
  );
};

export default AutoScrollReviews;

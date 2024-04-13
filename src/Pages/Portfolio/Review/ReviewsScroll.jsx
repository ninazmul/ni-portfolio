import useReviews from "../useReviews";
import ReviewSCart from "./ReviewSCart";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ReviewsScroll = () => {
  const [reviews] = useReviews();

  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
    rtl: true,
  };

  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setSlidesToShow(4);
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
    <div className="pt-4">
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review) => (
            <ReviewSCart key={review.id} review={review} />
          ))}
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
      <Link to="/dashboard/addReview" className="flex justify-center">
        <button className="btn btn-outline m-4 border-t-0 border-x-0 border-b-4 neno-button shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-600 rounded-lg uppercase relative overflow-hidden text-center font-extrabold text-orange-200">
          Give Review
        </button>
      </Link>
    </div>
  );
};

export default ReviewsScroll;

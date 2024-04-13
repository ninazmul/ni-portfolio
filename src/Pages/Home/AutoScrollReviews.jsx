import Marquee from "react-fast-marquee";
import ReviewsScroll from "../Portfolio/Review/ReviewsScroll";
import { Link } from "react-router-dom";

const AutoScrollReviews = () => {
  return (
    <div className="py-4 md:py-10">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-orange-200 uppercase px-4 border-orange-500">
          Client's Reviews
        </h1>
      </div>
      <ReviewsScroll></ReviewsScroll>
    </div>
  );
};

export default AutoScrollReviews;

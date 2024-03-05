
import Marquee from "react-fast-marquee";
import ReviewsScroll from "../Portfolio/Review/ReviewsScroll";
import { Link } from "react-router-dom";

const AutoScrollReviews = () => {

  return (
    <div className="my-10" data-aos="fade-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-normal text-center uppercase py-6">
        Client's <span className="text-fuchsia-500">Reviews</span>
      </h1>
      <Marquee speed={30} className="gap-4">
        {/* Create a gap at the beginning of the Marquee */}
        <div className="ml-2"></div>
        <div>
          <ReviewsScroll></ReviewsScroll>
        </div>
        {/* Create a gap at the end of the Marquee */}
        <div className="mr-2"></div>
      </Marquee>
      <Link to="/dashboard/addReview" className="flex justify-center">
        <button className="btn btn-outline m-4 border-t-0 border-x-0 border-b-4 neno-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center font-extrabold text-white">
          Give Review
        </button>
      </Link>
    </div>
  );
};

export default AutoScrollReviews;

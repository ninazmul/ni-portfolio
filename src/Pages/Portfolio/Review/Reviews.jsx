import ReviewCart from "./ReviewCart";
import useReviews from "../useReviews";


const Reviews = () => {
  const [reviews] = useReviews();


  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <ReviewCart key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

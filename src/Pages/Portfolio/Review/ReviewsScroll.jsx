import useReviews from "../useReviews";
import ReviewSCart from "./ReviewSCart";


const ReviewsScroll = () => {
  const [reviews] = useReviews();

  return (
    <div className="pt-4">
      <div className="flex gap-4">
        {reviews.map((review) => (
          <ReviewSCart key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsScroll;
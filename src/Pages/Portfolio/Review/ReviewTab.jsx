
import ReviewCart from './ReviewCart';

const ReviewTab = ({reviews}) => {
    return (
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <ReviewCart key={review._id} review={review}></ReviewCart>
          ))}
        </div>
      </div>
    );
};

export default ReviewTab;
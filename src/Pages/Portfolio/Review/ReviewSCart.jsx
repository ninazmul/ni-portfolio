import { FaStar } from "react-icons/fa";

const ReviewSCart = ({ review }) => {
  const { image, rating, reviewText } = review;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={
            i <= parseInt(rating) ? "text-yellow-500" : "text-gray-300"
          }
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="card w-72 h-full glass">
        <figure className="h-3/5">
          {image && <img src={image} alt="Review" />}
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">Rating: {renderStars()}</h2>
          </div>
          {reviewText && <p>{reviewText}</p>}
        </div>
      </div>
    </div>
  );
};

export default ReviewSCart;

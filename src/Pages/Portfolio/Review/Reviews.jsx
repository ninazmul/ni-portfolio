
import ReviewCart from "./ReviewCart";
import useReviews from "../useReviews";
import Pagination from "./Pagination";

const itemsPerPage = 30; // Set the number of reviews per page

const Reviews = ({ currentPage, onPageChange }) => {
  const [reviews] = useReviews();

  // Calculate the start and end index of reviews based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedReviews.map((review) => (
          <ReviewCart key={review.id} review={review} />
        ))}
      </div>
      {/* Pagination controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(reviews.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Reviews;

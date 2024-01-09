import Swal from "sweetalert2";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";
import useReviews from "../Pages/Portfolio/useReviews";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

const AllReviews = () => {
  const [reviews, refetch] = useReviews();
  const axiosSecure = useAxiosSecure();

  const handleOnDelete = async (reviewId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/reviews/${reviewId}`);
        if (res.data.deletedCount > 0) {
          await refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } else {
          throw new Error("Failed to delete item");
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the item.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center text-4xl pt-4 text-fuchsia-500 font-extrabold uppercase">
          Manage All review's: {reviews.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Rating</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-20 h-10 rounded-lg"
                      src={review.image}
                      alt=""
                    />
                  </td>
                  <td>{review.rating}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateReview/${review._id}`}
                      className="btn btn-outline btn-sm rounded-full"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleOnDelete(review._id)}>
                      <FaTrashCan className="text-red-600"></FaTrashCan>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default AllReviews;
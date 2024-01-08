import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";

const UpdateReview = () => {
  const reviews = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const from = location.state?.from?.pathname || "/";
  const initialState = {
    image: "",
    rating: "",
    reviewText: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (reviews) {
      setFormData(reviews);
    }
  }, [reviews]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStarClick = (selectedRating) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: selectedRating.toString(),
    }));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={
            i <= parseInt(formData.rating)
              ? "text-yellow-500 cursor-pointer"
              : "text-gray-300 cursor-pointer"
          }
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.rating) {
        setError("Please fill in the required fields.");
        return;
      }

      setError("");

      const response = await axiosSecure.patch(
        `/reviews/${reviews._id}`,
        formData
      );

      console.log(response);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Review updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update review!",
        });
      }
    } catch (error) {
      console.error("Error updating review:", error);
      setError(
        "An error occurred while updating the review. Please try again."
      );
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Update Review in{" "}
            <span className="text-fuchsia-500">N.I. Nazmul</span>'s Portfolio!
          </h1>
          <p className="py-6">
            Update the details below for the review in{" "}
            <span className="text-fuchsia-500">N.I. Nazmul</span>'s portfolio.
          </p>
        </div>
        <div className="card w-4/5 md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* Image input */}
            <div className="form-control">
              <label className="label">
                <span>Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                onChange={handleChange}
                value={formData.image}
              />
            </div>
            {/* Rating input */}
            <div className="form-control">
              <label className="label">
                <span>Rating</span>
              </label>
              <div className="flex reviews-center justify-center">
                <div className="flex space-x-2 text-2xl">{renderStars()}</div>
                <div>
                  {" "}
                  <input
                    type="hidden"
                    name="rating"
                    value={formData.rating}
                    required
                  />
                </div>
              </div>
            </div>
            {/* Review Text input */}
            <div className="form-control">
              <label className="label">
                <span>Review Text</span>
              </label>
              <textarea
                placeholder="Write your review..."
                name="reviewText"
                className="textarea textarea-bordered glass border-fuchsia-800 border-2 input_glow"
                onChange={handleChange}
                value={formData.reviewText}
              />
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button
                className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
              >
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;

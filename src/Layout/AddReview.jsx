import { useState } from "react";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
  const initialState = {
    image: "",
    rating: "",
    reviewText: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure(); // Initialize the hook to get the axios instance

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const response = await axiosSecure.post("/reviews", formData);

      console.log(response);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Review added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the form to its initial state
        e.target.reset();
        setFormData(initialState);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add review!",
        });
      }
    } catch (error) {
      console.error("Error adding review:", error);
      setError("An error occurred while adding the review. Please try again.");
    }
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

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Add Review to <span className="text-orange-500">N.I. Nazmul</span>
            's Portfolio!
          </h1>
          <p className="py-6">
            Fill in the details below to add a new review to{" "}
            <span className="text-orange-500">N.I. Nazmul</span>'s portfolio.
          </p>
        </div>
        <div className="card md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-orange-500 card_glow text-orange-200">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* Image input */}
            <div className="form-control">
              <label className="label">
                <span>Image URL (Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.image}
              />
            </div>
            {/* Rating input */}
            <div className="form-control">
              <label className="label">
                <span>Rating</span>
              </label>
              <div className="flex items-center justify-center">
                <div className="flex space-x-5 text-2xl">{renderStars()}</div>
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
            {/* Review text input */}
            <div className="form-control">
              <label className="label">
                <span>Review Text (Optional)</span>
              </label>
              <textarea
                placeholder="Write your review here..."
                name="reviewText"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.reviewText}
              />
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button
                className="neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

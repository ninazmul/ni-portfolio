import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";

const UpdateItem = () => {
  const items = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const from = location.state?.from?.pathname || "/";
  const initialState = {
    category: "",
    projectName: "",
    createdDate: "",
    videoURL: "",
    imgURL: "",
    audioURL: "",
    niche: "",
    liveLink: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (items) {
      setFormData(items);
    }
  }, [items]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.category || !formData.projectName || !formData.niche) {
        setError("Please fill in all required fields.");
        return;
      }

      setError("");

      const response = await axiosSecure.patch(`/items/${items._id}`, formData);

      console.log(response);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Product updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update product!",
        });
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setError(
        "An error occurred while updating the product. Please try again."
      );
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Update Product to{" "}
            <span className="text-orange-500">N.I. Nazmul</span>
            's Portfolio!
          </h1>
          <p className="py-6 text-center">
            Fill in the details below to update a existing product to{" "}
            <span className="text-orange-500">N.I. Nazmul</span>'s portfolio.
          </p>
        </div>
        <div className="card md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-orange-500 card_glow text-orange-200">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span>Niche</span>
              </label>
              <select
                name="niche"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.niche}
                defaultValue={items["niche"]}
                required
              >
                <option className="text-orange-500" value="" disabled>
                  Select niche
                </option>
                <option className="text-orange-500" value="Voice">
                  Voice
                </option>
                <option className="text-orange-500" value="Graphics">
                  Graphics
                </option>
                <option className="text-orange-500" value="Programming">
                  Programming
                </option>
              </select>
            </div>
            {/* Category select input */}
            <div className="form-control">
              <label className="label">
                <span>Category</span>
              </label>
              <select
                name="category"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.category}
                defaultValue={items["category"]}
                required
              >
                <option className="text-orange-500" value="" disabled>
                  Select category
                </option>
                <option className="text-orange-500" value="video">
                  Video
                </option>
                <option className="text-orange-500" value="image">
                  Image
                </option>
                <option className="text-orange-500" value="audio">
                  Audio
                </option>
              </select>
            </div>

            {/* URL input based on category */}
            {["imgURL", "videoURL", "audioURL"].map((urlField) => (
              <div
                key={urlField}
                className={`form-control ${
                  formData.category === "image" && urlField === "imgURL"
                    ? ""
                    : formData.category === "video" && urlField === "videoURL"
                    ? ""
                    : formData.category === "audio" && urlField === "audioURL"
                    ? ""
                    : "hidden"
                }`}
              >
                <label className="label">
                  <span>
                    {urlField === "imgURL"
                      ? "Image URL"
                      : urlField === "videoURL"
                      ? "Video URL"
                      : "Audio URL"}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder={
                    urlField === "imgURL"
                      ? "Image URL"
                      : urlField === "videoURL"
                      ? "Video URL"
                      : "Audio URL"
                  }
                  name={urlField}
                  className={`input input-bordered glass border-orange-700 border-2 input_glow`}
                  onChange={handleChange}
                  defaultValue={items[urlField]}
                />
              </div>
            ))}
            {/* LiveLink input */}
            <div className="form-control">
              <label className="label">
                <span>Live Link</span>
              </label>
              <input
                type="text"
                placeholder="Live Link"
                name="liveLink"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.liveLink}
                defaultValue={items.liveLink}
              />
            </div>

            {/* Dynamic input fields based on category */}
            {["projectName", "createdDate"].map((field) => (
              <div key={field} className="form-control">
                <label className="label">
                  <span>
                    {field === "createdDate"
                      ? "Created Date"
                      : `${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  </span>
                </label>
                {field === "createdDate" ? (
                  <input
                    type="date"
                    name={field}
                    className="input input-bordered glass border-orange-700 border-2 input_glow"
                    onChange={handleChange}
                    defaultValue={items[field]}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={`Product ${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    }`}
                    name={field}
                    className="input input-bordered glass border-orange-700 border-2 input_glow"
                    onChange={handleChange}
                    defaultValue={items[field]}
                    required
                  />
                )}
              </div>
            ))}

            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button
                className="neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;

// ImageUpload.js
import { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const ImageUpload = ({ uploadedImages, setUploadedImages }) => {
  const [picLoading, setPicLoading] = useState(false);

  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const handlePictureUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    try {
      setPicLoading(true);
      const response = await axios.post(image_hosting_url, formData);
      if (response.data.data.display_url) {
        setUploadedImages([...uploadedImages, response.data.data.display_url]);
        setPicLoading(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setPicLoading(false);
    }
  };

  const handleRemove = (index) => {
    const updatedImages = [
      ...uploadedImages.slice(0, index),
      ...uploadedImages.slice(index + 1),
    ];
    setUploadedImages(updatedImages);
  };

  return (
    <div className="">
      <div className="mb-5">
        {uploadedImages.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="max-h-56 max-w-56 relative group">
                <img
                  src={imageUrl}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-red flex items-center justify-center text-orange-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-300"
                >
                  <IoClose size="20" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {!picLoading ? (
        <div
          onClick={() => document.getElementById("picture").click()}
          className={`border-dashed border-2 border-lightGray h-44 flex items-center justify-center`}
        >
          <input
            id="picture"
            name="picture"
            type="file"
            accept="image/*"
            onChange={handlePictureUpload}
            className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
          />
          <button
            type="button"
            className="flex items-center gap-3 flex-wrap justify-center bg-lightGray text-orange-200 px-4 py-2"
          >
            <FaCloudUploadAlt size="30" />
            Click to select photo
          </button>
        </div>
      ) : (
        <div
          className={`border-dashed border-2 border-lightGray bg-darkwheat h-44 flex items-center justify-center`}
        >
          <CgSpinner size="60" className="animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

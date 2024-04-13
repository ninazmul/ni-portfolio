import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const ItemCart = ({ item }) => {
  const { imgURL, videoURL, audioURL, projectName, createdDate, liveLink } =
    item;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="card w-full h-full max-w-md glass">
        <figure className="h-3/5">
          {imgURL && (
            <img
              src={imgURL}
              alt="Project"
              className="w-full h-full object-cover"
            />
          )}
          {videoURL && <ReactPlayer controls url={videoURL} width="100%" />}
          {audioURL && <ReactPlayer controls url={audioURL} width="100%" />}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>Created at {createdDate}</p>
          {liveLink && (
            <Link to={liveLink} className="card-actions justify-end">
              <button className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-orange-700/50 border-2 text-orange-200 hover:bg-orange-500 border-orange-700 rounded-lg uppercase relative overflow-hidden text-center">
                Visit now!
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

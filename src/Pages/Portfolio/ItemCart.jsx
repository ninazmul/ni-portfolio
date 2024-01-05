import { Link } from "react-router-dom";

const ItemCart = ({ item }) => {
  const { imgURL, videoURL, audioURL, projectName, createdDate, liveLink } =
    item;

  return (
    <div>
      <div className="card w-full h-full glass">
        <figure>
          {imgURL && <img src={imgURL} alt="Project" />}
          {videoURL && <video src={videoURL} controls alt="Project Video" />}
          {audioURL && <audio src={audioURL} controls alt="Project Audio" />}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>Created at {createdDate}</p>
          {liveLink && (
            <Link to={liveLink} className="card-actions justify-end">
              <button className="neno-button btn btn-outline font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg uppercase relative overflow-hidden text-center">
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

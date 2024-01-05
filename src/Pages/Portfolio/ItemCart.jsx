const ItemCart = ({ item }) => {
  const { imgURL, videoURL, audioURL, projectName, createdDate } = item;

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          {imgURL && <img src={imgURL} alt="Project" />}
          {videoURL && <video src={videoURL} controls alt="Project Video" />}
          {audioURL && <audio src={audioURL} controls alt="Project Audio" />}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>Created at {createdDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
      <Carousel>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/N7km2Yq/web-gig-2-img1.png"
          />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/6g4rVsV/voice-2-1.png"
          />
          <p className="legend">Voice Over</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/Hncxtbv/graphics-gig-1.png"
          />
          <p className="legend">Graphic design</p>
        </div>
        <div>
          <img className="rounded-lg" src="https://i.ibb.co/3765CfX/WEB.png" />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/HNqPWxw/audio-gig-1.png"
          />
          <p className="legend">Voice Over</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/8dQ4mGS/Untitled-design-1.png"
          />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/JjKtc80/subtitle-1.png"
          />
          <p className="legend">Subtitle</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/WnFc8dG/translation-1.png"
          />
          <p className="legend">Translation</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/ZHgyd1d/product-1.png"
          />
          <p className="legend">Product Listing</p>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/LZ6J3ph/Business-Web-Banner-03.png"
          />
          <p className="legend">Presentation</p>
        </div>
      </Carousel>
    );
};

export default Slider;

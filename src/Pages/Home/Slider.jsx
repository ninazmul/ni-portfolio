import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
      <div data-aos="fade-right">
        <Carousel>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/RbS8Bgc/web-gig-2-img1.png"
            />
            <p className="legend">Web Development</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/PQBgFPv/voice-2-1.png"
            />
            <p className="legend">Voice Over</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/KD9zwkJ/graphics-gig-1.png"
            />
            <p className="legend">Graphic design</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/HnwxL2C/WEB.png"
            />
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
              src="https://i.ibb.co/1Z28fNb/Untitled-design-1.png"
            />
            <p className="legend">Web Development</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/KDzGS2q/subtitle-1.png"
            />
            <p className="legend">Subtitle</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/X3TVdtG/translation-1.png"
            />
            <p className="legend">Translation</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/xH7HCbd/product-1.png"
            />
            <p className="legend">Product Listing</p>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://i.ibb.co/KNQB4GG/Business-Web-Banner-03.png"
            />
            <p className="legend">Presentation</p>
          </div>
        </Carousel>
      </div>
    );
};

export default Slider;

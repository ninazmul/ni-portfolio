import ContactUs from "../Contact/ContactUs";
import AutoScrollReviews from "./AutoScrollReviews";
import Header from "./Header";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AutoScrollReviews></AutoScrollReviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
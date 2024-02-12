import ContactUs from "../Contact/ContactUs";
import Header from "./Header";
import Services from "./Services";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
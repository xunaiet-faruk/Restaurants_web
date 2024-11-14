import About from "./AboutUs/About";
import Banner from "./Banner/Banner";
import Book from "./Book/Book";
import Popular from "./PopularItem/Popular";
import Testominal from "./Testominal/Testominal";

const HomePage = () => {
    return (
        <div className="">
            <Banner/>
            <About/>
            <Popular/>
            <Book/>
            <Testominal/>
        </div>
    );
};

export default HomePage;
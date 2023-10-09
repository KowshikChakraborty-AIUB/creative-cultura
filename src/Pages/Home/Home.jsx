import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import FollowUs from "../../components/FollowUs/FollowUs";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;
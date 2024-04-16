import Banner from "./Banner/Banner";
import Estates from "./Estates/Estates";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>

            <Helmet><title>Resido | Home</title></Helmet>

            <Banner></Banner>

            <Estates></Estates>
        </div>
    );
};

export default Home;
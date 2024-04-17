import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";
import 'animate.css';

const Estates = () => {

    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('https://saidul24.github.io/estate-json-data/data.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])

    // console.log(estates);
    return (
        <div className="animate__animated animate__zoomInDown">
            <h3 className="text-center text-3xl md:text-4xl font-medium  md:font-semibold">Explore Good Places</h3>
            <p className=" text-center md:w-3/4 w-4/5 mx-auto mt-5 ">Discover charming neighborhoods, vibrant communities, and serene landscapes with Explore Good Places. Find your perfect home or vacation retreat in diverse destinations worldwide. Start your adventure today!</p>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                {
                    estates.map(estate => <Estate
                    key={estate.id}
                    estate={estate}
                    ></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;
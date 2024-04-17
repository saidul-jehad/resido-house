import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div>
            <Helmet><title>Resido | Error</title></Helmet>

            <h3 className='text-center mt-40'>Opps..........</h3>

            <Link to='/'> <p className="btn btn-primary text-center">Go to home</p> </Link>
        </div>
    );
};

export default Error;
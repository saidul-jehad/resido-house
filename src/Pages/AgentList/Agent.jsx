
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import PropTypes from 'prop-types';
import 'animate.css';

const Agent = ({ agent }) => {
    const { image_url, phone, email, location, property_quantity, id, name } = agent;

    return (
        <div className={`card card-compact bg-base-100 shadow-xl border animate__animated mt-16 ${id % 2 === 0 ? 'animate__lightSpeedInRight' : 'animate__lightSpeedInLeft'}`}>
            <figure className="p-6"><img className="rounded-xl" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">

                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p>{property_quantity}</p>
                    </div>
                    <a className="text-xl bg-red-200 text-red-600 p-2 rounded-full" href={`mailto:${email}`}>
                        <GoMail></GoMail>
                    </a>
                </div>
                <p className="mt-3"><span className="text-xl font-semibold">Call :</span> {phone}</p>

                <div className="flex items-center gap-3 border-t pt-3 mt-3">
                    <MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn>
                    <p>{location}</p>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    );
};

Agent.propTypes = {
    agent: PropTypes.object
}

export default Agent;
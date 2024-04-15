import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";

const Estate = ({ estate }) => {
    const { id, estate_title, segment_name, description, price, status, area, facilities, location } = estate
    return (
        <div className="card border bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title gap-6 flex justify-between">

                    <div className=''>
                        <p className='text-orange-300'>{status}</p>
                        <p className='font-semibold'>{estate_title}</p>
                    </div>
                    <p className='text-3xl font-semibold text-blue-400'>
                        {price}
                    </p>
                </h2>
                <p className='card-title'>Facilities -</p>
                <div className="card-actions">

                    {
                        facilities.map((facilitie, idx) => <div key={idx} className="badge badge-outline">{facilitie}</div>)
                    }
                </div>

                <div className='border-t mt-4'>
                    <p className='flex items-center gap-3 pt-2'><SlLocationPin></SlLocationPin>{location}</p>

                </div>

                <div className='justify-end flex  mt-2'>
                    <button className=' btn px-5 btn-info '>View</button>
                </div>
            </div>
            {/* <div className="badge badge-secondary">NEW</div> */}
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object
}

export default Estate;
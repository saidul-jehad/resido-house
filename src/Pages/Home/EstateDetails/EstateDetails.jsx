import { useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import {Helmet} from "react-helmet";

const EstateDetails = () => {
    const estates = useLoaderData()
    const { id } = useParams()
    const pId = parseInt(id)
    // console.log(estates);
    const estate = estates.find(estate => estate.id === pId)
    const { estate_title, segment_name, description, price, status, area, facilities, location, image } = estate
    // console.log(estate);


    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="bg-base-200 flex-1 flex justify-center items-center rounded-xl">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                </div>

                <Helmet><title>Resido | Estate Details</title></Helmet>





                <div className="flex-1">
                    <div className="card  bg-base-200">
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
                                    facilities.map((facilitie, idx) => <div key={idx} className="badge badge-outline bg-green-600 text-white">{facilitie}</div>)
                                }
                            </div>
                            <p><span className="text-lg ">Area:</span>  {area}</p>
                            <div className='border-t mt-4 flex justify-between items-center'>
                                <p className='flex items-center gap-3 pt-2'><SlLocationPin></SlLocationPin>{location}</p>


                            </div>
                        </div>
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </div>

                    <div className="card-body bg-base-200 mt-2 rounded-2xl">
                        <h3 className="text-xl font-medium">{segment_name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default EstateDetails;
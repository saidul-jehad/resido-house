import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css';

const UpdateProfile = () => {

    const { updateUserProfile, user, setLoading } = useContext(AuthContext)
    console.log(user);

    const handleSaveAndChange = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoURL.value;
        const email = e.target.email.value;

        // update profile
        updateUserProfile(name, photoUrl, email)
            .then(result => {
                setLoading(false)
                // console.log(result);
                toast.success('Profile Updated')
            })

    }

    return (
        <div className='min-h-screen mt-28'>
            <Helmet><title>Resido | Update Profile</title></Helmet>

            <div className="flex md:flex-row gap-14 flex-col-reverse">
                <div className="flex-1 animate__animated animate__lightSpeedInRight border p-6 rounded-xl">
                    <h3 className="text-center font-semibold text-2xl">Update Profile</h3>
                    <form className="card-body" onSubmit={handleSaveAndChange}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save And Change</button>
                        </div>

                    </form>

                </div>
                <div className="flex-1 px-8 space-y-6 animate__animated animate__lightSpeedInLeft border p-6 rounded-xl">

                    <h3 className="text-center font-semibold text-2xl">Current Profile</h3>

                    <div>
                        <img className="h-14 w-14 rounded-full mx-auto" src={user.photoURL} alt="" />
                    </div>

                    <h3><span className="text-xl font-medium">Name :</span> </h3>
                    <p>{user.displayName}</p>


                    <p><span className="text-xl font-medium">Email :</span> </p>
                    <p>{user.email ? user.email : <span>Email Not found</span>}</p>

                </div>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default UpdateProfile;
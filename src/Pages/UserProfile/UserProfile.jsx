import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import 'animate.css';
const UserProfile = () => {

    const { user } = useContext(AuthContext)
    const { email, photoURL, displayName } = user
    return (
        <div className="w-full  mt-10">
            <div className="md:w-[250px] p-5 mx-auto border text-center">
                <div className="h-[200px] w-[200px] mx-auto">
                    <img className="h-[200px ]  w-[200px]" src={photoURL} alt="No photo Found " />

                </div>
                <h3 className="text-xl mb-2 animate__animated animate__lightSpeedInLeft">{displayName}</h3>
                <p className="animate__animated animate__lightSpeedInRight">{email}</p>
            </div>
        </div>
    );
};

export default UserProfile;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>


    const handleLogOut = () => {
        logOut()
            .then(result => {
                // logOut("You have successfully logged in")
                // toast.success("You have successfully logged in")
                console.log(result.user);
            })
            .catch(error => {
                // setLoginError('Email and Password dose not match')
                // toast.error('Email and Password dose not match')
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Resido House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="flex  items-center gap-3 md:gap-6 ">
                        <p className="text-xl font-medium md:font-semibold hidden md:flex">{user.displayName}</p>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="h-14 w-14 rounded-full" src={user.photoURL} alt="" /> <div onClick={handleLogOut}><Link to='/login' className="btn btn-info">LogOut</Link></div> </div> :
                        <Link to='/login' className="btn btn-info">Login</Link>
                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Navbar;
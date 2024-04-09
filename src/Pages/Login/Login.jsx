import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    // console.log(name); 

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        // login User
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col md:w-1/2">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">

                    <form className="card-body" onSubmit={handleLogin}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>

                    <p className="text-center">
                        <small>
                            Resido House New? Please <Link to='/register' className="btn btn-link">Register</Link>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
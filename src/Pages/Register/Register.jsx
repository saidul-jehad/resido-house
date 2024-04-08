import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(name, photoUrl, email, password);
    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col md:w-1/2">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">

                    <form className="card-body" onSubmit={handleRegister}>

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
                            <button className="btn btn-primary">Register</button>
                        </div>

                    </form>

                    <p className="text-center">
                        <small>
                            Already Have Account? Please <Link to='/login' className="btn btn-link">Login</Link>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
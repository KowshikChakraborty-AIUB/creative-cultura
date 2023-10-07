import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create An Account</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body bg-base-200">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#090813] text-white hover:bg-[#090813] normal-case">Create</button>
                        </div>
                        <p>
                            Already have an account?
                            <Link to={'/login'} className="text-[#090813] font-bold ml-2">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
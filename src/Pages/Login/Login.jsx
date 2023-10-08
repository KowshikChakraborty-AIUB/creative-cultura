import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [loginError, setLoginError] = useState(null)

    const { logIn, googleLogIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');

        logIn(email, password)
            .then(userCredentials => {
                toast.success('Logged in successfully!')
                console.log(userCredentials.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setLoginError(error.message);
            })

    }

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(userCredentials => {
            toast.success('Logged in successfully!')
            console.log(userCredentials.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body bg-base-200">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {
                                loginError && <p className="text-sm text-red-600 font-bold">**{loginError}**</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#090813] text-white hover:bg-[#090813] normal-case">Login</button>

                        </div>
                        <p>
                            Don&apos;t have an account?
                            <Link to={'/registration'} className="text-[#090813] font-bold ml-2">
                                Create an account
                            </Link>
                        </p>
                        <span className="border border-t-1 border-black"></span>
                    </form>
                    <div className="bg-base-200 text-center">
                        <p className="text-center text-[#090813] font-bold">Login with</p>
                        <button onClick={handleGoogleLogIn} className="btn w-4/5 text-white bg-[#090813] hover:text-white hover:bg-[#090813] normal-case mt-4">Google</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const [registrationError, setRegistrationError] = useState(null)

    const {createUser} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegistrationError('');

        if(password.length < 6){
            setRegistrationError('Password should have at least 6 characters.')
            return;
        }
        if(!/[A-Z]/.test(password)){
            setRegistrationError('Password should have at least one uppercase letter.')
            return;
        }
        if(!/[!@#$%^&*()_+[\]{};':"\\|,.<>?~]/.test(password)){
            setRegistrationError('Password should have at least one special character.')
            return;
        }

        createUser(email, password)
        .then(userCredentials => {
            toast.success('Account created successfully!')
            console.log(userCredentials.user);
            e.target.reset();
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            setRegistrationError(error.message);
        })
        
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create An Account</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body bg-base-200">
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
                                registrationError && <p className="text-sm text-red-600 font-bold">**{registrationError}**</p>
                            }
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;
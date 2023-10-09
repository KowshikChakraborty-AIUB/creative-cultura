import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks =

        <>

            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#090813] text-white rounded hover:bg-[#090813] hover:text-white' : ''}><li><a>Home</a></li></NavLink>
            {
                user ?
                    ''
                    :
                    <NavLink to={'/registration'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#090813] text-white rounded hover:bg-[#090813] hover:text-white' : ''}><li><a>Registration</a></li></NavLink>
            }
            <NavLink to={'/mentorship_program'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#090813] text-white rounded hover:bg-[#090813] hover:text-white' : ''}>
                <li><a>Mentorship Program</a></li>
            </NavLink>
            <NavLink to={'/photo_gallery'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#090813] text-white rounded hover:bg-[#090813] hover:text-white' : ''}>
                <li><a>Photo Gallery</a></li>
            </NavLink>

        </>

    const handleLogOut = () => {
        logOut()
            .then(userCredentials => {
                toast.success('Logged Out Successfully!')
                console.log(userCredentials.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src="https://i.ibb.co/DYCn8nR/cultural-logo.jpg" className="h-12 rounded-full" alt="" />
                <a className="normal-case text-xl ml-2">Community & Culture</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link to={'/login'} onClick={handleLogOut} className="btn bg-black text-white hover:bg-black hover:text-white normal-case">Logout</Link>
                        :
                        <Link to={'/login'} className="btn bg-black text-white hover:bg-black hover:text-white normal-case">Login</Link>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default NavBar;
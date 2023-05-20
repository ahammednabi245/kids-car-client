import React, { useContext } from 'react';
import logo from '../../../assets/kids car logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { UserCircleIcon} from '@heroicons/react/24/solid'

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    const navItems = <>


        {user?.email ? <>
            <li><Link to="/">Home</Link> </li>
            <li> <Link to="/all toys">All Toys</Link> </li>
            <li><Link to="/add a toy">Add A Toy</Link></li>
            <li><Link to="/my toys">My Toys</Link></li>
            <li> <Link to="/blog">Blog</Link> </li>

        </>
            : <>
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/all toys">All Toys</Link> </li>
                <li> <Link to="/blog">Blog</Link> </li>
            </>
        }
    </>



    return (
        <div>
            <div className="navbar bg-base-100 px-10  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className=''>
                        <img className='h-28 ' src={logo}
                            alt="" />
                    </div>
                </div>

                {/* responsive */}

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {user ? (
                        user.photoURL ? (
                            <img
                                className='rounded-full mr-4'
                                style={{ height: '55px' }}
                                src={user.photoURL}
                                alt={user.displayName}
                                title={user.displayName}
                            />
                        ) : (
                            <UserCircleIcon className='h-16 w-16 text-black' title={user.displayName} />
                        )
                    ) : null}

                    {user ?
                        <button onClick={handleLogOut} className="btn bg-[#66ccff] border-none text-black
                        hover:bg-[#3ddbff]">Logout</button> :
                        <Link to="/login">
                            <button className="btn bg-[#66ccff] border-none text-white
                     hover:bg-[#3ddbff]">Login</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
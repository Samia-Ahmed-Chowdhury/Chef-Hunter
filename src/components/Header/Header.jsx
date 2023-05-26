import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '/logo.png'
import { AuthContext } from '../../provider/AuthProvider'

function Header() {
    const { userName, photoUrl, logOut } = useContext(AuthContext)
    const location = useLocation();
    const locatedPath = location.pathname
    // console.log(location.pathname)

    return (
        <div className="navbar bg-base-100 justify-between lg:px-12  mt-2">
            <div className="navbar-start w-auto ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold text-lg'><NavLink to='/'>Home</NavLink></li>
                        <li className='font-semibold text-lg'><NavLink to='blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className='object-fill' src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-lg'><NavLink to='/'>Home</NavLink></li>
                    <li className='font-semibold text-lg'><NavLink to='blog'>Blog</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end w-auto gap-2">
                {
                    userName &&
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full">
                            <img title={userName} src={photoUrl} />
                        </div>
                    </label>
                }
                {/* {
                    userName ?
                        <Link onClick={logOut} className="btn bg-primaryColor border-0 py-0 px-2 md:px-3 hover:bg-[#f87603]">LogOut</Link>
                        : <Link to='/login' className="btn bg-primaryColor border-0 py-0 px-2 md:px-3 hover:bg-[#f87603]">Login</Link>

                } */}

                {
                    userName ?
                        <Link onClick={logOut} className="btn bg-primaryColor border-0 py-0 px-2 md:px-3 hover:bg-[#f87603]">LogOut</Link>
                        : locatedPath === '/login' ?
                            <Link to='/register' className="btn bg-primaryColor border-0 py-0 px-2 md:px-3 hover:bg-[#f87603]">SingUp</Link>
                            : <Link to='/login' className="btn bg-primaryColor border-0 py-0 px-2 md:px-3 hover:bg-[#f87603]">Login</Link>


                }
            </div>
        </div>
    )
}

export default Header
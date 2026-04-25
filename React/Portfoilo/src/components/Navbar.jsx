import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="bg-[#070707] fixed w-full z-20 top-0 p-2 start-0 border-b border-white/50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <h1 className="text-3xl text-white tracking-[0.3rem] font-bold uppercase">
                            Sahil
                        </h1>
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-default">
                        <ul className="flex flex-col p-2 mt-1 font-medium md:space-x-8 md:flex-row md:mt-0 text-lg text-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                >About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                >Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                >Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                >Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0"
                                >Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="pt-24 min-h-screen">
                <Outlet />
            </main>
        </>
    );
};

export default Navbar;
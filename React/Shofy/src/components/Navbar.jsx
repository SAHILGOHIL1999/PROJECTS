import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        {/* Wrap logo in NavLink to easily go back Home */}
                        <NavLink to="/">
                            <img src="/assets/images/logo/logo.svg" alt="Shofy" className="h-10" />
                        </NavLink>
                    </div>

                    {/* Menu - Updated with NavLink */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/coupons"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Coupons
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `hover:text-[#7a1533] ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"}`}
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for Products..."
                                className="w-full bg-gray-100 rounded-full py-3 px-5 text-sm focus:outline-none"
                            />
                            <i className="fas fa-search absolute right-4 top-3.5 text-gray-500"></i>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-6 text-xl">
                        <i className="fas fa-exchange-alt cursor-pointer hover:text-[#7a1533]"></i>
                        <div className="relative cursor-pointer">
                            <i className="far fa-heart"></i>
                            <span className="absolute -top-1 -right-1 bg-[#7a1533] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">4</span>
                        </div>
                        <div className="relative cursor-pointer">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="absolute -top-1 -right-1 bg-[#7a1533] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">13</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
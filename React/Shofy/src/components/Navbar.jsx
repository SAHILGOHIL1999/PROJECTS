import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/"
import home_1 from "../assets/images/menu/menu-home-1.jpg";
import home_2 from "../assets/images/menu/menu-home-2.jpg";
import home_3 from "../assets/images/menu/menu-home-3.jpg";
import home_4 from "../assets/images/menu/menu-home-4.jpg";
import home_5 from "../assets/images/menu/menu-home-5.jpg";

const HOME_DROPDOWN_ITEMS = [
    { id: 1, title: "Electronics", img: home_1 },
    { id: 2, title: "Fashion", img: home_2 },
    { id: 3, title: "Beauty", img: home_3 },
    { id: 4, title: "Jewelry", img: home_4 },
    { id: 5, title: "Grocery", img: home_5 }
];

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                    <div className="flex items-center">
                        <NavLink to="/">
                            <img src="/assets/images/logo/logo.svg" alt="Shofy" className="h-10" />
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <div className="relative group flex items-center py-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-[#7a1533] flex items-center gap-1 transition-colors ${isActive ? "text-[#7a1533] font-bold" : "text-gray-600"
                                    }`
                                }
                            >
                                Home
                                <i className="fas fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
                            </NavLink>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white border border-gray-100 shadow-xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-2">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {HOME_DROPDOWN_ITEMS.map((item) => (
                                        <NavLink
                                            key={item.id}
                                            to={item.path}
                                            className="group/item flex flex-col items-center text-center p-2 rounded-xl hover:bg-gray-50 transition"
                                        >
                                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-100 shadow-sm transition group-hover/item:border-[#7a1533]">
                                                <img
                                                    src={item.img}
                                                    alt={`${item.title} Thumbnail`}
                                                    className="w-full h-full object-cover transition duration-500 group-hover/item:scale-105"
                                                    onError={(e) => {
                                                        e.target.src = "https://placehold.co/400x300?text=" + item.title;
                                                    }}
                                                />
                                            </div>
                                            <span className="mt-3 block text-sm font-medium text-gray-700 transition group-hover/item:text-[#7a1533]">
                                                {item.title}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

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
};

export default Navbar;
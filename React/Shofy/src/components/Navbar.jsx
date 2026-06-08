// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import home_1 from "../assets/images/menu/menu-home-1.jpg";
import home_2 from "../assets/images/menu/menu-home-2.jpg";
import home_3 from "../assets/images/menu/menu-home-3.jpg";
import home_4 from "../assets/images/menu/menu-home-4.jpg";
import home_5 from "../assets/images/menu/menu-home-5.jpg";

// Mock Data for Home Dropdown
const HOME_DROPDOWN_ITEMS = [
    { id: 1, title: "Electronics", img: home_1, path: "/home/electronics" },
    { id: 2, title: "Fashion", img: home_2, path: "/home/fashion" },
    { id: 3, title: "Beauty", img: home_3, path: "/home/beauty" },
    { id: 4, title: "Jewelry", img: home_4, path: "/home/jewelry" },
    { id: 5, title: "Grocery", img: home_5, path: "/home/grocery" }
];

// Mock Data for Shop Dropdown Links
const SHOP_PAGES = [
    { title: "Grid Category", path: "/shop/grid-category" },
    { title: "Grid Layout", path: "/shop/grid-layout" },
    { title: "List Layout", path: "/shop/list-layout" },
    { title: "Masonary Layout", path: "/shop/masonary-layout" },
    { title: "Full width Layout", path: "/shop/full-width" },
    { title: "1600px Layout", path: "/shop/1600px-layout" },
    { title: "Left Sidebar", path: "/shop/left-sidebar" },
    { title: "Right Sidebar", path: "/shop/right-sidebar" },
    { title: "Hidden Sidebar", path: "/shop/hidden-sidebar" },
];

const FEATURES = [
    { title: "Filter Dropdown", path: "/shop/filter-dropdown" },
    { title: "Filters Offcanvas", path: "/shop/filters-offcanvas" },
    { title: "Filters Sidebar", path: "/shop/filters-sidebar" },
    { title: "Load More button", path: "/shop/load-more" },
    { title: "Infinit scrolling", path: "/shop/infinite-scrolling" },
    { title: "Collections list", path: "/shop/collections-list" },
    { title: "Hidden search", path: "/shop/hidden-search" },
    { title: "Search Full screen", path: "/shop/search-fullscreen" },
];

const HOVER_STYLES = [
    { title: "Hover Style 1", path: "/shop/hover-1" },
    { title: "Hover Style 2", path: "/shop/hover-2" },
    { title: "Hover Style 3", path: "/shop/hover-3" },
    { title: "Hover Style 4", path: "/shop/hover-4" },
];

const Navbar = () => {
    const navLinkClasses = ({ isActive }) =>
        `hover:text-[#7a1533] transition-colors py-2 flex items-center gap-1 ${isActive ? "text-[#7a1533] font-bold" : "text-gray-800"
        }`;

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-4">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/">
                        <img src={logo} alt="Shofy Logo" className="h-9 w-auto" />
                    </NavLink>
                </div>

                {/* 2. Middle Section: Navigation Links & Mega Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium tracking-wide">

                    {/* Home Link with Mega Menu Panel Wrapper */}
                    <div className="relative group flex items-center h-full cursor-pointer">
                        <NavLink to="/" className={navLinkClasses}>
                            Home
                            <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
                        </NavLink>

                        {/* Home Mega Menu Overlay Dropdown Container */}
                        <div className="absolute top-full left-0 w-[82vw] max-w-[1150px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                                {HOME_DROPDOWN_ITEMS.map((item) => (
                                    <NavLink
                                        key={item.id}
                                        to={item.path}
                                        className="group/item flex flex-col items-center text-center p-1 rounded-xl transition"
                                    >
                                        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 group-hover/item:border-[#7a1533] group-hover/item:shadow-md">
                                            <img
                                                src={item.img}
                                                alt={`${item.title} Preview`}
                                                className="w-full h-full object-cover transition duration-500 group-hover/item:scale-105"
                                                onError={(e) => {
                                                    e.target.src = `https://placehold.co/400x300?text=${item.title}`;
                                                }}
                                            />
                                        </div>
                                        <span className="mt-3 block text-sm font-medium text-gray-600 transition duration-200 group-hover/item:text-[#7a1533]">
                                            {item.title}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Shop Link with Mega Menu Panel Wrapper */}
                    <div className="relative group flex items-center h-full cursor-pointer">
                        <NavLink to="/shop" className={navLinkClasses}>
                            Shop
                            <i className="fas fa-chevron-down text-[9px] text-gray-400 group-hover:text-[#7a1533] transition-transform duration-300 group-hover:rotate-180"></i>
                        </NavLink>

                        {/* Shop Mega Menu Dropdown Container */}
                        <div className="absolute top-full left-0 w-[85vw] max-w-[1150px] bg-white border border-gray-100 shadow-xl rounded-2xl p-8 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 mt-1">
                            <div className="grid grid-cols-5 gap-6">

                                {/* Left Links Grid Sections (Takes 3 of 5 columns) */}
                                <div className="col-span-3 grid grid-cols-3 gap-6 text-left">
                                    {/* Shop Pages Column */}
                                    <div>
                                        <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Shop Pages</h4>
                                        <ul className="space-y-2.5">
                                            {SHOP_PAGES.map((link, idx) => (
                                                <li key={idx}>
                                                    <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">
                                                        {link.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Features Column */}
                                    <div>
                                        <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Features</h4>
                                        <ul className="space-y-2.5">
                                            {FEATURES.map((link, idx) => (
                                                <li key={idx}>
                                                    <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">
                                                        {link.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Hover Style Column */}
                                    <div>
                                        <h4 className="text-gray-900 font-bold text-sm tracking-wider mb-4 pb-1 border-b border-gray-50">Hover Style</h4>
                                        <ul className="space-y-2.5">
                                            {HOVER_STYLES.map((link, idx) => (
                                                <li key={idx}>
                                                    <NavLink to={link.path} className="text-gray-500 hover:text-[#7a1533] text-sm font-normal block transition-colors">
                                                        {link.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Banner Sections (Takes 2 of 5 columns) */}
                                <div className="col-span-2 grid grid-cols-2 gap-4">
                                    {/* Phones Banner Block */}
                                    <div className="relative group/banner rounded-xl overflow-hidden bg-[#f4f6f9] aspect-[4/5] flex flex-col justify-between items-center p-4">
                                        <div className="w-full h-full flex items-center justify-center p-2 mix-blend-multiply">
                                            <img
                                                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80"
                                                alt="Phones promo"
                                                className="max-h-[170px] w-auto object-contain transition duration-500 group-hover/banner:scale-105"
                                            />
                                        </div>
                                        <NavLink to="/shop/phones" className="absolute bottom-4 bg-[#7a1533] text-white text-xs font-semibold px-5 py-2 rounded shadow-md hover:bg-[#5e0f26] transition-colors z-10">
                                            Phones
                                        </NavLink>
                                    </div>

                                    {/* Cameras Banner Block */}
                                    <div className="relative group/banner rounded-xl overflow-hidden bg-[#f4f6f9] aspect-[4/5] flex flex-col justify-between items-center p-4">
                                        <div className="w-full h-full flex items-center justify-center p-2 mix-blend-multiply">
                                            <img
                                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                                                alt="Cameras promo"
                                                className="max-h-[170px] w-auto object-contain transition duration-500 group-hover/banner:scale-105"
                                            />
                                        </div>
                                        <NavLink to="/shop/cameras" className="absolute bottom-4 bg-[#7a1533] text-white text-xs font-semibold px-5 py-2 rounded shadow-md hover:bg-[#5e0f26] transition-colors z-10">
                                            Cameras
                                        </NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
                    <NavLink to="/coupons" className={navLinkClasses}>Coupons</NavLink>
                    <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
                    <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
                </div>

                {/* Search Bar Input */}
                <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for Products..."
                            className="w-full bg-[#f3f5f6] text-gray-700 rounded-full py-2.5 pl-5 pr-12 text-[14px] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none transition-all placeholder-gray-400"
                        />
                        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#7a1533] transition-colors">
                            <i className="fas fa-search text-[14px]"></i>
                        </button>
                    </div>
                </div>

                {/* Right Section: Action Utilities Icons */}
                <div className="flex items-center gap-5 text-gray-700 text-lg">
                    <button className="hover:text-[#7a1533] p-1.5 transition-colors relative" aria-label="Compare products">
                        <i className="fas fa-exchange-alt text-[17px]"></i>
                    </button>

                    {/* Heart Icon button */}
                    <button className="hover:text-[#7a1533] p-1.5 transition-colors relative" aria-label="Wishlist items">
                        <i className="far fa-heart text-[18px]"></i>
                        <span className="absolute top-0 right-0 bg-[#7a1533] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                            4
                        </span>
                    </button>

                    {/* Bag Cart Shopping Basket Button Icon */}
                    <button className="hover:text-[#7a1533] p-1.5 transition-colors relative" aria-label="Shopping Cart bags">
                        <i className="fas fa-shopping-bag text-[17px]"></i>
                        <span className="absolute top-0 right-0 bg-[#7a1533] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                            13
                        </span>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
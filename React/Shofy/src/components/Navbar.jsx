import { useState } from "react";
import { NavLink } from "react-router-dom"; // Imported NavLink

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Coupons", path: "/coupons" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src="/logo.svg" alt="Shofy" className="h-10" />
          </NavLink>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink
                to={item.path}
                // Dynamically applies active color if the route matches
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-[#7a1533] transition-colors ${
                    isActive ? "text-[#7a1533] font-bold" : "text-gray-700"
                  }`
                }
              >
                {item.name}
                {i < 3 && (
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {activeMenu === item.name && (
                <div className="absolute top-full left-0 bg-white shadow-xl mt-2 py-2 w-48 z-50 rounded">
                  <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Sub Item 1</p>
                  <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Sub Item 2</p>
                  <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Sub Item 3</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products..."
              className="bg-gray-100 pl-4 pr-10 py-3 w-72 rounded focus:outline-none focus:ring-1 focus:ring-[#7a1533]"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-4 top-3.5 text-gray-500"></i>
          </div>

          <div className="flex gap-5 text-xl">
            <i className="fa-solid fa-arrow-right-arrow-left cursor-pointer hover:text-[#7a1533]"></i>
            <div className="relative cursor-pointer hover:text-[#7a1533]">
              <i className="fa-regular fa-heart"></i>
              <span className="absolute -top-1 -right-1 bg-[#7a1533] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </div>
            <div className="relative cursor-pointer hover:text-[#7a1533]">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="absolute -top-1 -right-1 bg-[#7a1533] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                13
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
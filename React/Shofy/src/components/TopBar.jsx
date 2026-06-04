const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-3 px-12 flex justify-between items-center text-sm text-gray-600">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1 hover:text-[#7a1533] cursor-pointer">
          <i className="fa-brands fa-facebook-f"></i> 7500k Followers
        </span>
        <span className="flex items-center gap-1">
          <i className="fa-solid fa-phone"></i> +(402) 763 282 46
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Language */}
        <div className="relative group">
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#7a1533]">
            English <i className="fa-solid fa-chevron-down text-xs"></i>
          </span>
          <div className="absolute hidden group-hover:block bg-white shadow-xl mt-2 py-2 w-32 z-50 rounded">
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Spanish</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Russian</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">
              Portuguese
            </p>
          </div>
        </div>

        {/* Currency */}
        <div className="relative group">
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#7a1533]">
            USD <i className="fa-solid fa-chevron-down text-xs"></i>
          </span>
          <div className="absolute hidden group-hover:block bg-white shadow-xl mt-2 py-2 w-32 z-50 rounded">
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">USD</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">INR</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">EUR</p>
          </div>
        </div>

        {/* Settings */}
        <div className="relative group">
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#7a1533]">
            Setting <i className="fa-solid fa-chevron-down text-xs"></i>
          </span>
          <div className="absolute hidden group-hover:block bg-white shadow-xl mt-2 py-2 w-32 z-50 rounded">
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Profile</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Login</p>
            <p className="px-4 py-1 hover:bg-gray-50 cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

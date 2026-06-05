import React from 'react';

function TopBar() {
  return (
    <>
    <div className="bg-white border-b border-gray-100 py-3 px-6 text-sm text-gray-600 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1 hover:text-[#7a1533] cursor-pointer transition-colors duration-200">
          <i className="fab fa-facebook-f"></i> 7500k Followers
        </span>
        <span className="flex items-center gap-1">
          <i className="fas fa-phone"></i> +(402) 763 282 46
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors">
            English <i className="fas fa-chevron-down text-[10px]"></i>
          </span>
        </div>
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors">
            USD <i className="fas fa-chevron-down text-[10px]"></i>
          </span>
        </div>
        
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors">
            Setting <i className="fas fa-chevron-down text-[10px]"></i>
          </span>
        </div>

      </div>
    </div>
    </>
  );
}
export default TopBar;
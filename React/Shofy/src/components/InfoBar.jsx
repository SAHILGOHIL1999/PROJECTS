import React from 'react';

// 1. Data Structure for the Cards
const bannerData = [
  {
    id: 1,
    title: "T-Shirt Tunic\nTops Blouse",
    bgColor: "bg-[#F3F1F6]", // Soft lavender-grey
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600", // Replace with your stacked clothing image
    imageAlt: "Stacked tops and blouses"
  },
  {
    id: 2,
    title: "Satchel Tote\nCrossbody Bags",
    bgColor: "bg-[#F0F2F7]", // Soft cool-grey
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600", // Replace with your green tote bag image
    imageAlt: "Green leather tote bag"
  },
  {
    id: 3,
    title: "Men's Tennis\nWalking Shoes",
    bgColor: "bg-[#F9F7F4]", // Soft cream-beige
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600", // Replace with your blue/yellow shoes image
    imageAlt: "Blue and yellow tennis shoes"
  }
];

// 2. Individual Card Component
const BannerCard = ({ title, bgColor, imageUrl, imageAlt }) => {
  return (
    <div className={`relative flex flex-col md:flex-row justify-between items-center p-8 rounded-sm ${bgColor} min-h-[220px] overflow-hidden w-full transition-shadow duration-300 hover:shadow-md`}>
      
      {/* Text Content Block */}
      <div className="flex flex-col justify-between h-full z-10 space-y-6 md:space-y-0 text-left w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-gray-900 leading-tight whitespace-pre-line">
          {title}
        </h2>
        
        <div>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-black text-sm bg-white hover:bg-black hover:text-white transition-colors duration-200 group">
            Shop Now 
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>

      {/* Image Block */}
      <div className="w-full md:w-1/2 flex justify-end items-center mt-4 md:mt-0">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="max-h-[160px] object-contain object-right mix-blend-multiply"
        />
      </div>
    </div>
  );
};

// 3. Main Container Component
const PromotionBanners = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {bannerData.map((banner) => (
          <BannerCard 
            key={banner.id}
            title={banner.title}
            bgColor={banner.bgColor}
            imageUrl={banner.imageUrl}
            imageAlt={banner.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default PromotionBanners;
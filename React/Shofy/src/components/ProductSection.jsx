import React, { useState } from 'react';
import product_1 from '../assets/images/prodcut-1.jpg';
import product_2 from '../assets/images/prodcut-2.jpg';
import product_3 from '../assets/images/prodcut-3.jpg';
import product_4 from '../assets/images/prodcut-4.jpg'; 
import product_5 from '../assets/images/prodcut-5.jpg';
import product_6 from '../assets/images/prodcut-6.jpg';
import product_7 from '../assets/images/prodcut-7.jpg';
import product_8 from '../assets/images/prodcut-8.jpg';

// Banner Images
import banner_1 from '../assets/images/banner-1.jpg'; 
import banner_2 from '../assets/images/banner-2.jpg';
import banner_3 from '../assets/images/banner-3.jpg';

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Whitetails Women's Open Sky",
        category: "Clothing",
        store: "Whitetails Store",
        price: 340.00,
        oldPrice: 475.00,
        rating: 5,
        img: product_1
    },
    {
        id: 2,
        name: "Simple Modern School Boys",
        category: "Bags",
        store: "Backpack, Wonder",
        price: 102.00,
        oldPrice: 119.00,
        rating: 5,
        img: product_2
    },
    {
        id: 3,
        name: "Women's Essentials Convertible",
        category: "Shoes",
        store: "Shoe, Men's",
        price: 45.00,
        oldPrice: null,
        rating: 5,
        img: product_3
    },
    {
        id: 4,
        name: "Calvin Klein Gabrianna Novelty",
        category: "Bags",
        store: "Bag, Wonder",
        price: 245.00,
        oldPrice: 120.00,
        rating: 5,
        img: product_4
    },
    {
        id: 5,
        name: "Tommy Hilfiger Women’s Jaden",
        category: "Bags",
        store: "Bag, Wonder",
        price: 40.00,
        rating: 5,
        img: product_5
    },
    {
        id: 6,
        name: "Govicta Men's Shoes Leather",
        category: "Shoes",
        store: "Shoes",
        price: 75.00,
        oldPrice: 79.00,
        rating: 5,
        img: product_6
    },
    {
        id: 7,
        name: "Legendary Whitetails Men's.",
        category: "Clothing",
        store: "Mens, Whitetails Store",
        price: 38.00,
        rating: 5,
        img: product_7
    },
    {
        id: 8,
        name: "Backpack, School Bag.",
        category: "Bags",
        store: "Bag Store",
        price: 105.00,
        rating: 5,
        img: product_8
    },
];

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState('All Collection');

    const filteredProducts = activeTab === 'All Collection'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
            
            {/* ================= 1. PROMO BANNER GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 select-none">
                {/* Banner 1 */}
                <div className="bg-[#F3EEF2] p-8 flex justify-between items-center h-[220px] overflow-hidden group">
                    <div className="flex flex-col items-start max-w-[55%] z-10">
                        <h3 className="text-2xl font-medium text-[#4A1525] leading-tight mb-6">T-Shirt Tunic Tops Blouse</h3>
                        <button className="px-5 py-2 border border-black text-xs font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                            Shop Now →
                        </button>
                    </div>
                    <img src={banner_1} alt="" className="w-[40%] max-h-[90%] object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Banner 2 */}
                <div className="bg-[#ECEFF4] p-8 flex justify-between items-center h-[220px] overflow-hidden group">
                    <div className="flex flex-col items-start max-w-[55%] z-10">
                        <h3 className="text-2xl font-medium text-[#0F1E29] leading-tight mb-6">Satchel Tote Crossbody Bags</h3>
                        <button className="px-5 py-2 border border-black text-xs font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                            Shop Now →
                        </button>
                    </div>
                    <img src={banner_2} alt="" className="w-[40%] max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Banner 3 */}
                <div className="bg-[#F7F5F2] p-8 flex justify-between items-center h-[220px] overflow-hidden group md:col-span-2 lg:col-span-1">
                    <div className="flex flex-col items-start max-w-[55%] z-10">
                        <h3 className="text-2xl font-medium text-[#0F1E29] leading-tight mb-6">Men's Tennis Walking Shoes</h3>
                        <button className="px-5 py-2 border border-black text-xs font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                            Shop Now →
                        </button>
                    </div>
                    <img src={banner_3} alt="" className="w-[40%] max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            {/* ================= 2. HEADER & FILTERS ================= */}
            <div className="text-center mb-6">
                <p className="text-[#8b2252] font-medium tracking-wider text-sm uppercase">All Product Shop</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 text-[#0F1E29] tracking-tight">Customer Favorite Style Product</h2>
            </div>

            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-12 border-b border-gray-100 pb-4 text-xs sm:text-sm font-medium select-none">
                {['All Collection', 'Shoes', 'Clothing', 'Bags'].map((tab, idx, arr) => (
                    <React.Fragment key={tab}>
                        <button 
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-2 transition-colors duration-300 ${activeTab === tab ? 'text-[#8b2252] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#8b2252] text-white text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#8b2252]">
                                    {tab === 'All Collection' ? PRODUCTS_DATA.length : PRODUCTS_DATA.filter(p => p.category === tab).length}
                                </span>
                             )}
                        </button>
                        {idx < arr.length - 1 && <span className="text-gray-300">•</span>}
                    </React.Fragment>
                ))}
            </div>

            {/* ================= 3. PRODUCT GRID ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group cursor-pointer flex flex-col justify-between">
                        
                        {/* Image Box + Vertical Hover Menu with Tooltips */}
                        <div className="relative bg-[#F5F6F8] rounded-none overflow-hidden aspect-square flex justify-center items-center p-8">
                            <img src={product.img} alt={product.name} className="max-h-[90%] max-w-[90%] object-contain" />

                            {/* --- SIDE ACTIONS MENUS WITH LIVE HOVER TOOLTIPS (Matches image_0fd03b.jpg) --- */}
                            <div className="absolute top-6 left-4 flex flex-col gap-2 select-none z-20">
                                {[
                                    { icon: "fas fa-shopping-bag", label: "Add to Cart" },
                                    { icon: "far fa-eye", label: "Quick View" },
                                    { icon: "far fa-heart", label: "Wishlist" },
                                    { icon: "fas fa-exchange-alt", label: "Compare" }
                                ].map((btn, i) => (
                                    <div key={i} className="flex items-center relative group/btn">
                                        
                                        {/* Circular Button */}
                                        <button
                                            className="bg-white text-gray-700 hover:text-white w-9 h-9 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-[#0F1E29] transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
                                            style={{ transitionDelay: `${i * 40}ms` }}
                                            aria-label={btn.label}
                                        >
                                            <i className={`${btn.icon} text-xs`}></i>
                                        </button>

                                        {/* --- POPUP TOOLTIP TEXT (Matches image_0fd03b.jpg) --- */}
                                        <span className="absolute left-11 scale-95 opacity-0 pointer-events-none transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:scale-100 bg-[#0F1E29] text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-md whitespace-nowrap after:content-[''] after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-r-[#0F1E29]">
                                            {btn.label}
                                        </span>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Text Details Section */}
                        <div className="mt-4 flex flex-col items-start">
                            <p className="text-[11px] font-normal text-gray-400 uppercase tracking-wider">{product.store}</p>
                            <h3 className="font-medium text-gray-900 mt-1 text-base line-clamp-2 min-h-[2.5rem] group-hover:text-[#8b2252] transition-colors duration-300">
                                {product.name}
                            </h3>

                            {/* Ratings (Stars) */}
                            <div className="flex items-center gap-0.5 mt-1 text-[#FFB400] text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="fas fa-star"></span>
                                ))}
                            </div>

                            {/* Price Details */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-lg font-bold text-[#0F1E29]">${product.price.toFixed(2)}</span>
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Footer Shop Button */}
            <div className="text-center mt-16">
                <button className="bg-black text-white px-12 py-3.5 rounded-full font-medium hover:bg-[#8b2252] transition-colors duration-300 text-base shadow-sm">
                    Shop All Products
                </button>
            </div>

        </div>
    );
};

export default ProductSection;
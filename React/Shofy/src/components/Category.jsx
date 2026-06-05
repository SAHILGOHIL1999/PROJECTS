import { useState, useEffect } from 'react';

const Category = () => {
    const categories = [
        { img: "/assets/images/category/category-1.jpg", name: "Bags" },
        { img: "/assets/images/category/category-2.jpg", name: "Fashion" },
        { img: "/assets/images/category/category-3.jpg", name: "Shoes" },
        { img: "/assets/images/category/category-4.jpg", name: "Handbags" },
        { img: "/assets/images/category/category-5.jpg", name: "Kids" },
    ];

    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (direction) => {
        const container = document.getElementById('categoryList');
        const scrollAmount = 300;
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-[#8b2252] font-medium tracking-widest">SHOP BY CATEGORY</p>
                    <h2 className="text-5xl title-font mt-3">Popular on the Shofy store.</h2>
                </div>

                <div className="relative">
                    <div id="categoryList" className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
                        {categories.map((cat, i) => (
                            <div key={i} className="min-w-[280px] flex-shrink-0">
                                <div className="bg-[#eef0f3] rounded-2xl overflow-hidden h-[320px] flex items-center justify-center group">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:bg-[#7a1533]">
                        ←
                    </button>
                    <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:bg-[#7a1533]">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Category;
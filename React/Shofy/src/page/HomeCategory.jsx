import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CATEGORY_DETAILS = {
    electronics: {
        title: "Electronics Collection",
        desc: "Explore the latest tech, gadgets, and smart devices.",
        bgClass: "bg-blue-50",
        textMuted: "text-blue-600"
    },
    fashion: {
        title: "Fashion & Apparel",
        desc: "Discover trending clothing, footwear, and style essentials.",
        bgClass: "bg-amber-50",
        textMuted: "text-amber-600"
    },
    beauty: {
        title: "Beauty & Cosmetics",
        desc: "Premium skincare, makeup, and self-care products.",
        bgClass: "bg-pink-50",
        textMuted: "text-pink-600"
    },
    jewelry: {
        title: "Luxury Jewelry",
        desc: "Elegant rings, necklaces, and timeless accessories.",
        bgClass: "bg-yellow-50",
        textMuted: "text-yellow-600"
    },
    grocery: {
        title: "Online Grocery Store",
        desc: "Fresh organic food, daily essentials, and snacks.",
        bgClass: "bg-green-50",
        textMuted: "text-green-600"
    }
};

function HomeCategory() {
    const { categoryName } = useParams();

    const currentCategory = CATEGORY_DETAILS[categoryName?.toLowerCase()] || CATEGORY_DETAILS.electronics;

    return (
        <div className="min-h-screen bg-white">
            <div className={`${currentCategory.bgClass} py-16 transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto px-6">
                    <p className={`text-sm uppercase tracking-widest font-semibold ${currentCategory.textMuted}`}>
                        Shop By Category
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        {currentCategory.title}
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-xl text-lg">
                        {currentCategory.desc}
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex justify-between items-center border-b pb-4 mb-8">
                    <p className="text-gray-500">Showing 1–12 of 36 results</p>
                    <select className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-none">
                        <option>Default Sorting</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Latest Arrivals</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className="group border border-gray-100 rounded-2xl p-4 hover:shadow-md transition">
                            <div className="bg-gray-100 rounded-xl aspect-square w-full mb-4 flex items-center justify-center text-gray-400">
                                Product Image {item}
                            </div>
                            <h3 className="font-medium text-gray-800 group-hover:text-[#7a1533] transition">
                                Premium {currentCategory.title} Item
                            </h3>
                            <p className="text-[#7a1533] font-bold mt-1">$149.00</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-[#7a1533] transition">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default HomeCategory;
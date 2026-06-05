import React from 'react';

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Whitetails Women's Open Sky",
        category: "Whitetails Store",
        price: 340,
        oldPrice: 475,
        img: "/assets/images/product/2/product-1.jpg" // Fixed typo: prodcut -> product
    },
    {
        id: 2,
        name: "Simple Modern School Boys",
        category: "Backpack, Wonder",
        price: 102,
        oldPrice: 119,
        img: "/assets/images/product/2/product-2.jpg"
    },
    {
        id: 3,
        name: "Women's Essentials Convertible",
        category: "Shoe, Men's",
        price: 36,
        oldPrice: 72,
        img: "/assets/images/product/2/product-3.jpg"
    },
    {
        id: 4,
        name: "Calvin Klein Gabrianna Novelty",
        category: "Bag, Wonder",
        price: 44,
        oldPrice: 66,
        img: "/assets/images/product/2/product-12.jpg"
    },
];

const ProductSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <p className="text-[#8b2252] font-medium tracking-wider text-sm uppercase">All Product Shop</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">Customer Favorite Style Product</h2>
            </div>

            {/* Product Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS_DATA.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        {/* Image Container with Hover Effects */}
                        <div className="relative bg-[#eef0f3] rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* Action Buttons (Fades/Slides up on card hover) */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                                <button
                                    className="bg-white text-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#7a1533] transition"
                                    aria-label="Add to cart"
                                >
                                    <i className="fas fa-shopping-bag text-sm"></i>
                                </button>
                                <button
                                    className="bg-white text-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#7a1533] transition"
                                    aria-label="Add to wishlist"
                                >
                                    <i className="far fa-heart text-sm"></i>
                                </button>
                            </div>
                        </div>

                        {/* Product Meta Details */}
                        <div className="mt-4">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{product.category}</p>
                            <h3 className="font-medium text-gray-800 mt-1 line-clamp-2 min-h-[3rem] group-hover:text-[#7a1533] transition">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Footer Button */}
            <div className="text-center mt-12">
                <button className="bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-[#7a1533] transition-colors duration-300 text-lg shadow-sm">
                    Shop All Products
                </button>
            </div>
        </div>
    );
}
export default ProductSection;
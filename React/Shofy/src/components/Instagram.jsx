import React from 'react';

// Static array for Instagram post details. 
// Moving data constants outside the component avoids unnecessary re-allocations on every render cycle.
const INSTA_POSTS = [
    { id: 1, img: "/assets/images/instagram/insta-1.jpg" },
    { id: 2, img: "/assets/images/instagram/insta-2.jpg" },
    { id: 3, img: "/assets/images/instagram/insta-3.jpg" },
    { id: 4, img: "/assets/images/instagram/insta-4.jpg" }
];

function InstagramStrip() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {INSTA_POSTS.map((post) => (
                        <div
                            key={post.id}
                            className="relative group overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <img
                                src={post.img}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <i className="fab fa-instagram text-4xl text-white transform scale-75 group-hover:scale-100 transition-transform duration-300"></i>
                            </div>
                        </div>
                    ))}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 border-2 border-gray-100 rounded-2xl flex flex-col items-center justify-center p-6 bg-white shadow-sm text-center">
                        <img
                            src="/assets/images/instagram/insta-icon.png"
                            alt="Instagram"
                            className="w-16 h-16 object-contain"
                        />

                        <p className="mt-3 text-sm font-medium text-gray-500 tracking-wider uppercase">Follow Us on</p>
                        <p className="text-2xl font-bold text-gray-900 mt-0.5">Instagram</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default InstagramStrip;
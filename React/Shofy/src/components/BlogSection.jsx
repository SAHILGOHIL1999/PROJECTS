import React from 'react';

const BLOGS_DATA = [
    { img: "/assets/images/blog/blog-1.jpg", date: "14 July, 2023", title: "The 'Boomerang' Employees Returning After Quitting" },
    { img: "/assets/images/blog/blog-2.jpg", date: "28 May, 2023", title: "Fast fashion: How clothes are linked to climate change" },
    { img: "/assets/images/blog/blog-3.jpg", date: "01 April, 2023", title: "The Sound Of Fashion: Malcolm McLaren Words" },
];

function BlogSection() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="text-center mb-12">
                <p className="text-[#8b1a2e] tracking-widest text-sm font-medium">OUR BLOG & NEWS</p>
                <h2 className="text-4xl font-bold mt-3 text-gray-900">Latest News & Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOGS_DATA.map((blog, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-white px-4 py-1.5 text-xs font-medium rounded shadow-sm">
                                {blog.date}
                            </div>
                        </div>
                        <h3 className="mt-6 text-xl leading-snug font-medium text-gray-800 group-hover:text-[#7a1533] transition-colors duration-300 line-clamp-2">
                            {blog.title}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="border-2 border-black px-10 py-4 rounded font-medium hover:bg-black hover:text-white transition duration-300">
                    Discover More
                </button>
            </div>
        </div>
    );
}

export default BlogSection;
import React from 'react'

const BannerSection = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#f3f0ff] rounded-2xl p-10 flex flex-col justify-between h-96 relative overflow-hidden group">
                        <div>
                            <h3 className="text-3xl font-medium">T-Shirt Tunic <br /> Tops Blouse</h3>
                            <button className="mt-6 border border-black px-8 py-3 rounded hover:bg-black hover:text-white transition">Shop Now</button>
                        </div>
                        <img src="/assets/images/banner/banner-1.jpg" alt="" className="absolute bottom-0 right-0 h-4/5 group-hover:scale-105 transition" />
                    </div>

                    {/* Repeat for other two banners */}
                    {/* Banner 2 & 3 similarly */}
                </div>
            </div>
        </>
    )
}

export default BannerSection

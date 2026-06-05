import React, { useState, useEffect } from 'react';

const REVIEWS = [
    {
        id: 1,
        text: "How you use the city or town name is up to you. All results may be freely used in any work.",
        author: "Theodore Handle",
        role: "CO Founder",
        img: "/assets/images/user/user-2.jpg",
        stars: 5
    },
    {
        id: 2,
        text: "The delivery was exceptionally fast, and the packaging kept the items perfectly safe. Will absolutely buy again!",
        author: "Sarah Jenkins",
        role: "Verified Buyer",
        img: "/assets/images/user/user-3.jpg",
        stars: 5
    },
    {
        id: 3,
        text: "Unbelievable quality for the price. The customer support team went above and beyond to help me size my apparel correctly.",
        author: "Michael Chang",
        role: "Creative Director",
        img: "/assets/images/user/user-4.jpg",
        stars: 5
    }
];

function ReviewSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const currentReview = REVIEWS[activeIndex];

    return (
        <div className="bg-[#eef0f3] py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center px-6">
                <p className="text-[#8b2252] font-medium tracking-widest text-sm">THE REVIEWS ARE IN</p>

                <div className="flex justify-center gap-1 text-4xl text-[#8b1a2e] my-6 select-none">
                    {"★".repeat(currentReview.stars)}
                </div>

                <p key={currentReview.id} className="text-2xl md:text-3xl leading-relaxed font-light text-gray-800 italic animate-fade-in">
                    "{currentReview.text}"
                </p>

                <div className="flex items-center justify-center gap-4 mt-10">
                    <img
                        src={currentReview.img}
                        alt={currentReview.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-gray-900">{currentReview.author}</p>
                        <p className="text-sm text-gray-500">{currentReview.role}</p>
                    </div>
                </div>

                {/* Slider Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {REVIEWS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-[#8b2252]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;
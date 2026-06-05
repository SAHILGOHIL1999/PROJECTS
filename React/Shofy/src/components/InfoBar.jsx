import React from 'react';

const FEATURES_DATA = [
    { id: 1, icon: "🚚", title: "Free Delivery", desc: "Orders from all item" },
    { id: 2, icon: "🔄", title: "Return & Refund", desc: "Money back guarantee" },
    { id: 3, icon: "💎", title: "Member Discount", desc: "On every order over $140" },
    { id: 4, icon: "🛟", title: "Support 24/7", desc: "Contact us 24 hours a day" }
];

function InfoBar() {
    return (
        <div className="max-w-7xl mx-auto border border-gray-100 rounded-2xl p-8 md:p-10 my-16 shadow-sm bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
                {FEATURES_DATA.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center text-center p-4 first:pt-0 sm:first:pt-4 lg:first:pl-0"
                    >
                        {/* Icon Wrapper with a clean bounce-on-hover effect */}
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition duration-300 select-none">
                            {item.icon}
                        </div>

                        {/* Feature Text Info */}
                        <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
                        <p className="text-sm text-gray-400 mt-1 max-w-[200px]">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoBar;
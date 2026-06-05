import React from 'react';

const ACCOUNT_LINKS = ["Track Orders", "Shipping", "Wishlist", "My Account"];
const INFO_LINKS = ["Our Story", "Careers", "Privacy Policy", "Terms & Conditions"];

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
        <footer className="bg-white border-t pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <img src="/assets/images/logo/logo.svg" alt="Shofy" className="h-10" />
                    <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                        We are a team of designers and developers that create high quality WordPress themes.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-6">My Account</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        {ACCOUNT_LINKS.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="hover:text-[#7a1533] transition-colors duration-200"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-6">Information</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        {INFO_LINKS.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="hover:text-[#7a1533] transition-colors duration-200"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-6">Talk To Us</h4>
                    <p className="text-sm text-gray-500">Got Questions? Call us</p>
                    <a
                        href="tel:+67041390762"
                        className="text-2xl font-bold text-gray-900 mt-2 block hover:text-[#7a1533] transition-colors"
                    >
                        +670 413 90 762
                    </a>
                    <p className="mt-6 text-sm text-gray-600">
                        <a href="mailto:shofy@support.com" className="hover:text-[#7a1533] transition-colors">
                            shofy@support.com
                        </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        79 Sleepy Hollow St. Jamaica, New York 1432
                    </p>
                </div>
            </div>

            {/* Copyright info */}
            <div className="max-w-7xl mx-auto px-6 border-t mt-16 pt-8 text-center text-sm text-gray-500">
                © {currentYear} All Rights Reserved | HTML Template by Themepure.
            </div>
        </footer>
        </>
    );
}
export default Footer;
import React from 'react';
import './Footer.css';

// Import local logo asset or fallback image
import logo_bag from '../assets/images/logo.svg'; 
import footer_pay from '../assets/images/footer-payment.png';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                
                {/* Upper Column Links Block */}
                <div className="footer-grid">
                    
                    {/* Widget Column 1: Brand Info */}
                    <div className="footer-widget">
                        <div className="footer-logo-area">
                            <img src={logo_bag} alt="Shofy Logo" className="footer-logo-img" />
                            <h2 className="footer-brand-name">Shofy.</h2>
                        </div>
                        <p className="footer-desc">
                            We are a team of designers and developers that create high quality WordPress
                        </p>
                        <div className="footer-socials">
                            <a href="#facebook" className="social-box" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#twitter" className="social-box" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#linkedin" className="social-box" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#vimeo" className="social-box" aria-label="Vimeo">
                                <i className="fab fa-vimeo-v"></i>
                            </a>
                        </div>
                    </div>

                    {/* Widget Column 2: Account Navigation Links */}
                    <div className="footer-widget">
                        <h3 className="footer-title">My Account</h3>
                        <ul className="footer-links-list">
                            <li><a href="#track" className="footer-link">Track Orders</a></li>
                            <li><a href="#shipping" className="footer-link">Shipping</a></li>
                            <li><a href="#wishlist" className="footer-link">Wishlist</a></li>
                            <li><a href="#account" className="footer-link">My Account</a></li>
                            <li><a href="#history" className="footer-link">Order History</a></li>
                            <li><a href="#returns" className="footer-link">Returns</a></li>
                        </ul>
                    </div>

                    {/* Widget Column 3: Information Links */}
                    <div className="footer-widget">
                        <h3 className="footer-title">Infomation</h3>
                        <ul className="footer-links-list">
                            <li><a href="#story" className="footer-link">Our Story</a></li>
                            <li><a href="#careers" className="footer-link">Careers</a></li>
                            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="#news" className="footer-link">Latest News</a></li>
                            <li><a href="#contact" className="footer-link">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Widget Column 4: Contact/Support Details */}
                    <div className="footer-widget">
                        <h3 className="footer-title">Talk To Us</h3>
                        <p className="footer-subtitle">Got Questions? Call us</p>
                        <a href="tel:+67041390762" className="footer-phone">+670 413 90 762</a>
                        
                        <div className="contact-item">
                            <span className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <a href="mailto:shofy@support.com" className="contact-text-link">shofy@support.com</a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>
                            <span className="contact-address">
                                79 Sleepy Hollow St.<br />Jamaica, New York 1432
                            </span>
                        </div>
                    </div>

                </div>

                {/* Lower Layout Copyright & Credit Row */}
                <div className="footer-bottom">
                    <p className="copyright-text">
                        © 2023 All Rights Reserved | HTML Template by <a href="#themepure">Themepure</a>.
                    </p>
                    <div className="payment-gateways">
                        <img src={paypal_logo} alt="PayPal" className="gateway-img" />
                        <img src={visa_logo} alt="Visa" className="gateway-img" />
                        <img src={mastercard_logo} alt="Mastercard" className="gateway-img" />
                        <img src={stripe_logo} alt="Stripe" className="gateway-img" />
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
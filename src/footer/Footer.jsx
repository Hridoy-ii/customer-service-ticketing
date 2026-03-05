import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';


const Footer = () => {
    return (
        <div>
            <footer >
                <div className="footer sm:footer-horizontal bg-neutral p-10">
                    <aside>
                        <p className='text-sm md:text-xl md:font-bold text-white'>CS — Ticket System</p>
                        <p>
                            Providing reliable customer support <br /> solutions since 2024. Our ticket system <br /> streamlines issue resolution, ensuring <br /> your customers receive timely <br /> assistance and satisfaction.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title text-white">Company</h6>
                        <a className="link link-hover text-base-content">About us</a>
                        <a className="link link-hover text-base-content">Our Mission</a>
                        <a className="link link-hover text-base-content">Contact Saled</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-white">Services</h6>
                        <a className="link link-hover text-base-content">Product & Services</a>
                        <a className="link link-hover text-base-content">Customer Stories</a>
                        <a className="link link-hover text-base-content">Download Apps</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-white">Information</h6>
                        <a className="link link-hover text-base-content">Privacy Policy</a>
                        <a className="link link-hover text-base-content">Terms & Conditions</a>
                        <a className="link link-hover text-base-content">Join Us</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-white">Social Links</h6>
                        <a className="link link-hover flex items-center gap-2 whitespace-nowrap">
                            <span className="inline-flex"><BsTwitterX /></span>
                            Twitter
                        </a>
                        <a className="link link-hover flex items-center gap-2 whitespace-nowrap">
                            <span className="inline-flex"><TiSocialLinkedinCircular /></span>
                            LinkedIn
                        </a>
                        <a className="link link-hover flex items-center gap-2 whitespace-nowrap">
                            <span className="inline-flex"><FaFacebook /></span>
                            Facebook
                        </a>
                        <a className="link link-hover flex items-center gap-2 whitespace-nowrap">
                            <span className="inline-flex"><ImMail4 /></span>
                            support@cst.com
                        </a>
                    </nav>
                </div>
                <hr className='text-white'/>
                <p className="text-center bg-neutral text-white">© 2025 CS — Ticket System. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Footer;
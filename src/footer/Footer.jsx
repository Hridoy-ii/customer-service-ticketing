import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <p className='text-sm md:text-xl md:font-bold '>CS — Ticket System</p>
                    <p>
                        Providing reliable customer support <br /> solutions since 2024. Our ticket system <br /> streamlines issue resolution, ensuring <br /> your customers receive timely <br /> assistance and satisfaction.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
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
            </footer>
        </div>
    );
};

export default Footer;
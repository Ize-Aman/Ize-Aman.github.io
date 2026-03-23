import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <div className="">
            <div className="footer">
                <h3>Developed By Ammanuel</h3>
                <h3>Copyright © 2026 AT</h3>

                <div className="footer-icons">
                    <a href="https://github.com/ize-Aman" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ammanuel-tesfahun-b53a902a9" target="_blank"><FaLinkedin className="cursor-pointer" /></a>
                    <a href="mailto:dmsammanuel@gmail.com" target="_blank"><GrMail className="cursor-pointer" /></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;

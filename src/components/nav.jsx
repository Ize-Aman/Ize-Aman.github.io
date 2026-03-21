import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";

import CardNav from "./CardNav";

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20)
            setNavbarBlur(true);
        else
            setNavbarBlur(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Know me", ariaLabel: "Get to know me", href: "/About" },
                { label: "Skillsets", ariaLabel: "Professional Skillsets", href: "/About" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "My projects", ariaLabel: "My projects", href: "/Projects" },
                { label: "Film vault", ariaLabel: "Film vault project", href: "/Projects" }
            ]
        },
        {
            label: "Resume",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "View Resume", ariaLabel: "View my resume", href: "/Resume" },
                { label: "Contact me", ariaLabel: "Contact", href: "/Resume" }
            ]
        }
    ]


    return (
        <div>
            <div className={`nav-wrapper ${navbarBlur ? 'nav-blur ' : ''}`}>
                <Link to={"/"}><h1 className="logo">Aman</h1></Link>
                <div className="links">
                    <ul>
                        <Link to={"/"}><li className="nav-item nav-underline"><AiOutlineHome className="nav-icon" /> Home </li></Link>
                        <Link to={"/About"}><li className="nav-item nav-underline"><IoPersonOutline className="nav-icon" /> About</li></Link>
                        <Link to={"/Projects"}><li className="nav-item nav-underline"><IoCodeSlashOutline className="nav-icon" /> Projects</li></Link>
                        <Link to={"/Resume"}><li className="nav-item nav-underline"><CgFileDocument className="nav-icon" /> Resume</li></Link>
                    </ul>
                </div>
            </div>

            <div className="card-nav">
                <CardNav className={`fixed ${navbarBlur ? 'nav-blur' : ' backdrop-blur-[0] duration-650 ease-linear'}`}
                    logo={"Aman"}
                    items={items}
                    baseColor="#0000"
                    menuColor="#000"
                    ease="power3.out"
                />
            </div>
        </div>
    )
};

export default Nav;

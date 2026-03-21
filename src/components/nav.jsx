import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";

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


    return (
        <div>
            <div className={navbarBlur ? 'nav-blur nav-wrapper' : 'nav-wrapper'}>
                <Link to={"/"}><h1 className="logo nav-underline">Aman</h1></Link>
                <div className="links">
                    <ul>
                        <Link to={"/"}><li className="nav-item nav-underline"><AiOutlineHome className="nav-icon" /> Home </li></Link>
                        <Link to={"/About"}><li className="nav-item nav-underline"><IoPersonOutline className="nav-icon" /> About</li></Link>
                        <Link to={"/Projects"}><li className="nav-item nav-underline"><IoCodeSlashOutline className="nav-icon" /> Projects</li></Link>
                        <Link to={"/Resume"}><li className="nav-item nav-underline"><CgFileDocument className="nav-icon" /> Resume</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Nav;

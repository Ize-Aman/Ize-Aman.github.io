import React from "react";

const Button = ({ link, icon, text }) => {
    return (
        <div>
            <a href={link} target="_blank" ><button className="project-btn"> {icon} {text}</button></a>
        </div>
    )
};

export default Button;
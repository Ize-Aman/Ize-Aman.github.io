import React from "react";

const Button = ({ link, icon, text, download = false, fileName }) => {
    return (
        <div>
            <a
                href={link}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noreferrer"}
                download={download ? (fileName || true) : undefined}
            >
                <button className="project-btn"> {icon} {text}</button>
            </a>
        </div>
    )
};

export default Button;
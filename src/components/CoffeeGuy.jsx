import React from "react";

const CoffeeGuy = () => {

    const handleMouseMove = (e) => {
        console.log(e.target.getBoundingClientRect());
    }

    return (
        <div className="wrapper">
            <div className="coffee-avatar relative inline" onMouseOver={handleMouseMove}>
                <img src="./Avatar.png" alt="" className="w-70" />
            </div>
        </div>
    )
};

export default CoffeeGuy;

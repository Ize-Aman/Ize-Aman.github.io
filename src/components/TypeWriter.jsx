import React from "react";
import Typewriter from 'typewriter-effect';

const TypeWriter = ({ strings }) => {
    return (
        <div>
            <Typewriter options={{
                strings: [...strings],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 2,
            }} />
        </div>
    )
};

export default TypeWriter;

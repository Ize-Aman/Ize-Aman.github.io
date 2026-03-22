import React from "react";
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <div>
            <Typewriter options={{
                strings: ['A Software Engineer', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 6,
                deleteSpeed: 2,
            }} />
        </div>
    )
};

export default TypeWriter;

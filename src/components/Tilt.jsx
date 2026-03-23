import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

const Tilt = ({ image, width }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5

        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="wrapper">
            <motion.div className="tilt relative inline-block" style={{ perspective: 800 }}>
                <motion.img
                    src={image ?? './Avatar.png'}
                    alt="Coffee avatar"
                    className={width}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                />
            </motion.div>
        </div>
    )
};

export default Tilt;

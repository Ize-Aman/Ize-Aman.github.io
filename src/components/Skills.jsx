import React from "react";
import { motion } from "motion/react"
import { CgCPlusPlus } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiTailwindcss, SiVercel } from "react-icons/si";

const Skills = ({ icon, isActive, onActivate }) => {

    const skills = {
        'C++': <CgCPlusPlus />,
        'Thunder Client': <AiOutlineThunderbolt />,
        'React': <FaReact />,
        'JavaScript': <DiJavascript1 />,
        'Node': <DiNodejs />,
        'Express': <SiExpress />,
        'MongoDB': <SiMongodb />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Npm': <FaNpm />,
        'Figma': <FaFigma />,
        'Bootstrap': <FaBootstrap />,
        'Vercel': <SiVercel />,
        'Tailwind': <SiTailwindcss />
    }

    return (
        <motion.div className="skill-box" title={icon}
            onTap={onActivate}
            animate={
                isActive ? { scale: 1.2, boxShadow: "0 2px 8px 1px #431f47" } : { scale: 1, boxShadow: "0 0 0 0 transparent" }
            }
            whileHover={{ scale: 1.2, boxShadow: "0 2px 8px 1px #431f47" }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            {skills[icon]}
        </motion.div>
    )
};

export default Skills;

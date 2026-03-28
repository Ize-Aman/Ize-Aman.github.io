import React, { useState, useEffect } from "react";
import Tilt from "@/components/Tilt";
import Skills from "@/components/Skills";

import MyCodder from "@/Lottie-Files/MyCodder.json";

const About = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    useEffect(() => {
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const clickedSkillBox = target.closest(".skill-box");
            if (!clickedSkillBox) {
                setActiveSkill(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    const skillIcons = [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "Github",
        "JavaScript",
        "C++",
        "Thunder Client",
        "Figma",
        "Vercel",
        "Npm",
        "Bootstrap",
        "Tailwind",
    ];

    return (
        <div className="wrapper lg:pt-25">
            <section
                id="know-me"
                className="px-10 lg:px-35 min-h-screen not-lg:pt-15"
            >
                <div className="about-text">
                    <h2>
                        Get to <span className="text-purple">Know</span> me!
                    </h2>
                    <br />

                    <p>
                        Hi, my name is <span className="text-purple">Ammanuel</span> and I’m
                        a <span className="text-purple">software engineering</span> student
                        with a passion for building things with code. I enjoy the process of
                        turning ideas into real applications and solving problems along the
                        way.
                    </p>
                    <br />
                    <p>
                        I primarily work with{" "}
                        <span className="text-purple">JavaScript</span> and{" "}
                        <span className="text-purple">react</span>, and recently I’ve been
                        exploring
                        <span className="text-purple"> Game Development</span> and building
                        personal projects to improve my skills. I’m always looking for
                        opportunities to learn new technologies and grow as a developer.
                    </p>
                    <br />
                    <p>
                        Right now, my focus is on strengthening my software engineering
                        fundamentals, building meaningful projects, and expanding my
                        knowledge in areas like{" "}
                        <span className="text-purple">full-stack development</span>.
                    </p>
                    <br />
                    <p>
                        I’m always open to learning opportunities, collaborations, and
                        interesting projects where I can contribute and grow. Feel free to
                        <span className="text-purple"> reach out</span>.
                    </p>
                </div>
                <div>
                    <Tilt
                        data={MyCodder}
                        autoplay
                        loop
                        segment={[1, 22]}
                        speed={0.7}
                        mode="reverse-bounce"
                        className="w-screen h-100 lg:w-100 self-center"
                    />
                </div>
            </section>

            <section
                id="skillset"
                className="px-10 lg:px-35 lg:h-[70vh] min-h-screen"
            >
                <h2>Professional Skillset</h2>
                <div className="skill-wrapper">
                    {skillIcons.map((icon) => (
                        <Skills
                            key={icon}
                            icon={icon}
                            isActive={activeSkill === icon}
                            onActivate={() => setActiveSkill(icon)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;

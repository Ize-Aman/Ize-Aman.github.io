import React, { useState, useEffect } from "react"
import Tilt from "@/components/Tilt";
import Skills from "@/components/Skills";

import CodingGuy from "@/Lottie-Files/CodingGuy.json"

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
        'React',
        'Node',
        'Express',
        'MongoDB',
        'Git',
        'Github',
        'JavaScript',
        'C++',
        'Thunder Client',
        'Figma',
        'Vercel',
        'Npm',
        'Bootstrap',
        'Tailwind'
    ];

    return (
        <div className="wrapper">
            <section id="know-me" className="px-10 lg:px-35 min-h-screen not-lg:pt-15">
                <div className="about-text">
                    <h2>Get to <span className="text-purple">Know</span> me!</h2>
                    <br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est, quisquam quo, nihil debitis exercitationem nesciunt necessitatibus voluptas, iure sequi tenetur reprehenderit perspiciatis mollitia numquam. Cum ab voluptate labore ratione.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat vitae excepturi optio praesentium earum eveniet maiores eum, aliquid reiciendis atque iusto non officia dolorem ut eaque pariatur odio dolorum asperiores?</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sequi incidunt, alias facere soluta aliquam eum, quibusdam explicabo perspiciatis quisquam quasi est dolorem animi fugiat illo sed ad consequatur saepe?</p>
                </div>
                <div>
                    <Tilt data={CodingGuy} autoplay loop segment={[1, 22]} speed={0.7} mode="reverse-bounce" className="w-screen h-100 lg:w-100" />
                </div>
            </section>

            <section id="skillset" className="px-10 lg:px-35 lg:h-[70vh] min-h-screen">
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
    )
};

export default About;

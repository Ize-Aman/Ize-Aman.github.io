import React from "react"
import Tilt from "@/components/Tilt";
import Skills from "@/components/Skills";

import CodingGuy from "@/Lottie-Files/CodingGuy.json"

const About = () => {
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
                    <Skills icon='React' />
                    <Skills icon='Node' />
                    <Skills icon='Express' />
                    <Skills icon='MongoDB' />
                    <Skills icon='Git' />
                    <Skills icon='Github' />
                    <Skills icon='JavaScript' />
                    <Skills icon='C++' />
                    <Skills icon='Thunder Client' />
                    <Skills icon='Figma' />
                    <Skills icon='Vercel' />
                    <Skills icon='Npm' />
                    <Skills icon='Bootstrap' />
                    <Skills icon='Tailwind' />
                </div>

            </section>
        </div>
    )
};

export default About;

import React from "react"
import CodingGuy from "@/Lottie-Files/CodingGuy.json"
import Tilt from "@/components/Tilt";

const About = () => {
    return (
        <div className="wrapper">
            <section id="know-me" className="px-10 lg:px-35 min-h-screen lg:h-screen not-lg:pt-15">
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
                    <Tilt
                        data={CodingGuy}
                        autoplay
                        loop
                        segment={[1, 22]}
                        speed={0.7}
                        mode="reverse-bounce"
                        className="w-full max-w-93.75 h-auto lg:w-100"
                    />
                </div>
            </section>

            <section id="skillset" className="px-10 lg:px-35 min-h-screen lg:h-[70vh]">
                <h2>Professional Skillset</h2>

            </section>
        </div>
    )
};

export default About;

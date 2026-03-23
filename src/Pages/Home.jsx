import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import Astronunt from "@/Lottie-Files/Astronunt.json"
import TypeWriter from "@/components/TypeWriter";

import Tilt from "@/components/Tilt";

const Home = () => {
    return (
        <div className="wrapper">
            <section id="hello" className="h-screen">
                <div className="home-text">
                    <h1>Hi there!</h1>
                    <h1>I'M <span className="text-purple">AMMANUEL</span></h1>
                    <h1 className="mt-4 text-[21px] sm:text-[25px] font-medium"><TypeWriter /></h1>
                </div>

                <div className="astronunt-frame">
                    <DotLottieReact className="" data={Astronunt} autoplay loop style={{ width: 375, height: 375 }} />
                </div>
            </section>

            <section id="brief-intro" className="px-10 lg:px-50 lg:h-[70vh] h-screen">
                <div className="home-text">
                    <h1>Brief <span className="text-purple">Introduction</span></h1>
                    <p>I’m a software engineering student who enjoys building applications
                        and solving problems through code. I’m most comfortable with
                        <span className="text-purple">JavaScript</span>, and recently I’ve been exploring
                        <span className="text-purple"> modern web development
                        </span> and <span className="text-purple">Game Dev</span>.
                    </p>

                    <br />

                    <p>I’m currently focused on strengthening my fundamentals, building meaningful projects,
                        and learning technologies like <span className="text-purple">Next.js</span> and
                        <span className="text-purple">TypeScript</span> to become a better
                        <span className="text-purple">full-stack developer</span>.
                    </p>
                </div>
                <div>
                    <Tilt image={"./Avatar.png"} width="w-55 md:w-70 lg:w-200" />
                </div>
            </section>

        </div>
    )
};

export default Home;

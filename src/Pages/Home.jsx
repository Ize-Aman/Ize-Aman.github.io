import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import Astronunt from "@/Lottie-Files/Astronunt.json"
import TypeWriter from "@/components/TypeWriter";

import CoffeeGuy from "@/components/CoffeeGuy";

const Home = () => {
    return (
        <div className="wrapper">
            <section id="hello">
                <div className="home-text">
                    <h1>Hi there!</h1>
                    <h1>I'M <span className="text-purple">AMMANUEL</span></h1>
                    <h1 className="mt-4 text-[21px] sm:text-[25px] font-medium"><TypeWriter /></h1>
                </div>

                <div className="astronunt-frame">
                    <DotLottieReact className="" data={Astronunt} autoplay loop style={{ width: 375, height: 375 }} />
                </div>
            </section>

            <CoffeeGuy />

        </div>
    )
};

export default Home;

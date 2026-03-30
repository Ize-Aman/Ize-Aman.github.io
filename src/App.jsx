import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import nightsky from "./Lottie-Files/myNightSky.json";
import { HashLoader } from "react-spinners";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1950)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center self-center h-screen items-center">
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
          />
        </div>
      ) : (
        <div>
          <DotLottieReact data={nightsky} autoplay loop className="lottie-bg" />

          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>

          <Footer />
        </div>
      )
      }
    </>
  );
};

export default App;

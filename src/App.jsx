import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

import Nav from "./components/nav";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import nightsky from "./Lottie-Files/myNightSky.json";

const App = () => {
  return (
    <div>
      <DotLottieReact data={nightsky} autoplay loop className="fixed scale-145 z-[-1]" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

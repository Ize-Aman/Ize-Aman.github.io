import React from "react";
import Nav from "./components/nav";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import astronuntUrl from "./Lottie-Files/Astronunt.json?url";
import nightsky from "./Lottie-Files/myNightSky.json";

const App = () => {
  return (
    <div className="app-shell">

      <DotLottieReact data={nightsky} autoplay loop className="fixed h-screen w-screen bottom-0" />

      <div className="app-content">
        {/* <Nav /> */}
      </div>
    </div>
  );
};

export default App;

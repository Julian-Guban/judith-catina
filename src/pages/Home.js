import React from "react";
import img from "../assets/0000e95b-77f1-44c9-99f1-0735ef82c6f7.jfif";

function Home() {
  return (
    <div id="Home">
      <div className="flex-center">
        <img src={img} alt="My E-Portfolio" height={"100%"} />
      </div>
      <div className="intro bg-panel">
          <h2>Welcome to My E-Portfolio!</h2>
          <a href="https://www.facebook.com/judith.catina.3" target="_blank" rel="noreferrer">by: Judith Catina</a>
          <p>from: BTVTEdICT-CP-3D</p>
      </div>
    </div>
  );
}

export default Home;

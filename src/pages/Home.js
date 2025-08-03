import React from "react";
import img from "../assets/My-E-Portfolio.png";

function Home() {
  return (
    <div id="Home">
      <div className="w-100 flex-center">
        <img src={img} alt="My E-Portfolio" height={"100%"} />
      </div>
      <div className="intro bg-panel">
          <h2>This is The E-Portfolio of </h2>
          <a href="https://www.facebook.com/judith.catina.3" target="_blank" rel="noreferrer">Judith Catina</a>
          <p>from: </p>
          <p>BTVTEdICT-CP-3D</p>
      </div>
    </div>
  );
}

export default Home;

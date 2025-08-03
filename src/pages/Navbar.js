import React, { useState } from "react";
import home from "../assets/icons/home_44428.png";
import dlp from "../assets/icons/business-plan_7111109.png";
import reflection from "../assets/icons/reflection_17677694.png";
import exam from "../assets/icons/paper_3640488.png";
import docu from "../assets/icons/file-cabinet_3280876.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tab")) || "Home";
    } catch (error) {
      return "Home";
    }
  });

  const tabChange = (newTab) => {
    if (newTab === tab) return;
    localStorage.setItem("tab", newTab);
    setTab(newTab);
  };

  return (
    <nav>
      <div className="menu-toggle">
        <button
          id="menuToggle"
          className=" btn btn-secondary p-1"
          onClick={() => setShow(!show)}
          style={{ color: "white" }}
        >
          &#9776;
        </button>
      </div>
      <ul className={`navbar ${show && "show"}`}>
        <li>
          <a
            href="#Home"
            className={`btn ${tab === "Home" && "active"}`}
            onClick={() => tabChange("Home")}
          >
            <img
              src={home}
              alt="Home"
              width={"20px"}
              height={"20px"}
              loading="lazy"
            />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#DLP"
            className={`btn ${tab === "DLP" && "active"}`}
            onClick={() => tabChange("DLP")}
          >
            <img
              src={dlp}
              alt="Detailed Lesson Plan"
              width={"20px"}
              height={"20px"}
              loading="lazy"
            />
            <span>DLP</span>
          </a>
        </li>
        <li>
          <a
            href="#Exam"
            className={`btn ${tab === "Exam" && "active"}`}
            onClick={() => tabChange("Exam")}
          >
            <img
              src={exam}
              alt="Exam"
              width={"20px"}
              height={"20px"}
              loading="lazy"
            />
            <span>Exam</span>
          </a>
        </li>
        <li>
          <a
            href="#Reflection"
            className={`btn ${tab === "Reflection" && "active"}`}
            onClick={() => tabChange("Reflection")}
          >
            <img
              src={reflection}
              alt="Reflections"
              width={"20px"}
              height={"20px"}
              loading="lazy"
            />
            <span>Reflections</span>
          </a>
        </li>
        <li>
          <a
            href="#Documentation"
            className={`btn ${tab === "Documentation" && "active"}`}
            onClick={() => tabChange("Documentation")}
          >
            <img
              src={docu}
              alt="Documentation"
              width={"20px"}
              height={"20px"}
              loading="lazy"
            />
            <span>Documentation</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

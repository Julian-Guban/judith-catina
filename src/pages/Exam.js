import React from "react";
import tos from "../assets/Exam/tos.png";

function Exam() {
  return (
    <div id="Exam">
      <div
        className="w-100 flex-row center p-2"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="flex-column"
          style={{ alignItems: "flex-start", gap: "0px" }}
        >
          <h1 className="text-muted">TOS</h1>
          <p className="text-muted">- Table of Specification</p>
        </div>
        {/* <button
          className="btn btn-secondary"
          style={{ height: "fit-content !important" }}
        >
          <a
            href={file}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Download DLP
          </a>
        </button> */}
      </div>
      <div className="flex-center">
            <img src={tos} width={"100%"} height={"100%"}/>
      </div>
    </div>
  );
}

export default Exam;

import React from "react";
import tos from "../assets/Exam/tos.png";
import file from "../assets/Exam/EXAMINATION_FOR_COOKERY.pdf";
import file1 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0001.jpg";
import file2 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0002.jpg";
import file3 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0003.jpg";
import file4 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0004.jpg";
import file5 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0005.jpg";
import file6 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0006.jpg";
import file7 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0007.jpg";
import file8 from "../assets/Exam/EXAMINATION_FOR_COOKERY_page-0008.jpg";

function Exam() {
  const images = [file1, file2, file3, file4, file5, file6, file7, file8];
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
      </div>
      <div className="flex-center">
            <img src={tos} width={"100%"} alt="tos" height={"100%"}/>
      </div>
      <div
        className="w-100 flex-row center p-2"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="flex-column"
          style={{ alignItems: "flex-start", gap: "0px" }}
        >
          <h1 className="text-muted">Exam</h1>
          <p className="text-muted">- 50-item Multiple Choice Exam</p>
        </div>
        <button
          className="btn btn-secondary"
          style={{ height: "fit-content !important" }}
        >
          <a
            href={file}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Download Exam
          </a>
        </button>
      </div>
       <div className="x-auto" style={{width: "inherit", display: "flex", flexDirection: "row", gap: "5px", alignItems: "flex-start"}}>
        {images.map((image, idx) => (
          <img src={image} key={idx} height={"550px"} alt="Loading... " />
        ))}
      </div>
    </div>
  );
}

export default Exam;

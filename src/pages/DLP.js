import React from "react";
import file from "../assets/DLP/COOKERY-DLP.pdf";
import file1 from "../assets/DLP/COOKERY-DLP_page-0001.jpg";
import file2 from "../assets/DLP/COOKERY-DLP_page-0002.jpg";
import file3 from "../assets/DLP/COOKERY-DLP_page-0003.jpg";
import file4 from "../assets/DLP/COOKERY-DLP_page-0004.jpg";
import file5 from "../assets/DLP/COOKERY-DLP_page-0005.jpg";
import file6 from "../assets/DLP/COOKERY-DLP_page-0006.jpg";
import file7 from "../assets/DLP/COOKERY-DLP_page-0007.jpg";

function DLP() {
  const images = [file1, file2, file3, file4, file5, file6, file7];
  return (
    <div id="DLP" className="w-inherit h-fit flex-center flex-column">
      <div className="w-100 flex-row center p-2" style={{justifyContent: "space-between"}}>
        <div className="flex-column" style={{alignItems: "flex-start", gap: "0px"}} >
          <h1 className="text-muted">DLP</h1>
          <p className="text-muted">- Detailed Lesson Plan</p>
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
            Download DLP
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

export default DLP;

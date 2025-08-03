import React from "react";
import img1 from "../assets/Docu/1.jfif";
import img2 from "../assets/Docu/2.jfif";
import img3 from "../assets/Docu/3.jfif";
import img4 from "../assets/Docu/4.jfif";
import img5 from "../assets/Docu/5.jfif";

function Documentation() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div id="Documentation">
      <div
        className="w-100 flex-row center p-2"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="flex-column"
          style={{ alignItems: "flex-start", gap: "0px" }}
        >
          <h1 className="text-muted">Documentation</h1>
          <p className="text-muted">- Narrative</p>
        </div>
        <br />
      </div>
      <div className="w-100 p-2 flex-column">
        <p className="text-primary" style={{ textIndent: "20px" }}>
          During my teaching demonstration on the "Importance of Occupational
          Health and Safety Procedures in the Kitchen," I followed a structured
          flow that included classroom management, motivation, proper lessons,
          generalization, and application. I began with a prayer, introduced
          myself, and engaged students with a game-based motivation called
          "Danger and Safe," which was effective in activating prior knowledge.
          That was FUN!
        </p>
        <p className="text-primary" style={{ textIndent: "10px" }}>
          As I progressed, I discussed the key concepts of OHS, involving
          students in reading and identifying safe practices. I also prepared
          group activities and evaluation questions to check for understanding.
          Overall, I felt confident in delivering the content and maintaining
          class participation.
        </p>
        <p className="text-primary" style={{ textIndent: "10px" }}>
          However, based on my teacher’s feedback after my demo, I realized
          there were areas I could improve. I use motivational words instead of
          ENERGIZER and give a personal real-life example, such as sharing my
          experience as a restaurant crew member, which could have made the
          lesson more relatable and engaging. I was also reminded not to be shy
          and to actively ask students questions to make the class more
          interactive. These insights made me more aware of the importance of
          connecting personally with students and building confidence as a
          teacher.
        </p>
        <p className="text-primary" style={{ textIndent: "10px" }}>
          Moving forward, I will be more intentional in using real-life
          connections and encouraging open communication to enhance my classroom
          presence and student engagement. The overall experience of my first
          demo teaching in front of the class has given me a clearer
          understanding of what I need to work on and how I can improve. It
          allowed me to reflect not just on my teaching strategies, but also on
          my confidence and how I connect with my students.
        </p>
        <p className="text-center">
          <strong className="text-primary">
            “It may not be perfect, but it’s my first step in becoming the
            teacher I hope to be.”
          </strong>
        </p>
      </div>
      <div
        className="x-auto"
        style={{
          width: "inherit",
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          alignItems: "flex-start",
        }}
      >
        {images.map((image, idx) => (
          <img src={image} key={idx} alt="Loading..." height={"300px"} />
        ))}
      </div>
    </div>
  );
}

export default Documentation;

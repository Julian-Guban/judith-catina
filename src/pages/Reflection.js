import React, { useState } from "react";

const reflections = [
  {
    week: 5,
    date: "Online Demo Teaching",
    feedback: [
      {
        teacher: "General Feedback",
        feedback:
          "The lack of student participation in online classes was noted. Many students had cameras off, making it difficult to engage with the class. Online teaching requires creativity, patience, and effort to keep students engaged.",
      },
      {
        teacher: "Ma’am Alvarado",
        feedback:
          "Encouraged participation even in online classes and reminded the demo teachers of the importance of engaging the class despite the challenges of virtual learning.",
      },
      {
        teacher: "General Feedback",
        feedback:
          "Challenges in conducting hands-on activities were highlighted. Online classes can feel passive, and teachers need to be innovative to engage students in a virtual environment.",
      },
    ],
  },
  {
    week: 6,
    date: "June 2025",
    feedback: [
      {
        teacher: "General Feedback",
        feedback:
          "Many classmates had small fonts in their PowerPoint presentations, making it difficult to read. Unclear instructions led to confusion and reduced participation. It was emphasized that lessons should be clear, engaging, and aligned with objectives.",
      },
      {
        teacher: "Teacher Feedback",
        feedback:
          "Commended enthusiasm and use of real-life examples. Reminded to use larger fonts, clear instructions, and ensure that objectives align with tasks and assessments.",
      },
    ],
  },
  {
    week: 7,
    date: "June 13, 2025",
    feedback: [
      {
        teacher: "Ma’am Elumbra",
        feedback:
          "Include quiz instructions in the PowerPoint presentation to remind students of the expectations during the assessment. Her organization and clarity in class delivery were appreciated.",
      },
      {
        teacher: "Ma’am Maligaya",
        feedback:
          "Balance between content delivery and student activities is crucial. Too many activities can cause time management issues and distract from the main focus.",
      },
      {
        teacher: "Ma’am Narido",
        feedback:
          "Received feedback on PowerPoint design, layout, color, and fonts. The design should ensure readability. Appreciation for voice projection and active student participation, which I aim to improve in my own teaching.",
      },
      {
        teacher: "Ma’am Camiring",
        feedback:
          "Her excitement and constructive criticism motivated students. Engagement and attractiveness during lessons support student motivation and engagement.",
      },
      {
        teacher: "Sir Palahang",
        feedback:
          "Emphasized the importance of aligning the lesson objectives with all three learning domains. Affective domain should not be neglected in lesson planning.",
      },
      {
        teacher: "Ma’am Dogwe",
        feedback:
          "Praised for clear and comprehensive images and offering contextualization and visual aids to help students understand the concepts better.",
      },
    ],
  },
  {
    week: 9,
    date: "June 27, 2025",
    feedback: [
      {
        teacher: "Sir Legaspi",
        feedback:
          "Reminded to align class goals with all three learning domains. Also noted that attendance was not taken, highlighting the importance of standard classroom practices.",
      },
      {
        teacher: "Ma’am Villaluna",
        feedback:
          "Encouraged to eliminate filler words like 'Ahm' and to increase font size for quiz instructions to improve readability.",
      },
      {
        teacher: "Ma’am Dullahan",
        feedback:
          "Time management issues were noted due to the lengthy energizer activity. It was emphasized that activities should not overrun and distract from the lesson.",
      },
      {
        teacher: "Ma’am Manilag & Sir Tenoria",
        feedback:
          "Both reminded about missing routines like prayer, attendance, and preparation of rules or goals, which form the foundation of an effective learning environment.",
      },
      {
        teacher: "Ma’am Ortega",
        feedback:
          "Noted for not providing her own tools or materials, which is essential for a smooth and credible demonstration, particularly in hands-on lessons.",
      },
    ],
  },
  {
    week: 10,
    date: "July 04, 2025",
    feedback: [
      {
        teacher: "Sir Domondon & Sir Guban",
        feedback:
          "Noted for missing classroom rules and routines such as attendance. Small details like greetings and taking attendance contribute to a positive classroom culture.",
      },
      {
        teacher: "Sir Decastro",
        feedback:
          "Emphasized the need for concise and clear objectives. Also advised using a whiteboard to demonstrate calculations step-by-step for better engagement, particularly for visual and kinesthetic learners.",
      },
      {
        teacher: "Sir Selma & Sir Perena",
        feedback:
          "Encouraged clear instructions and appropriate font size in PowerPoint presentations. These elements help students stay focused and understand content better.",
      },
    ],
  },
];

const AccordionItem = ({ week, date, feedback }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <button className="accordion-button" onClick={toggleAccordion}>
        Week {week}: {date}
      </button>
      {isOpen && (
        <div className="accordion-content flex-column">
          {feedback.map((item, index) => (
            <p className="text-muted" key={index}>
              <strong className="text-muted">{item.teacher}:</strong> {item.feedback}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

function Reflection() {
  return (
    <div id="Reflection">
      <div
        className="w-100 flex-row center p-2"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="flex-column"
          style={{ alignItems: "flex-start", gap: "0px" }}
        >
          <h1 className="text-muted">Reflections</h1>
          <p className="text-muted">- Weekly reflections</p>
        </div>
        <br />
      </div>
      <div className="w-100 h-100 bg-panel">
        {reflections.map((reflection, index) => (
          <AccordionItem
            key={index}
            week={reflection.week}
            date={reflection.date}
            feedback={reflection.feedback}
          />
        ))}
      </div>
    </div>
  );
}

export default Reflection;

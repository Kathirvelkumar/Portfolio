import "./CSS/Certification.css";
import { useState } from "react";
import SkillList from "./SkillList.js";
import SkillPopup from "./SkillPopup.jsx";

function Certification() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="Certification-sec">
      <h4>Certifications</h4>

      <div className="Certification-div">
        {/* Internship Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.InternshipCert)}
        >
          <h5>Internship – Java Full Stack Development</h5>
          <p>
            Gradtwin OPC Pvt. Ltd <br />
            Mar 2025 – Jun 2025 | Remote, Chennai
          </p>
          <span>
            Gained hands-on experience in Java Full Stack Development, working on
            frontend technologies including HTML, CSS, and JavaScript, while
            strengthening knowledge of full stack concepts and agile practices.
          </span>
        </div>

        {/* Java Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.JavaCert)}
        >
          <h5>Java Fundamentals Certification</h5>
          <span>
            Certified in Java fundamentals from Silicon Software Services and
            CodeChef, covering core Java concepts and object-oriented principles.
          </span>
        </div>

        {/* Web Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.WebCert)}
        >
          <h5>Web Development Certification</h5>
          <span>
            Completed HTML, CSS, and JavaScript certification from Udemy,
            gaining strong foundations in responsive web development.
          </span>
        </div>

        {/* Coding Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.CodingCert)}
        >
          <h5>Coding Development Certification</h5>
          <span>
            Earned a Coding Development certificate from Deloitte, focusing on
            problem-solving skills and structured programming techniques.
          </span>
        </div>

        {/* Generative AI Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.GenAiCert)}
        >
          <h5>Generative AI & Prompt Engineering</h5>
          <span>
            Completed Prompt Engineering and Generative AI certification from
            Great Learning, focusing on AI tools and real-world applications.
          </span>
        </div>

        {/* Python Cert */}
        <div
          className="Certification-card"
          onClick={() => setActiveSkill(SkillList.PythonCert)}
        >
          <h5>Python Programming Certification</h5>
          <span>
            Successfully completed Python programming certification from
            EduPrep, covering core concepts and practical coding skills.
          </span>
        </div>
      </div>

      {/* Popup to show certificate */}
      <SkillPopup skill={activeSkill} onClose={() => setActiveSkill(null)} />
    </section>
  );
}

export default Certification;

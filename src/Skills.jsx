import "./CSS/Skills.css";
import { useState } from "react";
import SkillList from "./SkillList.js";
import SkillPopup from "./SkillPopup.jsx";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const openSkill = (skill) => setActiveSkill(skill);

  return (
    <>
      <section className="Skills-sec">
        <h4>Technical Skills</h4>

        <div className="Skills-div">
          <ul>
            <div>
              <li
                onClick={() => openSkill(SkillList.Java)}
              >
                Java
              </li>
              <li
                onClick={() => openSkill(SkillList.SpringBoot)}
              >
                Spring Boot
              </li>


              <li
                onClick={() => openSkill(SkillList.JavaScript)}
              >
                JavaScript
              </li>

            </div>

            <div>

              <li
                onClick={() => openSkill(SkillList["React.js"])}
              >
                React.js
              </li>

              <li
                onClick={() => openSkill(SkillList["REST API"])}
              >
                REST API
              </li>

              <li
                onClick={() => openSkill(SkillList.MySQL)}
              >
                MySQL
              </li>

            </div>

            <div>

              <li
                onClick={() => openSkill(SkillList["HTML & CSS"])}
              >
                HTML & CSS
              </li>

              <li
                onClick={() => openSkill(SkillList["Prompt Engineering"])}
              >
                PROMPT Engineering
              </li>
            </div>
          </ul>
        </div>

        <div className="Tools-div">
          <ul>
            <li onClick={() => setActiveSkill(SkillList.Tools)}>
              Tools
            </li>

            <li onClick={() => setActiveSkill(SkillList.AIPlatfroms)}>
              AI Platforms
            </li>
          </ul>
        </div>

      </section>

      {/* Popup */}
      <SkillPopup skill={activeSkill} onClose={() => setActiveSkill(null)} />
    </>
  );
}

export default Skills;

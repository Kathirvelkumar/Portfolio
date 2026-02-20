import "./CSS/Projects.css";
import Muscle_Mansion from "./assets/Muscle-Mansion.png";
import Train from "./assets/Train-Accident.jpg";
import Garbage from "./assets/Garbage-Collection.jpg";

function Projects() {
  return (
    <section className="Project-sec">
      <legend>Projects</legend>
      <div className="Projects-div">
        <div>
          <h5>Muscle Mansion</h5>
          <img src={Muscle_Mansion} alt="Muscle Mansion" />
          <p>
            A comprehensive fitness-based web platform that provides structured
            workout routines, personalized diet plans, supplement guidance, and
            insights into the history of bodybuilding. Designed to educate and
            guide users toward achieving their fitness goals effectively.
          </p>
          <a href="https://muscle-mansion-project.netlify.app/" target="_blank">
            <button>View Project</button>
          </a>
        </div>


        <div>
          <h5>Train Accident Prevention System</h5>
          <img src={Train} alt="Train Accident Prevention" />
          <p>
            An embedded system project focused on preventing train collisions by
            dynamically controlling engine speed through voltage regulation.
            Uses distance measurement to detect obstacles ahead and
            automatically reduce speed to ensure safer train operations.
          </p>
          <a
            href="https://github.com/Kathirvelkumar/Train-Accident-Prevention-System"
            target="_blank"
          >
            <button>View Project</button>
          </a>
        </div>


        <div>
          <h5>Garbage Monitoring</h5>
          <img src={Garbage} alt="Garbage Project" />
          <p>
            An IoT-based solution that monitors garbage levels in bins and sends
            real-time alerts with location details when they reach full
            capacity. Helps authorities take timely action to improve waste
            management and maintain cleanliness.
          </p>
          <a href="">
            <button>View Project</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

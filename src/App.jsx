import { useRef } from "react";

import Home from "./Home";
import ProfessionalSummary from "./professionalSummary";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certification from "./Certification";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

function App() {
  const homeRef = useRef(null);
  const summaryRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <section ref={homeRef}>
        <Home
          homeRef={homeRef}
          summaryRef={summaryRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          educationRef={educationRef}
          certificationRef={certificationRef}
          hobbiesRef={hobbiesRef}
          contactRef={contactRef}
        />
      </section>

      <section ref={summaryRef}>
        <ProfessionalSummary />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={educationRef}>
        <Education />
      </section>

      <section ref={certificationRef}>
        <Certification />
      </section>

      <section ref={hobbiesRef}>
        <Hobbies />
      </section>

      <section ref={contactRef}>
        <Contact homeRef={homeRef} />
      </section>
    </>
  );
}

export default App;

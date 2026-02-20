import Profile from "../src/assets/profile-1.jpg";
import "./CSS/professionalSummary.css";
function Summary() {
  return (
    <section className="Summary-sec">

      <h4>Professional Summary</h4>
      <div className="Summary-div">
        
        <p>
          Dedicated and results-oriented professional with a strong passion for
          developing creative solutions and delivering high-quality results in
          every project undertaken. Possesses a solid foundation in modern
          technologies, problem-solving, and logical thinking, with the ability
          to adapt quickly to new tools and environments. Demonstrates a
          consistent work ethic, attention to detail, and a commitment to
          meeting deadlines while maintaining high standards.
          <br /><br />
          Actively seeking an opportunity to contribute skills and enthusiasm to
          a forward-thinking organization, where continuous learning,
          innovation, and collaboration are valued. Driven by a desire for
          professional growth, continuous improvement, and the ability to add
          meaningful value to both team objectives and organizational success.
        </p>

        <img src={Profile} alt="Profile-Image" className="Profile-img" />
      </div>
      
    </section>
  );
}

export default Summary;

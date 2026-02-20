import "./CSS/Hobbies.css";

function Hobbies() {
  return (
    <section className="Hobbies-sec">
      <h4>Hobbies & Interests</h4>

      <div className="Hobbies-div">
        <div className="Hobby-card">
          <h5>Pencil Artist</h5>
          <span>
            Pencil artist with a passion for drawing and creative illustration.
          </span>
        </div>

        <div className="Hobby-card">
          <h5>Fitness & Wellness</h5>
          <span>
            Fitness enthusiast actively focused on maintaining personal health,
            strength, and well-being.
          </span>
        </div>

        <div className="Hobby-card">
          <h5>Hockey</h5>
          <span>
            Enjoys playing hockey and represented at the district level,
            demonstrating discipline and teamwork.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;

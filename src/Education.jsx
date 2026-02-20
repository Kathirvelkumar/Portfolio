import "./CSS/Education.css";

function Education() {
  return (
    <section className="Education-sec">
      <h4>Education</h4>

      <div className="Education-div">
        <div className="Education-card">
          <h5>Bachelor of Engineering – ECE</h5>
          <p>Adhi College Of Engineering and Technology, Kanchipuram</p>
          <span>Anna University | 2021 – 2025</span>
          <strong>CGPA: 8.24</strong>
        </div>

        <div className="Education-card">
          <h5>Higher Secondary (HSC)</h5>
          <p>P.L.W.A Higher Secondary School</p>
          <span>State Board | 2019 – 2021</span>
          <strong>Percentage: 86%</strong>
        </div>

        <div className="Education-card">
          <h5>Secondary School Leaving Certificate (SSLC)</h5>
          <p>P.L.W.A Higher Secondary School</p>
          <span>State Board | 2018 – 2019</span>
          <strong>Percentage: 85%</strong>
        </div>
      </div>
    </section>
  );
}

export default Education;

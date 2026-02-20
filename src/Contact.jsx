import "./CSS/Contact.css";
import { useState } from "react";
import Gmail from "./assets/Email.png";
import LinkedIn from "./assets/linkedIn.png";
import GitHub from "./assets/Github.png";
import Location from "./assets/Location.png";
import UpArraow from "./assets/upArrow.png";

function Contact({ homeRef }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Reach you soon!");
    setFormData({ name: "", location: "", phone: "", message: "" });
  };

  // ✅ Scroll to top
  const scrollToTop = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="Contact-sec">
      <h5>Contact Info</h5>
      <div className="Contact-div">
        

        <div className="Contact-container">
          {/* Contact Links */}
          <div className="Contact-links">
            <a href="mailto:kathirkumar1862004@gmail.com">
              <img src={Gmail} alt="Email Icon" />
              <strong>Gmail</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/kathirvel-kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn Profile" />
              <strong>LinkedIn</strong>
            </a>

            <a
              href="https://github.com/Kathirvelkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub Profile" />
              <strong>GitHub</strong>
            </a>

            <a
              href="https://www.google.com/maps/place/Chennai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Location} alt="Location Icon" />
              <strong>Location</strong>
            </a>
          </div>

          {/* Contact Form */}
          <div className="Contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="location">Location :</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Mobile Number :</label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>

        {/* ✅ Scroll to Top Button */}
        <div className="Scroll-Top">
          <img src={UpArraow} alt="" onClick={scrollToTop} />
        </div>
      </div>
    </section>
  );
}

export default Contact;

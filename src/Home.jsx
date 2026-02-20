import "./CSS/Home.css";
import Moon from "./assets/moon.png";
import Sun from "./assets/sun.png";
import Menu from "./assets/Menu.png";
import Phone from "./assets/Phone.png"

import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home({
  skillsRef,
  projectsRef,
  educationRef,
  certificationRef,
  hobbiesRef,
  contactRef,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section onClick={() => setMenuOpen(false)} className="Home-sec">
      <nav className="NavBar">
        <div>
          <h3>Kathirvel K</h3>
        </div>

        <div className="NavBar-Items">
          {/* 🌗 THEME TOGGLE */}
          {theme === "light" ? (
            <img
              src={Moon}
              alt="Dark Mode"
              className="Theme-img"
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
            />
          ) : (
            <img
              src={Sun}
              alt="Light Mode"
              className="Theme-img"
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
            />
          )}

          {/* 🍔 MENU */}
          <div className="Menu-Wrapper">
            <div
              className="Menu"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
            >
              <legend>Menu</legend>
              <img src={Menu} alt="Menu Bar" className="Nav-img"/>
            </div>

            <ul className={`MenuList ${menuOpen ? "show" : ""}`}>
              <li onClick={() => scrollTo(skillsRef)}>Skills</li>
              <li onClick={() => scrollTo(projectsRef)}>Projects</li>
              <li onClick={() => scrollTo(educationRef)}>Education</li>
              <li onClick={() => scrollTo(certificationRef)}>Certifications</li>
              <li onClick={() => scrollTo(hobbiesRef)}>Hobbies</li>
            </ul>
          </div>

          <div
            className="Menu"
            onClick={() => scrollTo(contactRef)}
          >
            <legend>Contact</legend>
            <img src={Phone} alt="Contact" className="Nav-img" />
          </div>
        </div>
      </nav>

      
      <div className="Home-Content">
        <legend>Creative</legend>
        <strong>
          PORT<span>F</span>OLIO
        </strong>
        <legend>My Profile</legend>
      </div>
    </section>
  );
}

export default Home;

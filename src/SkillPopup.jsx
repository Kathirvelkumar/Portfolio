import "./CSS/SkillPopup.css";

function SkillPopup({ skill, onClose }) {
  if (!skill) return null;

  return (
    <div className="Popup-overlay" onClick={onClose}>
      <div className="Popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="Close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{skill.title}</h2>

        {/* ✅ CASE 1: Technical Skills */}
        {skill.points && (
          <>
            <p>
              <strong>Skill Level:</strong> {skill.level}
            </p>

            <h4>Key Knowledge</h4>
            <ul>
              {skill.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {skill.platforms && (
              <p>
                <strong>Platforms:</strong> {skill.platforms.join(", ")}
              </p>
            )}
          </>
        )}

        {/* ✅ CASE 2: Tools / AI Platforms */}
        {skill.items && (
          <>
            <h4>Includes</h4>
            <ul>
              {skill.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {skill.image && <img src={skill.image.src} alt={skill.image.alt} />}
      </div>
    </div>
  );
}

export default SkillPopup;

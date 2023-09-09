export default function ExperienceOutput() {
  return (
    <div className="experience output">
      <h3>Experience</h3>
      <hr />
      <ExperienceSection/>
      <ExperienceSection/>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="exp-output-section">
      <div className="exp-section-header">
        <p className="institution-name">
          <b>Ministry of black magic</b>
        </p>
        <p className="time-span">2037 - now</p>
      </div>
      <li className="position-list">Black Magic Engineer</li>
    </div>
  );
}

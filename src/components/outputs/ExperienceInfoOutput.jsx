export default function ExperienceOutput({expInfo}) {
  const isExpInfo = expInfo.length !== 0
  return (
    <div className="experience output">
      <h3>Experience</h3>
      <hr />
      {isExpInfo ? (
        expInfo.map((data) => (
          <ExperienceSection props={data} key={data.company} />
        ))
      ) : (
        <ExperienceSection />
      )}
    </div>
  );
}

function ExperienceSection({props}) {
  return (
    <div className="exp-output-section">
      <div className="exp-section-header">
        <p className="institution-name">
          <b>{props ? props.company : "Ministry of Black Magic"}</b>
        </p>
        <p className="time-span">{props ? props.startYear + " - " + props.endYear : "2000 - now"}</p>
      </div>
      <li className="position-list">{props ? props.position : "Black Magic Engineer"}</li>
    </div>
  );
}

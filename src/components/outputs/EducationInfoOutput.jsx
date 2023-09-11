export default function EducationOutput({ eduData }) {
  const isEduData = eduData.length !== 0;
  return (
    <div className="education output">
      <h3>Education</h3>
      <hr />
      {/* {eduData.map((data) => {
       return <EducationSection props={data} key={data.institution} />;
      })} */}
      {isEduData ? (
        eduData.map((data) => (
          <EducationSection props={data} key={data.institution} />
        ))
      ) : (
        <EducationSection />
      )}
    </div>
  );
}

function EducationSection({ props }) {
  return (
    <div className="edu-output-section">
      <div className="edu-section-header">
        <p className="institution-name">
          {/* <b>{props.institution}</b> */}
          <b>{props ? props.institution : "Hogwart"}</b>
        </p>
        <p className="time-span">
          {props ? props.startYear + " - " + props.endYear : "1957 - 1965"}
        </p>
      </div>
      <li className="course-list">{props ? props.course : "Alchemy"}</li>
    </div>
  );
}

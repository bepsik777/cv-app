export default function EducationInfo({onAdd}) {
  return (
    <form action="#" className="education-info form-container" onSubmit={onAdd}>
      <h2>Education</h2>
      <hr />
      <label htmlFor="institution">Institution:</label>
      <input type="text" name="institution" id="institution" required/>
      <label htmlFor="course">Course:</label>
      <input type="text" name="course" id="course" required/>
      <label htmlFor="starting-date">Start Year:</label>
      <input type="text" name="startYear" id="starting-date" required/>
      <label htmlFor="end-date">End Year:</label>
      <input type="text" name="endYear" id="end-date" placeholder="If not finished, type 'now'" required/>
      <div className="btn-container">
        <button className="button">Add</button>
      </div>
    </form>
  );
}

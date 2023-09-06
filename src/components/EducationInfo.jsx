export default function EducationInfo() {
  return (
    <form action="#" className="education-info form-container">
      <h2>Education</h2>
      <hr />
      <label htmlFor="institution">Institution:</label>
      <input type="text" name="institution" id="institution" />
      <label htmlFor="course">Course:</label>
      <input type="text" name="course" id="course" />
      <label htmlFor="starting-date">Start Year:</label>
      <input type="text" name="startDate" id="starting-date" />
      <label htmlFor="end-date">End Year:</label>
      <input type="text" name="endDate" id="end-date" placeholder="If not finished, type 'now'"/>
      <div className="btn-container">
        <button className="button">Update</button>
      </div>
    </form>
  );
}

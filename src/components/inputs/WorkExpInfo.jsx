export default function WorkExpInfo() {
  return (
    <form action="#" className="education-info form-container">
      <h2>Work Experience</h2>
      <hr />
      <label htmlFor="company">Company:</label>
      <input type="text" name="company" id="company" />
      <label htmlFor="position">Position:</label>
      <input type="text" name="position" id="postion" />
      <label htmlFor="start-year">Start Year:</label>
      <input type="text" name="startYear" id="start-year" />
      <label htmlFor="end-year">End Year:</label>
      <input
        type="text"
        name="endYear"
        id="end-year"
        placeholder="If not finished, type 'now'"
      />
      <div className="btn-container">
        <button className="button">Update</button>
      </div>
    </form>
  );
}

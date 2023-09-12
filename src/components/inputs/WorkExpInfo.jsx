export default function WorkExpInfo({ onAdd, data, deleteFunc }) {
  const isData = data.length !== 0;
  return (
    <form action="#" className="education-info form-container" onSubmit={onAdd}>
      <h2>Work Experience</h2>
      <hr />
      {isData
        ? data.map((el) => (
            <div className="data-added" key={el.company} id={el.company}>
              {el.company}
              <span className="data-delete-button" onClick={deleteFunc}>x</span>
            </div>
          ))
        : null}
      <label htmlFor="company">Company:</label>
      <input type="text" name="company" id="company" required />
      <label htmlFor="position">Position:</label>
      <input type="text" name="position" id="postion" required />
      <label htmlFor="start-year">Start Year:</label>
      <input type="text" name="startYear" id="start-year" required />
      <label htmlFor="end-year">End Year:</label>
      <input
        type="text"
        name="endYear"
        id="end-year"
        placeholder="If not finished, type 'now'"
        required
      />
      <div className="btn-container">
        <button className="button">Add</button>
      </div>
    </form>
  );
}

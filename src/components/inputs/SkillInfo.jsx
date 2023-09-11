export default function SkillInfo({ onAdd, data }) {
  const isData = data.length !== 0;
  return (
    <form action="#" className="skill-info form-container" onSubmit={onAdd}>
      <h2>Skills</h2>
      <hr />
      {isData
        ? data.map((el) => (
            <div className="data-added" key={el}>
              {el}
              <span className="data-delete-button">x</span>
            </div>
          ))
        : null}
      <label htmlFor="skills"></label>
      <input type="text" name="skills" id="skills" required />
      <div className="btn-container">
        <button className="button">Add</button>
      </div>
    </form>
  );
}

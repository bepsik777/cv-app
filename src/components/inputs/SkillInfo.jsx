import EditPopup from "../EditPopup.jsx";

export default function SkillInfo({ onAdd, data, deleteFunc }) {
  const isData = data.length !== 0;

  return (
    <>
      <div className="form-container">
        <h2>Skills</h2>
        <hr />
        {isData ? data.map((el) => <EditPopup key={el} el={el} deleteFunc={deleteFunc}/>) : null}
        <form action="#" className="skill-info form-container" onSubmit={onAdd}>
          <label htmlFor="skills"></label>
          <input type="text" name="skills" id="skills" required />
          <div className="btn-container">
            <button className="button">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

// {isData
//   ? data.map((el) => (
//       <div className="data-added" key={el} id={el}>
//         {el}
//         <button className="data-delete-button" onClick={deleteFunc}>
//           x
//         </button>
//         <button
//           className="data-delete-button"
//           onClick={(e) => handleShowPopup(e)}
//         >
//           e
//         </button>
//       </div>
//     ))
//   : null}

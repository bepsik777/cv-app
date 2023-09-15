import { useState } from "react";

export default function EditPopup({ el, deleteFunc, editFunc, data }) {
  const [popupHidden, setPopupHidden] = useState(true);
  let keys;
  let id;
  const indexOfEl = data.indexOf(el);
  const type = typeof el;

  if (typeof el === "object") {
    keys = Object.keys(el);
    id = keys[0];
  } else {
    keys = el;
    id = el;
  }

  const handleEditPopup = (e) => {
    e.preventDefault();
    popupHidden ? setPopupHidden(false) : setPopupHidden(true);
  };

  const handleEditButton = (e) => {
    editFunc(e);
    handleEditPopup(e);
  };

  return (
    <div className="data-added" key={id} id={type === "object" ? el[id] : el}>
      {type === "object" ? el[id] : el}
      <button className="data-delete-button" onClick={deleteFunc}>
        x
      </button>
      <button
        className="data-delete-button"
        onClick={(e) => handleEditPopup(e)}
      >
        e
      </button>

      {popupHidden === false ? (
        <form
          action="#"
          className="edit-form"
          //   onSubmit={editFunc}
          onSubmit={(e) => handleEditButton(e)}
          data-index={indexOfEl}
        >
          {typeof keys === "object" ? (
            keys.map((propertie) => (
              <>
                <label htmlFor="skill">{propertie}</label>
                <input
                  type="text"
                  name={propertie}
                  id="skill"
                  defaultValue={el[propertie]}
                  required
                />
              </>
            ))
          ) : (
            <>
              <label htmlFor="skill">Skill</label>
              <input
                type="text"
                name="skills"
                id="skills"
                defaultValue={el}
                required
              />
            </>
          )}

          <button className="edit-button">Edit</button>
        </form>
      ) : null}
    </div>
  );
}

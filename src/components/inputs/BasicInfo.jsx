// import { useState } from "react";

export default function BasicInfo({onUpdate}) {


  return (
    <div className="form-container">
    <form action="#" className="basic-info form-container" onSubmit={onUpdate}>
      <h2>Basic Info</h2>
      <hr />
      <label htmlFor="firstName"> First Name </label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="lastName"> Last Name </label>
      <input type="text" name="lastName" id="lastName" />
      <label htmlFor="title"> Title </label>
      <input type="text" name="title" id="title" />
      <label htmlFor="about"> About </label>
      <textarea name="about" id="about" cols="30" rows="10"></textarea>
      <div className="btn-container">
        <button className="update-button button"
        >Update</button>
      </div>
    </form>
    </div>
  );
}

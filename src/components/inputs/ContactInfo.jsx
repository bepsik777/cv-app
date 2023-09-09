export default function ContactInfo() {
  return (
    <form action="#" className="contact-info form-container">
      <h2>Contact Info</h2>
      <hr />
      <label htmlFor="email">E-mail Adress:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" name="phone" id="phone" />
      <label htmlFor="location">Adress:</label>
      <input type="text" name="loaction" id="location" />
      <label htmlFor="github">Github:</label>
      <input type="text" name="github" id="github" />
      <label htmlFor="linkedin">Linkedin:</label>
      <input type="text" name="linkedin" id="linkedin" />
      <div className="btn-container">
        <button className="update-button button">Update</button>
      </div>
    </form>
  );
}

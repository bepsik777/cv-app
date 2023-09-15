export default function ContactInfo({ onUpdate }) {
  return (
    <div className="form-container">
      <form
        action="#"
        className="contact-info form-container"
        onSubmit={onUpdate}
      >
        <h2>Contact Info</h2>
        <hr />
        <label htmlFor="email">E-mail Adress:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" name="phoneNumber" id="phone" />
        <label htmlFor="location">Adress:</label>
        <input type="text" name="loaction" id="location" />
        <label htmlFor="github">Github:</label>
        <input type="text" name="githubUrl" id="github" />
        <label htmlFor="linkedin">Linkedin:</label>
        <input type="text" name="linkedinUrl" id="linkedin" />
        <div className="btn-container">
          <button className="update-button button">Update</button>
        </div>
      </form>
    </div>
  );
}

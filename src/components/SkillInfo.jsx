export default function SkillInfo() {
    return (
        <form action="#" className="skill-info form-container">
            <h2>Skills</h2>
            <hr />
            <label htmlFor="skills"></label>
            <input type="text" name="skills" id="skills" />
            <div className="btn-container">
                <button className="button">Update</button>
            </div>
        </form>
    )
}
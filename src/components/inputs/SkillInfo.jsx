export default function SkillInfo({onAdd}) {
    return (
        <form action="#" className="skill-info form-container" onSubmit={onAdd}>
            <h2>Skills</h2>
            <hr />
            <label htmlFor="skills"></label>
            <input type="text" name="skills" id="skills" required/>
            <div className="btn-container">
                <button className="button">Add</button>
            </div>
        </form>
    )
}
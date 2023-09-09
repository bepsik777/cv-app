export default function EducationOutput() {
    return (
        <div className="education output">
            <h3>Education</h3>
            <hr />
            {/* Here it is probably gonna receive an array, and for each item in the array it is going
                to create a div 
            */}
            <EducationSection/>
            <EducationSection/>
            <EducationSection/>
            <EducationSection/>

        </div>
    )
}

function EducationSection() {
    return (
        <div className="edu-output-section">
            <div className="edu-section-header">
                <p className="institution-name"><b>Hogwart</b></p>
                <p className="time-span">2027 - now</p>
            </div>
            <li className="course-list">Computer Science</li>
        </div>
    )
}
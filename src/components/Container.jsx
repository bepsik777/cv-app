import  BasicInfo  from "./BasicInfo.jsx"
import ContactInfo from "./ContactInfo.jsx"
import EducationInfo from "./EducationInfo.jsx"
import WorkExpInfo from "./WorkExpInfo.jsx"
import SkillInfo from "./SkillInfo.jsx"

function CvInputContainer() {
    return (
        <div className="input-container">
            <BasicInfo/>
            <ContactInfo/>
            <EducationInfo/>
            <WorkExpInfo/>
            <SkillInfo/>
        </div>
    )
}

function CvOutputContainer() {
    return (
        <div className="output-container"></div>
    )
}


export {CvInputContainer, CvOutputContainer}
import  BasicInfo  from "./inputs/BasicInfo.jsx"
import ContactInfo from "./inputs/ContactInfo.jsx"
import EducationInfo from "./inputs/EducationInfo.jsx"
import WorkExpInfo from "./inputs/WorkExpInfo.jsx"
import SkillInfo from "./inputs/SkillInfo.jsx"
import BasicInfoOutput from "./outputs/BasicInfoOutput.jsx"
import ContactInfoOutput from "./outputs/contactInfoOutput.jsx"
import EducationOutput from "./outputs/EducationInfoOutput.jsx"
import ExperienceOutput from "./outputs/ExperienceInfoOutput.jsx"
import SkillOutput from "./outputs/SkillsInfoOutput.jsx"

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
        <div className="output-container">
            <div className="cv-container">
                <BasicInfoOutput/>
                <ContactInfoOutput/>
                <div className="education-experience-container">
                <EducationOutput/>
                <ExperienceOutput/>
                </div>
                <SkillOutput/>
            </div>
        </div>
    )
}


export {CvInputContainer, CvOutputContainer}
import { useState } from "react";
import BasicInfo from "./components/inputs/BasicInfo.jsx";
import ContactInfo from "./components/inputs/ContactInfo.jsx";
import EducationInfo from "./components/inputs/EducationInfo.jsx";
import WorkExpInfo from "./components/inputs/WorkExpInfo.jsx";
import SkillInfo from "./components/inputs/SkillInfo.jsx";
import BasicInfoOutput from "./components/outputs/BasicInfoOutput.jsx";
import ContactInfoOutput from "./components/outputs/contactInfoOutput.jsx";
import EducationOutput from "./components/outputs/EducationInfoOutput.jsx";
import ExperienceOutput from "./components/outputs/ExperienceInfoOutput.jsx";
import SkillOutput from "./components/outputs/SkillsInfoOutput.jsx";
import {
  basicInfoData,
  contactData,
  educationData,
  experienceData,
  skillsData,
} from "./Data.js";

function App() {
  const [basicData, setBasicData] = useState(basicInfoData);
  const [contact, setContact] = useState(contactData);

  function getInputs(form) {
    const childrens = Array.from(form.childNodes);
    const inputs = childrens.filter(
      (child) => child.localName === "input" || child.localName === "textarea"
    );

    return inputs;
  }

  function onUpdate(e, func, data) {
    e.preventDefault();
    const inputs = getInputs(e.target);
    let newObj = { ...data };
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== "") {
        newObj = { ...newObj, [inputs[i].name]: inputs[i].value };
      }
    }
    inputs.forEach((input) => (input.value = ""));
    func(newObj);
  }

  return (
    <>
      <div className="input-container">
        <BasicInfo onUpdate={(e) => onUpdate(e, setBasicData, basicData)} />
        <ContactInfo />
        <EducationInfo />
        <WorkExpInfo />
        <SkillInfo />
      </div>
      <div className="output-container">
        <div className="cv-container">
          <BasicInfoOutput
            firstName={basicData.firstName}
            lastName={basicData.lastName}
            title={basicData.title}
            about={basicData.about}
          />
          <ContactInfoOutput />
          <div className="education-experience-container">
            <EducationOutput />
            <ExperienceOutput />
          </div>
          <SkillOutput />
        </div>
      </div>
    </>
  );
}

export default App;

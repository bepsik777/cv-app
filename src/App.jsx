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
import { basicInfoData, contactData } from "./Data.js";

function App() {
  const [basicData, setBasicData] = useState(basicInfoData);
  const [contact, setContact] = useState(contactData);
  const [eduData, setEduData] = useState([]);
  const [expInfo, setExpInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);

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

  const onAdd = (e, func, data) => {
    e.preventDefault();
    const inputs = getInputs(e.target);
    const newObj = {};

    inputs.forEach((input) => {
      newObj[input.name] = input.value;
      input.value = "";
    });

    func([...data, newObj]);
  };

  const onAddSkill = (e, func, data) => {
    e.preventDefault();
    const inputs = getInputs(e.target);

    func([...data, inputs[0].value]);
    inputs[0].value = "";
  };

  const deleteEntry = (e, func, data) => {
    e.preventDefault();
    const key = e.target.parentElement.id;
    const newArr = data.filter((el) => {
      if (el.company) return el.company !== key;
      if (el.institution) return el.institution !== key;
      return el !== key;
    });
    console.log(newArr);
    console.log(key);
    func(newArr);
  };

  const editInfo = (e, func, data) => {
    e.preventDefault();
    const inputs = getInputs(e.target);
    const index = e.target.dataset.index;

    // if input is skill input
    if (inputs.length === 1) {
      const newValue = inputs[0].value;
      const newData = data;
      newData[index] = newValue;
      return func([...newData]);
    }

    const newObject = {};

    inputs.forEach((input) => {
      newObject[input.name] = input.value;
    });

    const newData = data;
    newData[index] = newObject;
    func([...newData]);
    // handleEditPopup(e)
    console.log(data, "data");
    console.log(index, "index");
    console.log(data[index], "target data");
    console.log(newData, "new data");
  };

  return (
    <>
      <div className="input-container">
        <BasicInfo onUpdate={(e) => onUpdate(e, setBasicData, basicData)} />
        <ContactInfo onUpdate={(e) => onUpdate(e, setContact, contact)} />
        <EducationInfo
          onAdd={(e) => onAdd(e, setEduData, eduData)}
          data={eduData}
          deleteFunc={(e) => deleteEntry(e, setEduData, eduData)}
          editFunc={(e) => editInfo(e, setEduData, eduData)}
        />
        <WorkExpInfo
          onAdd={(e) => onAdd(e, setExpInfo, expInfo)}
          data={expInfo}
          deleteFunc={(e) => deleteEntry(e, setExpInfo, expInfo)}
          editFunc={(e) => editInfo(e, setExpInfo, expInfo)}
        />
        <SkillInfo
          onAdd={(e) => onAddSkill(e, setSkillInfo, skillInfo)}
          data={skillInfo}
          deleteFunc={(e) => deleteEntry(e, setSkillInfo, skillInfo)}
          editFunc={(e) => editInfo(e, setSkillInfo, skillInfo)}
        />
      </div>
      <div className="output-container">
        <div className="cv-container">
          <BasicInfoOutput
            firstName={basicData.firstName}
            lastName={basicData.lastName}
            title={basicData.title}
            about={basicData.about}
          />
          <ContactInfoOutput
            email={contact.email}
            phoneNumber={contact.phoneNumber}
            location={contact.location}
            githubUrl={contact.githubUrl}
            linkedinUrl={contact.linkedinUrl}
          />
          <div className="education-experience-container">
            <EducationOutput eduData={eduData} />
            <ExperienceOutput expInfo={expInfo} />
          </div>
          <SkillOutput skillInfo={skillInfo} />
        </div>
      </div>
    </>
  );
}

export default App;

/*
- Make porządek with all the keys so console won't throw error at me
*/

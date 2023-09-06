import  BasicInfo  from "./BasicInfo.jsx"
import ContactInfo from "./ContactInfo.jsx"

function CvInputContainer() {
    return (
        <div className="input-container">
            <BasicInfo/>
            <ContactInfo/>
        </div>
    )
}

function CvOutputContainer() {
    return (
        <div className="output-container"></div>
    )
}


export {CvInputContainer, CvOutputContainer}
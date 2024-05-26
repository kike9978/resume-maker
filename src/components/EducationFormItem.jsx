import { useState } from "react"
import Button from "./Button"
import EducationForm from "./EducationForm"

export default function EducationFormItem({ title, institution, date, id, setCV, cv }) {
    const [isEditable, setIsEditable] = useState(false)
    const education = { title, institution, date, id }


    function handleEducationEdit(newEducationInfo) {
        const nextEducations = [...cv.educations].map(w => {
            if (w.id === education.id) {
                return { ...newEducationInfo }
            } else {
                return w
            }
        }
        )

        setCV({ ...cv, educations: nextEducations })
        setIsEditable(false)

    }

    return (
        <article className="flex justify-between p-4">
            {isEditable ?
                <EducationForm education={education} onSubmit={handleEducationEdit} onCancelClick={() => setIsEditable(false)} />
                :
                <p>{title}</p>
            }

            {!isEditable && <Button label={"Edit"} onClick={() => setIsEditable(true)} />}
            {/* <Button label={isEditable ? "Cancel" : "Edit"} onClick={() => setIsEditable(!isEditable)} /> */}
        </article>
    )
}
import { useState } from "react"
import Button from "./Button"

export default function WorkFormItem({ title, company, date, description }) {
    const [isEditable, setIsEditable] = useState(false)
    return (
        <article className="flex justify-between p-4">

            {isEditable ? "soy editable" : <p>{title}</p>}
            <Button label={isEditable ? "Save" : "Edit"} onClick={() => setIsEditable(!isEditable)} />

        </article>
    )
}
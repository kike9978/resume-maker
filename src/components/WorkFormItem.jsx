import { useState } from "react"

export default function WorkFormItem({ title, company, date, description }) {
    const [isEditable, setIsEditable] = useState(false)
    return (
        <article className="flex justify-between p-4">

            {isEditable ? "soy editable" : <p>{title}</p>}

            <button
                onClick={() => setIsEditable(!isEditable)}>{isEditable ? "Save" : "Edit"}</button>
        </article>
    )
}
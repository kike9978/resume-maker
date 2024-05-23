import { useState } from "react"

export default function WorkFormItem({ title, company, date, description }) {
    const [isEditable, setIsEditable] = useState(false)
    return (
        <article>
            {title}
            {isEditable && "soy editable"}

            <button
                onClick={() => setIsEditable(!isEditable)}>{isEditable ? "Save" : "Edit"}</button>
        </article>
    )
}
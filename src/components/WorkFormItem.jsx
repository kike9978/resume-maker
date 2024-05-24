import { useState } from "react"
import Button from "./Button"
import WorkForm from "./WorkForm"

export default function WorkFormItem({ title, company, date, description, id, setCV, cv }) {
    const [isEditable, setIsEditable] = useState(false)
    const work = { title, company, date, description, id }


    function handleWorkEdit(newWorkInfo) {
        const nextWorks = [...cv.works].map(w => {
            if (w.id === work.id) {
                return { ...newWorkInfo }
            } else {
                return w
            }
        }
        )

        setCV({ ...cv, works: nextWorks })
        setIsEditable(false)

    }

    return (
        <article className="flex justify-between p-4">

            {isEditable ?


                <WorkForm work={work} onSubmit={handleWorkEdit} />

                :

                <p>{title}</p>

            }


            <Button label={isEditable ? "Cancel" : "Edit"} onClick={() => setIsEditable(!isEditable)} />

        </article>
    )
}
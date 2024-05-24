import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"


export default function EducationForm({ onSubmit, education }) {

    const isEditable = education && true

    const emptyEducation = {
        title: "",
        company: "",
        description: "",
        date: ""
    }

    const [nextEducationInfo, setNextEducationInfo] = useState(education ? education : emptyEducation)


    return (
        <section className='border border-solid rounded-xl border-slate-200 p-2'>
            <form
                className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(nextEducationInfo)

                    !isEditable && setNextEducationInfo({ ...emptyEducation })

                }
                }>

                <Input
                    label={"Job Title"}
                    name={"jobTitle"}
                    value={nextEducationInfo.title}
                    onChange={(e) => {
                        setNextEducationInfo({ ...nextEducationInfo, title: e.target.value })
                    }}
                />
                <Input
                    label={"Company"}
                    name={"company"}
                    value={nextEducationInfo.company}
                    onChange={(e) => {
                        setNextEducationInfo({ ...nextEducationInfo, company: e.target.value })
                    }}
                />

                <Textarea
                    label={"Description"}
                    name={"description"}
                    value={nextEducationInfo.description}
                    onChange={(e) => {
                        setNextEducationInfo({ ...nextEducationInfo, description: e.target.value })
                    }}
                />

                <Input
                    label={"Date"}
                    name={"date"}
                    value={nextEducationInfo.date}
                    onChange={(e) => {
                        setNextEducationInfo({ ...nextEducationInfo, date: e.target.value })
                    }}
                />

                <Button label={isEditable ? "Edit" : "Agregar Experiencia"}
                />
            </form>
        </section>

    )
}
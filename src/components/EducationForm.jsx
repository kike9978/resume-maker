import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"


export default function EducationForm({ onSubmit, education }) {

    const isEditable = education && true

    const emptyEducation = {
        title: "",
        institution: "",
        date: ""
    }

    const [nextEducationInfo, setNextEducationInfo] = useState(education ? education : emptyEducation)


    return (
        <section className='border border-solid rounded-xl border-slate-200 p-2 w-full'>
            <form
                className="flex flex-col gap-2"
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
                    label={"Insitution"}
                    name={"institution"}
                    value={nextEducationInfo.institution}
                    onChange={(e) => {
                        setNextEducationInfo({ ...nextEducationInfo, institution: e.target.value })
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

                <Button label={isEditable ? "Edit" : "Add education"}
                />
            </form>
        </section>

    )
}
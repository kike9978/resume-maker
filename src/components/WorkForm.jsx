import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"


export default function WorkForm({ onSubmit, work, onCancelClick }) {

    const isEditable = work && true

    const emptyWork = {
        title: "",
        company: "",
        description: "",
        date: ""
    }

    const [nextWorkInfo, setNextWorkInfo] = useState(work ? work : emptyWork)


    return (
        <section className='border border-solid rounded-xl border-slate-200 p-2 w-full'>
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(nextWorkInfo)
                    !isEditable && setNextWorkInfo({ ...emptyWork })
                }
                }>

                <Input
                    label={"Job Title"}
                    name={"jobTitle"}
                    value={nextWorkInfo.title}
                    onChange={(e) => {
                        setNextWorkInfo({ ...nextWorkInfo, title: e.target.value })
                    }}
                />
                <Input
                    label={"Company"}
                    name={"company"}
                    value={nextWorkInfo.company}
                    onChange={(e) => {
                        setNextWorkInfo({ ...nextWorkInfo, company: e.target.value })
                    }}
                />

                <Textarea
                    label={"Description"}
                    name={"description"}
                    value={nextWorkInfo.description}
                    onChange={(e) => {
                        setNextWorkInfo({ ...nextWorkInfo, description: e.target.value })
                    }}
                />

                <Input
                    label={"Date"}
                    name={"date"}
                    value={nextWorkInfo.date}
                    onChange={(e) => {
                        setNextWorkInfo({ ...nextWorkInfo, date: e.target.value })
                    }}
                />
                <div className="flex gap-2 justify-between">

                    <Button type={"button"} label={"Cancel"} hierarchy={"secondary"} onClick={onCancelClick} />
                    <Button label={isEditable ? "Save" : "Add experience"}
                    />
                </div>
            </form>
        </section>

    )
}
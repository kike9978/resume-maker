import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"


export default function WorkForm({ onSubmit }) {

    const emptyWork = {
        title: "",
        company: "",
        description: "",
        date: ""
    }

    const [nextWorkInfo, setNextWorkInfo] = useState(emptyWork)


    return (
        <section className='border border-solid rounded-xl border-slate-200 p-2'>
            <form
                className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(nextWorkInfo)
                    setNextWorkInfo({ ...emptyWork })
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
                <button>Agregar Experiencia</button>
            </form>
        </section>

    )
}
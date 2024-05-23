import { useState } from "react"


export default function WorkForm({ onSubmit }) {

    const emptyWork = {
        title: "",
        company: "",
        description: "",
        date: ""
    }

    const [nextWorkInfo, setNextWorkInfo] = useState(emptyWork)


    return (
        <section className='bg-blue-300'>
            <form
                className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(nextWorkInfo)
                    setNextWorkInfo({ ...emptyWork })
                }
                }>

                <label htmlFor="">
                    Job Title: {" "}
                    <input
                        type="text"
                        name='jobTitle'
                        value={nextWorkInfo.title}
                        onChange={(e) => {
                            setNextWorkInfo({ ...nextWorkInfo, title: e.target.value })
                        }} />
                </label>
                <label htmlFor="">
                    Company: {" "}
                    <input
                        type="text"
                        name='jobTitle'
                        value={nextWorkInfo.company}
                        onChange={(e) => {
                            setNextWorkInfo({ ...nextWorkInfo, company: e.target.value })
                        }} />
                </label>
                <label htmlFor="">
                    Description: {" "}

                    <textarea name='jobTitle'
                        value={nextWorkInfo.description}
                        onChange={(e) => {
                            setNextWorkInfo({ ...nextWorkInfo, description: e.target.value })
                        }} />
                </label>
                <label htmlFor="">
                    Date: {" "}
                    <input
                        type="text"
                        name='jobDate'
                        value={nextWorkInfo.date}
                        onChange={(e) => {
                            setNextWorkInfo({ ...nextWorkInfo, date: e.target.value })
                        }} />
                </label>



                <button>Agregar Experiencia</button>
            </form>
        </section>

    )
}
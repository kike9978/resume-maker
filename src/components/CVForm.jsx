import WorkForm from "./WorkForm"
import WorkFormItem from "./WorkFormItem"

export default function CVForm({ setCV, cv, isAddingExperience, setIsAddingExperience, handleCreateExperience }) {
    return (
        <aside
            className='flex flex-col bg-red-100 print:hidden'>
            <label htmlFor="">
                First name(s): {" "}
                <input
                    type="text"
                    name='firstName'
                    value={cv.firstName}
                    onChange={(e) => setCV({ ...cv, firstName: e.target.value })} />
            </label>
            <label htmlFor="">
                Last name(s): {" "}
                <input
                    type="text"
                    name='lastName'
                    value={cv.lastName}
                    onChange={(e) => setCV({ ...cv, lastName: e.target.value })} />
            </label>
            <label htmlFor="">
                Work title: {" "}
                <input
                    type="text"
                    name='workTitle'
                    value={cv.workTitle}
                    onChange={(e) => setCV({ ...cv, workTitle: e.target.value })} />
            </label>
            <label htmlFor="">
                Email:{" "}
                <input
                    type="text"
                    name='email'
                    value={cv.email}
                    onChange={(e) => setCV({ ...cv, email: e.target.value })} />
            </label>
            <label htmlFor="">
                Phone Number:
                <input
                    type="number"
                    value={cv.phone}
                    onChange={(e) => setCV({ ...cv, phone: e.target.value })} />
            </label>
            <label htmlFor="">
                Website
                <input
                    type="url"
                    value={cv.website}
                    onChange={(e) => setCV({ ...cv, website: e.target.value })}
                />
                <span>Remember starting with https://.</span>
            </label>
            {isAddingExperience ?
                <WorkForm onSubmit={handleCreateExperience} /> :
                <button onClick={() => setIsAddingExperience(true)} className={"bg-black text-white"}>Agregar experiencia</button>
            }
            {cv.works.map((work) =>
                <WorkFormItem
                    key={work.id}
                    title={work.title}
                    description={work.description}
                    date={work.date}
                    company={work.company}

                />)}

        </aside>
    )
}
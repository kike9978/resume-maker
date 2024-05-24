import Input from "./Input"
import WorkForm from "./WorkForm"
import WorkFormItem from "./WorkFormItem"

export default function CVForm({ setCV, cv, isAddingExperience, setIsAddingExperience, handleCreateExperience }) {
    return (
        <aside
            className='flex flex-col shadow-md shadow-blue-100 m-5 rounded-lg p-4 print:hidden overflow-y-auto'>
            <Input
                label={"First name(s)"}
                name={"firstName"}
                value={cv.firstName}
                onChange={(e) => setCV({ ...cv, firstName: e.target.value })}
                placeholder={"Juan"}
            />
            <Input
                label={"Last name(s)"}
                name={"lastName"}
                value={cv.lastName}
                onChange={(e) => setCV({ ...cv, lastName: e.target.value })}
                placeholder={"Hernandez"}
            />
            <Input
                label={"Work title"}
                name={"workTitle"}
                value={cv.workTitle}
                onChange={(e) => setCV({ ...cv, workTitle: e.target.value })}
                placeholder={"Attorney"}
            />
            <Input
                label={"Email"}
                name={"workTitle"}
                type="email"
                value={cv.email}
                onChange={(e) => setCV({ ...cv, email: e.target.value })}
                placeholder={"e@mail.com"}
            />
            <Input
                label={"Phone number"}
                name={"phone"}
                type="number"
                value={cv.phone}
                onChange={(e) => setCV({ ...cv, phone: e.target.value })}
                placeholder={"684168658"}
            />
            <Input
                label={"Phone number"}
                name={"phone"}
                type="number"
                value={cv.phone}
                onChange={(e) => setCV({ ...cv, phone: e.target.value })}
                placeholder={"684168658"}
            />
            <Input
                label={"Website"}
                name={"website"}
                type="url"
                value={cv.website}
                onChange={(e) => setCV({ ...cv, website: e.target.value })}
                placeholder={"https://mywebsite.com"}
                suggestion={"Remember starting with https://."}
            />

            {isAddingExperience ?
                <WorkForm onSubmit={handleCreateExperience} /> :
                <button onClick={() => setIsAddingExperience(true)} className={"bg-black text-white"}>Agregar experiencia</button>
            }

            <details>
                <summary>Work Experience</summary>
                {cv.works.map((work, index) =>
                    <>
                        <WorkFormItem
                            key={work.id}
                            title={work.title}
                            description={work.description}
                            date={work.date}
                            company={work.company}


                        />
                        {cv.works.length - 1 > index && <hr />}
                    </>
                )}

            </details>

        </aside>
    )
}
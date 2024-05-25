import Button from "./Button"
import EducationForm from "./EducationForm"
import FormCard from "./FormCard"
import Input from "./Input"
import Textarea from "./Textarea"
import WorkForm from "./WorkForm"
import WorkFormItem from "./WorkFormItem"

export default function CVForm({ setCV, cv, isAddingExperience, setIsAddingExperience, handleCreateExperience, handleCreateEducation, isAddingEducation, setIsAddingEducation }) {

    const skills = cv.skills.map(skill => skill.title).join(", ")
    const generalInfo = cv.generalInfo;


    function handleOnSkillsChange(e) {
        let id = 0
        const nextSkills = e.target.value.split(", ")
        const finalSkills = []
        nextSkills.forEach(skill => finalSkills.push({ id: id++, title: skill }))

        // TODO check if id conflict

        setCV({ ...cv, skills: finalSkills })
    }
    return (
        <aside
            className='flex flex-col m-5 print:hidden overflow-y-auto gap-6 basis-4/5 max-w-96 pb-4'>
            <FormCard >

                <h2>General information</h2>
                <Input
                    label={"First name(s)"}
                    name={"firstName"}
                    value={generalInfo.firstName}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, firstName: e.target.value } })}
                    placeholder={"Juan"}
                />
                <Input
                    label={"Last name(s)"}
                    name={"lastName"}
                    value={generalInfo.lastName}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, lastName: e.target.value } })}
                    placeholder={"Hernandez"}
                />
                <Input
                    label={"Work title"}
                    name={"workTitle"}
                    value={generalInfo.workTitle}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, workTitle: e.target.value } })}
                    placeholder={"Attorney"}
                />
                <Input
                    label={"Email"}
                    name={"email"}
                    type="email"
                    value={generalInfo.email}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, email: e.target.value } })}
                    placeholder={"e@mail.com"}
                />
                <Input
                    label={"Phone number"}
                    name={"phone"}
                    type="phone"
                    value={generalInfo.phone}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, phone: e.target.value } })}
                    placeholder={"684168658"}
                />
                <Input
                    label={"Website"}
                    name={"website"}
                    type="url"
                    value={generalInfo.website}
                    onChange={(e) => setCV({ ...cv, generalInfo: { ...generalInfo, website: e.target.value } })}
                    placeholder={"https://mywebsite.com"}
                    suggestion={"Remember starting with https://."}
                />
            </FormCard>

            <FormCard>

                {isAddingExperience ?
                    <WorkForm onSubmit={handleCreateExperience} onCancelClick={() => setIsAddingExperience(false)} /> :
                    <Button onClick={() => setIsAddingExperience(true)} label={"Agregar experiencia"} />
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
                                id={work.id}
                                setCV={setCV}
                                cv={cv}


                            />
                            {cv.works.length - 1 > index && <hr />}
                        </>
                    )}

                </details>

            </FormCard>
            <FormCard>

                {isAddingEducation ?
                    <EducationForm onSubmit={handleCreateEducation} /> :
                    <Button onClick={() => setIsAddingEducation(true)} label={"Add Education"} />
                }

                <details>
                    <summary>Education</summary>
                    {cv.educations.map((education, index) =>
                        <>
                            <WorkFormItem
                                key={education.id}
                                title={education.title}
                                description={education.description}
                                date={education.date}
                                company={education.company}
                                id={education.id}
                                setCV={setCV}
                                cv={cv}


                            />
                            {cv.educations.length - 1 > index && <hr />}
                        </>
                    )}

                </details>

            </FormCard>

            <FormCard>

                <Textarea
                    label={"Skills"}
                    name={"skills"}
                    value={skills}
                    onChange={handleOnSkillsChange}
                    suggestion={`Add each skill separating them by a comma and a space (, ) `} />

            </FormCard>

        </aside>
    )
}
import WorkExperience from "./WorkExperience"

function EmptyCV() {
    return (<div className="flex justify-center items-center h-full">Fill the form</div>)
}

export default function CV({ cv }) {
    const works = cv.works
    const educations = cv.educations
    const skills = cv.skills

    const isEmpty = works.length === 0 && educations.length === 0 && skills.length === 0

    return (

        <main className="print:w-full overflow-y-auto flex-grow p-4 bg-white m-5">
            {isEmpty ? <EmptyCV /> :
                <>
                    <section className="text-center">
                        <h1 className="text-3xl">{`${cv.firstName} ${cv.lastName}`}</h1>
                        <h2>{cv.workTitle}</h2>
                        <div className="flex text-sm text-slate-400 gap-2 w-full justify-center">
                            <p>{cv.email}</p>
                            <p>{cv.phone}</p>
                            <p><a href={cv.website} target='_blank' className="text-blue-400">{cv.website}</a></p>
                        </div>
                    </section>
                    <hr />
                    {works.length > 0 && <>
                        <section>
                            <h2>Work experience</h2>
                            {works.map(work => {
                                return (
                                    <WorkExperience
                                        title={work.title}
                                        description={work.description}
                                        company={work.company}
                                        date={work.date}
                                        key={work.id}
                                    />
                                )
                            })}


                        </section>
                        <hr /></>}


                    {educations.length > 0 &&
                        <>
                            <section>
                                <h2>Education</h2>
                                {educations.map(education => {
                                    return (
                                        <div key={education.id}>{education.title}</div>
                                    )
                                })}


                            </section>
                            <hr />
                        </>}



                    {skills.length > 0 && <section>
                        <h2>Skills:</h2>
                        <div className="flex gap-2 flex-wrap">
                            {skills.map(skill => {
                                return <p key={skill.id} className="bg-slate-100 text-slate-800 rounded-2xl border border-solid border-slate-700 px-2 py-1">{skill.title}</p>
                            })}
                        </div>
                    </section>}
                </>

            }


        </main>)
}
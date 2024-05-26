import WorkExperience from "./WorkExperience"

function EmptyCV() {
    return (<div className="flex justify-center items-center h-full flex-col">
        <p className="text-xl">No information to show</p>
        <p className="text-slate-600">Fill the form to create your resumé</p>
    </div>)
}

export default function CV({ cv }) {
    const works = cv.works
    const educations = cv.educations
    const skills = cv.skills
    const generalInfo = cv.generalInfo


    const generalInfoEmpty = Object.values(generalInfo).every(entry => !!entry === false)

    const isEmpty = works.length === 0 && educations.length === 0 && skills.length === 0 && generalInfoEmpty


    return (

        <main className="print:w-full overflow-y-auto flex-grow p-4 bg-white m-5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 w-full">
            {isEmpty ? <EmptyCV /> :
                <>
                    {!generalInfoEmpty &&
                        <>
                            <section className="text-center">
                                <h1 className="text-3xl">{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
                                <h2>{generalInfo.workTitle}</h2>
                                <div className="flex text-sm text-slate-400 gap-2 w-full justify-center">
                                    <p>{generalInfo.email}</p>
                                    <p>{generalInfo.phone}</p>
                                    <p><a href={generalInfo.website} target='_blank' className="text-blue-400">{generalInfo.website}</a></p>
                                </div>
                            </section>
                            <hr />
                        </>

                    }
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
                        <hr />
                    </>}


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
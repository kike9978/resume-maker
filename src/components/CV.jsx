import WorkExperience from "./WorkExperience"

export default function CV({ cv }) {
    const works = cv.works
    const educations = cv.educations
    const skills = cv.skills

    return (
        <main className="print:w-full overflow-y-auto flex-grow p-4">
            <section>
                <h1 className="text-3xl">{`${cv.firstName} ${cv.lastName}`}</h1>
                <h2>{cv.workTitle}</h2>
                <div className="flex text-sm text-slate-400 gap-2 w-full justify-center">
                    <p>{cv.email}</p>
                    <p>{cv.phone}</p>
                    <p><a href={cv.website} target='_blank' className="text-blue-400">{cv.website}</a></p>
                </div>
            </section>
            <hr />
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
            <section>
                <h2>Education</h2>
                {educations.map(education => {
                    return (
                        <div key={education.id}>{education.title}</div>
                    )
                })}


            </section>
            <hr />
            <section>
                <h2>Skills:</h2>
                <div className="flex gap-4">
                    {skills.map(skill => {
                        return <p key={skill.id}>{skill.title}</p>
                    })}
                </div>
            </section>

        </main>)
}
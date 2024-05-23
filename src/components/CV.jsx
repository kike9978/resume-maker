import WorkExperience from "./WorkExperience"

export default function CV({ cv, works }) {

    return (
        <main>
            <section>
                <p className="text-3xl">{`${cv.firstName} ${cv.lastName}`}</p>
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



            </section>
            <section>
                <h2>Skills:</h2>
                <div className="flex gap-4">
                    <p>pompis</p>
                    <p>pompis</p>
                    <p>pompis</p>
                    <p>pompis</p>
                </div>
            </section>

        </main>)
}
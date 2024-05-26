export default function WorkExperience({ title, company, description, date }) {


    return (
        <article className="py-5">
            <div className="flex items-baseline justify-between">
                <div className="flex flex-col">
                    <h3 className="text-xl">
                        {title}
                    </h3>
                    <p className="italic text-slate-500">{company}</p>
                </div>
                <p className="text-sm text-slate-400">{date}</p>
            </div>
            <p className="mt-4">{description}</p>
        </article>
    )
}
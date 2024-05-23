export default function WorkExperience({ title, company, description, date }) {


    return (
        <article className="p-10">
            <div className="flex items-baseline">
                <div className="flex flex-col">
                    <h3 className="text-xl">
                        {title}
                    </h3>
                    <p>{company}</p>
                </div>
                <p>{date}</p>
            </div>
            <p>{description}</p>
        </article>
    )
}
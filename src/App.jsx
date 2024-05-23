import { useState } from 'react'

const initialCV = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",


}
let nextId = -1
const workData = [
  {
    id: nextId++,
    title: "UX designer",
    company: "Sisu Technologies",
    description: "Es hora de los besos de chocolate",
    date: "2022 - 2024"
  },
  {
    id: nextId++,
    title: "UX designer",
    company: "Freelancer",
    description: "Es hora de los besos de chocolate",
    date: ""
  },
  {
    id: nextId++,
    title: "UX designer",
    company: "Sisu Technologies",
    description: "Es hora de los besos de chocolate",
    date: ""
  },
  {
    id: nextId++,
    title: "UX designer",
    company: "Sisu Technologies",
    description: "Es hora de los besos de chocolate",
    date: ""
  },

]

function WorkExperience({ title, company, description, date }) {


  return (
    <article>
      <h3>
        {title}
      </h3>
      <p>{company}</p>
      <p>{description}</p>
      <p>{date}</p>
    </article>
  )
}

function App() {
  const [cv, setCV] = useState(initialCV)
  const [isEditing, setIsEditing] = useState(true)

  return (
    <>

      <h1
        className='text-cyan-700 font-bold text-2xl'>Resumé maker</h1>
      <div className="flex">
        <button
          onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        {isEditing &&
          <aside
            className='flex flex-col bg-red-100'>
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
              Email:{" "}
              <input
                type="text"
                name='email'
                value={cv.email}
                onChange={(e) => setCV({ ...cv, email: e.target.value })} />
            </label>
            <label htmlFor="">
              Phone Number
              <input
                type="number"
              />
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
          </aside>}
        <main>
          <section>
            <p>Mi nombre es {`${cv.firstName} ${cv.lastName}`}</p>
            <p>Mi correo es {cv.email}</p>
            <p>Mi página es es <a href={cv.website} target='_blank'>{cv.website}</a></p>
          </section>
          <hr />
          <section>
            <h2>Work experience</h2>
            {workData.map(work => {
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

            <WorkExperience title={workData[0].title}
              description={workData[0].description}
              company={workData[0].company}
              date={workData[0].date} />

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

        </main>
      </div>
    </>
  )
}

export default App

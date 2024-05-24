import { useState } from 'react'
import CV from './components/CV'
import CVForm from './components/CVForm'

let nextId = 0

const initialCV = {
  firstName: "",
  lastName: "",
  workTitle: "",
  email: "",
  website: "",
  phone: "",
  works: [],
  educations: [],
  skills: []

}

const mockData = {
  firstName: "Jesús Enrique",
  lastName: "Mendoza López",
  workTitle: " UX designer | Front end developer",
  email: "kike.mendoza9978@gmail.com",
  website: "https://emendoza.me",
  phone: "+52 229 4832068",
  works: [
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
  ],
  educations: [{ id: 0, title: "Diseño de interación y animación", institution: "Ibero Puebla" }],
  skills: [{ id: 0, title: "after effects" }, { id: 1, title: "drawing" }]

}

function App() {
  const [cv, setCV] = useState(initialCV)
  const [isEditing, setIsEditing] = useState(true)
  const [isAddingExperience, setIsAddingExperience] = useState(false)

  const works = cv.works


  function handleCreateExperience(nextWorkInfo) {

    setCV({
      ...cv, works: [...works, {
        id: nextId++,
        title: nextWorkInfo.title,
        company: nextWorkInfo.company,
        description: nextWorkInfo.description,
        date: nextWorkInfo.date,
      }]
    })

    setIsAddingExperience(false)
  }

  return (
    <>
      <button className='print:hidden'
        onClick={() => window.print()}>
        Imprimir
      </button>
      <button className='print:hidden bg-black text-white'
        onClick={() => setCV({ ...mockData })}>
        Fill with mockup Data
      </button>
      <button className='print:hidden bg-black text-white'
        onClick={() => setCV({ ...initialCV })}>
        Empty from
      </button>

      <h1
        className='text-cyan-700 font-bold text-2xl print:hidden'>Resumé maker</h1>
      <div className="flex flex-grow overflow-hidden">
        <button
          className='print:hidden'
          onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
        {isEditing &&

          <CVForm
            setCV={setCV}
            cv={cv}
            isAddingExperience={isAddingExperience}
            setIsAddingExperience={setIsAddingExperience}
            handleCreateExperience={handleCreateExperience} />
        }
        <CV works={works} cv={cv} />
      </div>
    </>
  )
}

export default App

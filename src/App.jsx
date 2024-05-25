import { useState } from 'react'
import CV from './components/CV'
import CVForm from './components/CVForm'
import Button from './components/Button'

let nextId = 0

const initialCV = {
  generalInfo: {
    firstName: "",
    lastName: "",
    workTitle: "",
    email: "",
    website: "",
    phone: "",

  },
  works: [],
  educations: [],
  skills: []

}

const mockData = {
  generalInfo: {
    firstName: "Jesús Enrique",
    lastName: "Mendoza López",
    workTitle: " UX designer | Front end developer",
    email: "kike.mendoza9978@gmail.com",
    website: "https://emendoza.me",
    phone: "+52 229 4832068",

  },
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
  educations: [{ id: 0, title: "Diseño de interación y animación", institution: "Ibero Puebla", degree: "BA", date: "2015 - 2019" }],
  skills: [
    {
      id: 0,
      title: "After Effects"
    },
    {
      id: 1,
      title: "Drawing"
    },
    {
      id: 2,
      title: "Maya"
    },
    {
      id: 3,
      title: "Blender"
    },
    {
      id: 4,
      title: "Illustrator"
    },
    {
      id: 5,
      title: "HTML/CSS"
    },
    {
      id: 6,
      title: "Javascript"
    },
    {
      id: 7,
      title: "React"
    },
    {
      id: 8,
      title: "Photoshop"
    },
    {
      id: 9,
      title: "Premiere"
    },
    {
      id: 10,
      title: "Astro"
    },
    {
      id: 10,
      title: "Animate CC"
    },
  ]

}

function App() {
  const [cv, setCV] = useState(initialCV)
  const [isEditing, setIsEditing] = useState(true)
  const [isAddingExperience, setIsAddingExperience] = useState(false)
  const [isAddingEducation, setIsAddingEducation] = useState(false)

  const works = cv.works
  const educations = cv.educations


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
  function handleCreateEducation(nextEducationInfo) {

    setCV({
      ...cv, educations: [...educations, {
        id: nextId++,
        title: nextEducationInfo.title,
        company: nextEducationInfo.company,
        description: nextEducationInfo.description,
        date: nextEducationInfo.date,
      }]
    })

    setIsAddingExperience(false)
  }

  return (
    <>
      <h1
        className='text-cyan-700 font-bold text-2xl print:hidden'>Resumé maker</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button onClick={() => setCV({ ...mockData })} label={"Fill with mockup data"} hierarchy="secondary" />
          <Button onClick={() => setCV({ ...initialCV })} label={"Empty form"} hierarchy='secondary' />
          <Button onClick={() => setIsEditing(!isEditing)} label={isEditing ? "Save" : "Edit"} hierarchy='secondary' />
        </div>
        <Button onClick={() => window.print()} label={"Imprimir"} />
      </div>


      <div className="flex flex-grow overflow-hidden flex-col sm:flex-row">
        {isEditing &&

          <CVForm
            setCV={setCV}
            cv={cv}
            isAddingExperience={isAddingExperience}
            setIsAddingExperience={setIsAddingExperience}
            isAddingEducation={isAddingEducation}
            setIsAddingEducation={setIsAddingEducation}
            handleCreateExperience={handleCreateExperience}
            handleCreateEducation={handleCreateEducation}

          />
        }
        <CV works={works} cv={cv} />
      </div>
    </>
  )
}

export default App

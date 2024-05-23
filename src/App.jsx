import { useState } from 'react'
import CV from './components/CV'
import CVForm from './components/CVForm'

const initialCV = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  phone: "",


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






function App() {
  const [cv, setCV] = useState(initialCV)
  const [isEditing, setIsEditing] = useState(true)
  const [isAddingExperience, setIsAddingExperience] = useState(false)
  const [works, setWorks] = useState(workData)



  function handleCreateExperience(nextWorkInfo) {
    setWorks([
      ...works,
      {
        id: nextId++,
        title: nextWorkInfo.title,
        company: nextWorkInfo.company,
        description: nextWorkInfo.description,
        date: nextWorkInfo.date,
      }])

    setIsAddingExperience(false)
  }



  return (
    <>
      <button onClick={() => window.print()}>Imprimir</button>

      <h1
        className='text-cyan-700 font-bold text-2xl'>Resumé maker</h1>
      <div className="flex">
        <button
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

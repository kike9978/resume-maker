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
      description: "I am an essential contributor to UX design projects, collaborating across diverse teams to improve web applications for agricultural enterprises and create innovative features for a versatile marketing app used by businesses and organizations. Engaging closely with development and design teams, I actively contribute throughout various phases of the design process and Agile methodology. My expertise includes designing seamless user experiences for mobile and web platforms, leveraging HTML, CSS, Sass, Javascript, and React to build UI components. Additionally, I utilize component libraries like PrimeReact to enhance efficiency and maintain consistency in development. Freelanc",
      date: "August 2022 - March 2024"
    },
    {
      id: nextId++,
      title: "UX designer",
      company: "Freelancer",
      description: "During my freelance tenure, I remotely designed interactive navbar interactions for a travel agency website and created visually appealing 3D character models for an electricity business mascot.",
      date: "January 2020 - August 2022"
    },
    {
      id: nextId++,
      title: "Pekxel Studio",
      company: "UX Designer intern",
      description: "As a UX Designer intern, I produced engaging animations and 3D character models for landing pages, while also contributing to UX research initiatives at a museum to improve visitor experience.",
      date: "January 2019 - May 2019"
    },
  ],
  educations: [
    {
      id: 0,
      title: "Full Stack Web Developer",
      institution: "The Odin Project",
      date: "2015 - 2019"
    },
    {
      id: 1,
      title: "Diseño de interación y animación",
      institution: "Ibero Puebla",
      date: "2015 - 2019"
    }],
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

    setIsAddingEducation(false)
  }

  return (
    <>
      <h1
        className='text-cyan-700 font-bold text-2xl print:hidden'>Resumé maker</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button onClick={() => setCV({ ...mockData })} label={"Fill with mockup data"} hierarchy="secondary" />
          <Button onClick={() => setCV({ ...initialCV })} label={"Empty form"} hierarchy='secondary' />
          {/* <Button onClick={() => setIsEditing(!isEditing)} label={isEditing ? "Save" : "Edit"} hierarchy='secondary' /> */}
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

import { useState } from 'react'

const initialCV = {
  firstName: "",
  lastName: "",
  email: "",

}

function App() {
  const [cv, setCV] = useState(initialCV)

  return (
    <>

      <h1 className='text-cyan-700 font-bold text-2xl'>Resumé maker</h1>
      <aside>
        <label htmlFor="">
          First name(s)
          <input type="text" name='firstName' value={cv.firstName} onChange={(e) => setCV({ ...cv, firstName: e.target.value })} />
        </label>
        <label htmlFor="">
          Last name(s)
          <input type="text" name='lastName' value={cv.lastName} onChange={(e) => setCV({ ...cv, lastName: e.target.value })} />
        </label>
        <label htmlFor="">
          First name(s)
          <input type="text" name='email' value={cv.email} onChange={(e) => setCV({ ...cv, email: e.target.value })} />
        </label>
        <label htmlFor="">
          First name(s)
          <input type="text" />
        </label>
      </aside>

      <main>
        <p>Mi nombre es {`${cv.firstName} ${cv.lastName}`}</p>
      </main>
    </>
  )
}

export default App

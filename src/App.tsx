import { useState } from 'react'


import { createUser } from './api/userService.ts'

import './App.css'


function App() {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  

  return (
    <>
      <section className='container'>
        <h1> Agregar usuario</h1>
        <input type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        />
        <input type="text"
          placeholder="Nombre completo"
          value={fullname}
          onChange={(e) => { setFullname(e.target.value) }}
        />

        <button onClick={() => { createUser(username, fullname) }}>
          Enviar
        </button>
      </section>
    </>
  )
}

export default App

import { useState } from "react"
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleInputChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(input)
    try {
      await axios('http://localhost:8081/api/users', {
        method: 'POST',
        data: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1>Registrar un nuevo usuario</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" name="first_name" value={input.first_name} onChange={handleInputChange} />
          <br />
          <label htmlFor="">Apellido</label>
          <input type="text" name="last_name" value={input.last_name} onChange={handleInputChange} />
          <br />
          <label htmlFor="">Email</label>
          <input type="text" name="email" value={input.email} onChange={handleInputChange} />
          <br />
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default App
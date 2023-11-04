import { useState } from 'react'
import '../src/styles/App.css'
import Card from './Components/Card'

function App() {

  const [user, setUser] = useState({
    nombre: '',
    oceano: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const filtro = (params) =>{
    const oceans = ['atlantico', 'pacifico', 'indico', 'artico', 'antartico']
    if(oceans.filter(ocean => ocean == params)== params){
      return true
    }
  }

  const handleSumbit = (event) => {
    event.preventDefault()
    if(user.nombre.length > 1 && user.oceano && filtro(user.oceano.toLowerCase())){
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
  }

  return (
    <div className='App'>
      <h1>Ocean-O2</h1>
      <form onSubmit={handleSumbit}>
        <label>Nombre</label>
        <input type="text" placeholder='Ingresa tu nombre' value={user.nombre} onChange={(event) =>{setUser({...user, nombre: event.target.value})
        setShow(false)}
      }/>
        <label>Océano</label>
        <input type="text" placeholder='Ingresa un océano' value={user.oceano} onChange={(event) =>{setUser({...user, oceano: event.target.value})
        setShow(false)}
      }/>
        <button>Enviar</button>
      </form>
      {show && <Card nombre={user.nombre} oceano={user.oceano} />}
      {error && <h5 className='error'>['atlantico', 'pacifico', 'indico', 'artico', 'antartico']</h5>}
    </div>
  )
}

export default App

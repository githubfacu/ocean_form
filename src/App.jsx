import { useState } from 'react'
import '../src/styles/App.css'
import Card from './Components/Card'
import useInput from './Components/useInput'

function App() {

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
    if(nombre.value.length > 1 && oceano.value && filtro(oceano.value.toLowerCase())){
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
  }

  const nombre = useInput('text', setShow)
  const oceano = useInput('text', setShow)


  return (
    <div className='App'>
      <h1>Ocean</h1>
      <form onSubmit={handleSumbit}>
        <label>Nombre</label>
        <input {...nombre}/>
        <label>Océano</label>
        <input {...oceano}/>
        <button>Enviar</button>
      </form>
      {show && <Card nombre={nombre.value} oceano={oceano.value} />}
      {error && <h5 className='error'>['atlantico', 'pacifico', 'indico', 'artico', 'antartico']</h5>}
    </div>
  )
}

export default App

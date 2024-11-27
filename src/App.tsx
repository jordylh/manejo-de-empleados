import Persona from "./components/Persona"


function App() {

  const personaData={
    nombre: 'Juan',
    edad: 30,
    esEmpleado: true
  }

  return (
    <>
    <h1>Informacion de la Persona</h1>
    <Persona
      nombre={personaData.nombre}
      edad={personaData.edad}
      esEmpleado={personaData.esEmpleado}
    />
     
    </>
  )
}

export default App

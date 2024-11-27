interface PersonaProps{
    nombre: string,
    edad: number,
    esEmpleado: boolean
}

export default function Persona({nombre,edad,esEmpleado} : PersonaProps){

    const mensajeEmpleado=esEmpleado ?  "Empleado"  : "No es empleado"

    return(
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Estado de Empleado: {mensajeEmpleado}</p>
        </div>
    )
}
import React, { useEffect } from 'react'
import { useState } from 'react'
import main from './Main.css' 
import Formulario from './Formulario'
import ListaPacientes from './ListaPacientes.jsx'

const Main = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {

    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPaciente(pacienteLS)
    }

    obtenerLS();
  }, [])


  useEffect ( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }




  return (
    <main className='main'>
      <div className='main__container'>
        <div className='container'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        </div>
      </div>
    </main>
  )
}

export default Main

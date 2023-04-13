import React from 'react'

import listaPacientes from './ListaPacientes.css'
import Pacientes from './Pacientes.jsx'


const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  
  return (
      <div className='listas'>
        { pacientes && pacientes.length ? ( 
          <><div className='container__listas'>
          <h2 className='title__listas'>Listas de Pacientes</h2>
          <p>Adminitrador de {''} <span>Pacientes y Citas</span></p>
      </div>
      <div className='listap'>
      { pacientes.map( paciente => (
        
        <Pacientes
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        
      ))}

      
      </div></>
        ) : (
          <>
          <div className='container__listas'>
          <h2>No hay pacientes registrados</h2>
          <p>Adminitrador de {''} <span>Pacientes y Citas</span></p>
      </div></>
        ) }
        
      </div>
  )
}

export default ListaPacientes

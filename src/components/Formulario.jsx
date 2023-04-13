import React from 'react'
import { useState, useEffect } from 'react'
import formulario from './Formulario.css'
import Error from './Error'


const Formulario = ({pacientes, setPacientes, paciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [mail, setMail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    useEffect( () => {
        if (Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setMail(paciente.mail)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);


    const [error, setError ] = useState(false);
    
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, mail, fecha, sintomas].includes('')) {
            console.log("Falta")
            
            setError(true)
            return;
        }
        setError(false);
        const objetoPaciente = {
            nombre, 
            propietario,
            mail,
            fecha,
            sintomas,
         
        }


        if(paciente.id) {
            
            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === 
                paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacienteActualizado)
                setPaciente({})
        
        } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }
    



        // Reiniciar Formulario
        
        setNombre('')
        setPropietario('')
        setMail('')
        setFecha('')
        setSintomas('')
    }

   
  return (
      <div className='formulario'>
        <div className='container__formulario'>
            <h2>Seguimientos de pacientes</h2>
            <p>Agrega pacientes y {''} <span>Administralos</span></p>
        </div>
        <form className='form' onSubmit={handleSubmit}>
            {error && <Error mensaje='Todos los campos son obligatorios'/>}
            <div className='form__container'>
                <label>Nombre del Paciente </label>
                <input type='text' placeholder='Nombre' value={nombre} onChange={ (e) => setNombre(e.target.value)} />
            </div>
            <div className='form__container'>
                <label>Nombre del Propietario</label>
                <input type='text' placeholder='Propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value)} />
            </div>
            <div className='form__container'>
                <label>Email </label>
                <input type='text' placeholder='@gmail.com' value={mail} onChange={ (e) => setMail(e.target.value)} />
            </div>
            <div className='form__container'>
                <label>Alta</label>
                <input type='date' value={fecha} onChange={ (e) => setFecha(e.target.value)} />
            </div>
            <div className='form__container'>
                <label>Sintomas</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Describe los sintomas'  value={sintomas} onChange={ (e) => setSintomas(e.target.value)}  />
            </div>
            <div className='buttom'>
            <input className='cta' type='submit' value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' } />
            </div>
        </form>
        
      </div>
  )
}

export default Formulario

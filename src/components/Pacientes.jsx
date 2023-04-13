
import pacientes from './Pacientes.css'

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

const { nombre, propietario, mail, fecha, sintomas, id } = paciente;


    const handleEliminar = () => {
        const respuesta = confirm('Eliminar?');

        if(respuesta) {
            eliminarPaciente(id) 
        }
    }

  return (
    <div className='quotes'>
            <div className='container__quotes'>
                <p>NOMBRE: {''} 
                    <span>{nombre}</span>
                </p>
                <p>PARENTESCO: {''} 
                    <span>{propietario}</span>
                </p>
                <p>GMAIL: {''} 
                    <span>{mail}</span>
                </p>
                <p>FECHA: {''} 
                    <span>{fecha}</span>
                </p>
                <p>SINTOMAS: {''} 
                    <span>{sintomas}</span>
                </p>

                <div className='button'>
                    <button className='edit' type='button' onClick={() => setPaciente(paciente)}>
                        Editar
                    </button>
                    <button className='delete' type='button' onClick={handleEliminar}>
                        Eliminar
                        </button>
                </div>
            </div>
        </div>
  )
}

export default Pacientes

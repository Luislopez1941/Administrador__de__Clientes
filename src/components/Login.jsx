import React, { useState } from 'react';
import './Login.css';
import ErrorLogin from './ErrorLogin'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "usuario" && password === "contraseña") {
      console.log("Inicio de sesión exitoso");
      onLogin();
    } else {
      setError("Correo electrónico o contraseña incorrectos");
    }
  };

  return (
    <div className='login'>
      <div className='login__left'>
        <div className='left__container'>
          <div className='left__content'>
            <h2>Administrador de clientes</h2>
            <p>Excelente herramienta para que lleves 
            un mejor control de tus clientes con mejor eficacia
            </p>
          </div>
          <div className='left__description'>
          </div>
        </div>
      </div>
      <div className='login__right'>
        <div className='right__container'>
          <div className='title__login'>
            <h2>
              ¡Comienza a disfrutar de nuestras herramientas ahora mismo!
            </h2>
            <br/>
            <p>Solicita acceso al propietario si no tienes las credenciales!
              Únete a nuestra comunidad y aprovecha todas las funcionalidades
              que tenemos para ofrecer
            </p>
          </div>
          {error && <ErrorLogin mensaje='Correo o contraseña incorrectas'/>}
          <form onSubmit={handleSubmit} className='right__form'>
            <div className='form__right'>
              <label htmlFor="email">Usuario:</label>
              <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className='form__right'>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className='buttons'>
              <button className='button__login' type="submit">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

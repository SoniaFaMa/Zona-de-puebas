import React, { useState } from 'react';
import './App.css';

function App() {
 

    //Creamos variables para almacenar los valores de cada campo del formulario.
     //Usamos useState para que React gestione estos valores y pueda actualizar la interfaz automáticamente
      //cuando cambien.
const [nombre, setNombre] = useState('');
const [fechaNacimiento, setFechaNacimiento] = useState('');
const [ciudad, setCiudad] = useState('');
const [correo, setCorreo] = useState('');
const [telefono, setTelefono] = useState('');
const [mensaje, setMensaje] = useState('');
    

function FormularioValido(){

    return nombre && fechaNacimiento && ciudad && correo && telefono

}

function EnvioFormulario(evento){

    evento.preventDefault() //Evita que la pagina se recarge al enviar el formulario

    if(FormularioValido()){
        setMensaje('FORMULARIO ENVIADO CORRECTAMENTE')
    }else{
        setMensaje('POR FAVOR RELLENA TODOS LOS CAMPOS')
    }
    console.log(evento)



}




 return(
    <div className='aplicacion'>
    <form onSubmit={EnvioFormulario}> // onSubmit dispara el evento
      <h2 className='titulo'>Formulario de Contacto</h2>

      <div className='container-datos'>
        <label className='etiqueta'>Nombre:</label>
        <input type='text' value={nombre} onChange={(evento) => setNombre(evento.target.value)}
          />
      </div>

      <div className='container-datos'>
        <label className='etiqueta'>Fecha de Nacimiento:</label>
        <input
          type='date'
          value={fechaNacimiento}
          onChange={(evento) => setFechaNacimiento(evento.target.value)}
          
        />
      </div>

      <div className='container-datos'>
        <label className='etiqueta'>Ciudad:</label>
        <input
          type='text'
          value={ciudad}
          onChange={(evento) => setCiudad(evento.target.value)}
          
        />
      </div>

      <div className='container-datos'>
        <label className='etiqueta'>Correo Electrónico:</label>
        <input
          type='email'
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
         
        />
      </div>

      <div className='container-datos'>
        <label className='etiqueta'>Teléfono:</label>
        <input
          type='tel'
          value={telefono}
          onChange={(evento) => setTelefono(evento.target.value)}
         //función que se ejecutará automáticamente cada vez que el usuario cambie el valor del campo. 
         //Esta función recibe un objeto de evento (evento), que contiene información sobre el cambio.
         //El atributo disabled={!formularioValido()} deshabilita el botón si formularioValido devuelve false.
         // El botón solo está habilitado si todos los campos son válidos.
        />
      </div>
      <button
          type='submit'
          className='boton-enviar'
          disabled={!FormularioValido()}
        >
          Enviar
        </button>

        {mensaje && <p className='mensaje'>{mensaje}</p>}
        

      </form>
    </div>
 )


}

export default App;
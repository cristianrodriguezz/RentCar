import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonForm from '../ButtonForm/ButtonForm'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'
import login from '../../Utils/login'
import { useState } from 'react'


const FormLogin = () => {
  const navigate = useNavigate();

  const {setSesions} = useContext(Context);

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [user, setUser] = useState();

  const [errorMessage, setErrorMessage] = useState('');

  const [loading,setLoading] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try{
      const user = await login({
        email: username,
        password //esto es así pq justamente la propiedad y el valor son lo mismos entonces está bien asi sin declarar
      })
      console.log();
      setUser(user.respuesta)
      
      setPassword('')
      setUsername('')

      console.log(user)
      if(user){
        navigate('/')
        setSesions(true)
      }
      localStorage.setItem('user',JSON.stringify(user.token))
      sessionStorage.setItem('user',JSON.stringify(user))
    }catch (event){
      setErrorMessage("Credenciales inválidas")
      setLoading(false)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  return (
    <div className='containerFormulario'>
    <form onSubmit={handleSubmit} className="formulario">
      <div>
        <h1>Iniciar sesión</h1>
      </div>
      <div className='error' style={{'fontSize':"1rem"}}>{errorMessage}</div>
      <div className='inter'>
        <input
          className='input'
          type={'text'}
          value={username}
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}
      >
      </input>
      </div>
      <div className='inter'>
        <input
          className='input'
          type={'password'}
          value={password}
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
      >
      </input>
      </div>
      {
        loading
        ?
        <ButtonForm loading={true}/>
        :
        <ButtonForm>
          Iniciar sesión
      </ButtonForm>
      }

      <div className='noEstasRegistrado'>
        <span>¿No estás registrado? </span><Link to='/signup'>Entra aquí</Link>
        <p>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</p>
      </div>
      
    </form>
    </div>

  ) 
}

export default FormLogin
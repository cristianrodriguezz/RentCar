import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router'
import FormLogin from '../../Components/formLogin/FormLogin'
import { Context } from "../../Contexts/CategoryContextProvider";

const Login = () => {

  const {setBotonesHeader} = useContext(Context);
  let location = useLocation();
  useEffect(() => {
    setBotonesHeader(location.pathname)
  }, [setBotonesHeader,location]);

  return (

        <FormLogin/>

  )
}

export default Login
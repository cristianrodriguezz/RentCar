import React from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router'
import Body from '../../Components/Body/Body'
import FormLogin from '../../Components/formLogin/FormLogin'
import { Context } from "../../Contexts/CategoryContextProvider";

const Login = () => {

  const {setBotonesHeader} = useContext(Context);
  let login = useLocation();
  setBotonesHeader(login.pathname)

  return (
    <Body>
        <FormLogin/>
    </Body>
  )
}

export default Login
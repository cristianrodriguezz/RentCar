import React from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router';
import FormSignUp from '../../Components/formSignUp/FormSignUp'
import { Context } from "../../Contexts/CategoryContextProvider";

const SignUp = () => {

  const {setBotonesHeader} = useContext(Context);

  let signup = useLocation();

  setBotonesHeader(signup.pathname)

  
  return (
     <FormSignUp/>
  )
}

export default SignUp
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router';
import Body from '../../Components/Body/Body'
import FormSignUp from '../../Components/formSignUp/FormSignUp'
import { Context } from "../../Contexts/CategoryContextProvider";

const SignUp = () => {

  const {botonesHeader, setBotonesHeader} = useContext(Context);

  let signup = useLocation();

  useEffect(() => {
    setBotonesHeader(signup.pathname)
  }, []);

  console.log(botonesHeader);
  
  return (
    <Body>
      <FormSignUp/>
    </Body>
  )
}

export default SignUp
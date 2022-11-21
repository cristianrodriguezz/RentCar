import React from 'react'
import Body from '../../Components/Body/Body'
import FormLogin from '../../Components/formLogin/FormLogin'
import {warningLogeo} from '../../Constant/styles'
import ErrorIcon from '@mui/icons-material/Error';

const LoginRequerido = () => {
  return (
    <Body>
        <p style={warningLogeo}><ErrorIcon/>Para realizar una reserva necesitas estar logeado</p>
        <FormLogin/>
    </Body>
  )
}

export default LoginRequerido
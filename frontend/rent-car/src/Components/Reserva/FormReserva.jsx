import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import './reserva.scss'


const FormReserva = (props) => {
    const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Formik 
        initialValues={{
            nombre: usuarioSessionStorage ? `${usuarioSessionStorage.nombre}` : '',
            apellido: usuarioSessionStorage ?  `${usuarioSessionStorage.apellido}` : '',
            email: usuarioSessionStorage ? `${usuarioSessionStorage.email}` : '',
            ciudad: ''
        }}
        validate={(valores) => {
            let errores = {};
            if (!valores.ciudad) {
                errores.email = "Por favor ingresá una ciudad";
            } 
            return errores;
          }}
        onSubmit={(valores, {resetForm})  => {
            resetForm();
            console.log(valores)
            console.log("Acá hacemos la llamada a la api");
        }}
    >
        {({ errors, values }) => (
            
            <Form className="formReserva" id='form'>
                <div className='inter'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <Field 
                        type='text'
                        id='nombre' 
                        name='nombre' 
                        placeholder='Tu nombre'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='apellido'>Apellido:</label>
                    <Field 
                        type='text'
                        id='apellido' 
                        name='apellido' 
                        placeholder='Tu apellido'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='email'>Ingresar correo electrónico</label>
                    <Field 
                        type='email'
                        id='email' 
                        name='email' 
                        placeholder='tucorreo@mail.com'
                        disabled={true}
                        className='inputUndifined input'
                    />
                </div>
                <div className='inter'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <Field 
                        type='ciudad'
                        id='ciudad' 
                        name='ciudad'
                        placeholder='Mendoza'
                        className='input'
                    />
                </div>
                <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email} </div>}
            />
                
            </Form>
        )}
        
    </Formik>
  )
}

export default FormReserva
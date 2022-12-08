import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import ButtonForm from '../ButtonForm/ButtonForm'
import Ciudades from './Ciudades'
import Categorias from './Categorias'
import Caracteristicas from './Caracteristicas'
import AgregarIcono from './AgregarIcono'
import AgregarImagenes from './AgregarImagenes'
import { useContext } from 'react'
import { Context } from '../../Contexts/CategoryContextProvider'
import { useEffect } from 'react'

const FormAdmin = () => {

    const {imagenes} = useContext(Context)


    useEffect(() => {
        
    }, [imagenes]);

    return (
    <Formik 
        initialValues={{
            nombreDeLaPropiedad:'',
            categoria:'',
            direccion: '',
            ciudad:'',
            descripcionProducto:'',
            checkedCaracteriscticas: [],
            nombreIcono: '',
            icono:'',
            imagenes: imagenes
        }}
        validate={ (valores) =>{
            let errores = {};
            if(!valores.nombreDeLaPropiedad){
                errores.nombreDeLaPropiedad = "Por favor ingrese nombre del producto"
            } 
            if (!valores.categoria){
                errores.categoria = "Por favor ingrese una categoría"
            } 
             if(!valores.direccion){
                errores.direccion = "Por favor ingrese una dirección"
            } 
             if (!valores.ciudad){
                errores.ciudad = "Por favor ingrese una ciudad"
            } 
            if (!valores.descripcionProducto){
                errores.descripcionProducto = "Por favor ingrese una descripción al producto"
            } 
             if (valores.checkedCaracteriscticas.length === 0){
                errores.checkedCaracteriscticas = "Por favor ingrese un atributo"
            } 
             if (!valores.icono){
                errores.icono = "Por favor ingrese un icono"
            } 
             if (!valores.normasDeLaCasa){
                errores.normasDeLaCasa = "Por favor ingrese una norma del producto"
            } 
             if (!valores.saludYSeguridad){
                errores.saludYSeguridad = "Por favor ingrese una descripción a salud y seguridad"
            } 
             if (!valores.politicaDeCancelacion){
                errores.politicaDeCancelacion = "Por favor ingrese una política de cancelación"
            } 
             if (imagenes.length === 0){
                errores.imagenes = "Por favor ingrese imágenes"
            } 
            return errores
        }}
        onSubmit={(valores, {resetForm})  => {
            console.log("Holaaaa");
            
        }}
    >
        {( {errors, values} ) => (
            
           <div>
            
            <h1>Administración de productos</h1>
            <Form className="formulario">
            {console.log(values)}
                <h3>Crear producto</h3>
                <div className='inter'>
                    <Field 
                        type='text'
                        id='nombreDeLaPropiedad' 
                        name='nombreDeLaPropiedad' 
                        placeholder='Fiat 600'
                        className='input'
                    />
                    <ErrorMessage name='nombreDeLaPropiedad' component={ () => (<div className='error'>{errors.nombreDeLaPropiedad} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        as='select'
                        id='categoria' 
                        name='categoria' 
                        placeholder='Auto lujoso'
                        className='input'
                    >
                        <Categorias/>
                    </Field>
                    <ErrorMessage name='categoria' component={ () => (<div className='error'>{errors.categoria} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        type='text'
                        id='direccion' 
                        name='direccion' 
                        placeholder='Av. Colón 1643'
                        className='input'
                    />
                    <ErrorMessage name='direccion' component={ () => (<div className='error'>{errors.direccion} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        as='select'
                        id='categoria' 
                        name='categoria' 
                        placeholder='Auto lujoso'
                        className='input'
                    >
                        <Ciudades/>
                    </Field>
                    <ErrorMessage name='ciudad' component={ () => (<div className='error'>{errors.ciudad} </div>)}/>
                </div>
                <div className='inter'>
                    <Field 
                        as='textarea' 
                        id='descripcionProducto' 
                        name='descripcionProducto'
                        placeholder='Escribir aquí'
                        className='input'
                    />
                    <ErrorMessage name='descripcionProducto' component={ () => (<div className='error'>{errors.descripcionProducto} </div>)}/>
                </div>
                <h2>Agregar características</h2>
                <div className='inter'>
                    <p>Seleccioná una o varias características</p>
                    <Caracteristicas/>
                    <div className='error'>{errors.checkedCaracteriscticas}</div>
                </div>
                <div className='inter'>
                    <AgregarIcono/>
                </div>
                <div className='inter'>
                    <AgregarImagenes />
                    <div className='error'>{errors.imagenes}</div>
                </div>
                <ButtonForm>
                    Crear
                </ButtonForm>
            </Form>
            </div>
        )}
    </Formik>
  )
}

export default FormAdmin
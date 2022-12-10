import React, { useState } from 'react'
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
import {crearProducto} from '../../Utils/post'
import Popups from '../popup/PopupReservaExito'

import './formAdmin.scss'


const FormAdmin = () => {

    const {imagenes} = useContext(Context)
    const [errorMessage, setErrorMessage] = useState(null) 
    const [acceptMessage, setAcceptMessage] = useState(null)
    const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    const JWT = usuarioSessionStorage.token

    useEffect(() => {

    }, [imagenes]);

    if(errorMessage){
        return(
            <>
            <FormAdmin/>
            <Popups type={'wrong'}>
                {errorMessage}
            </Popups>
            </>
        )
    } else if(acceptMessage){
        return(
            <>
            <FormAdmin/>
            <Popups>
                {acceptMessage}
            </Popups>
            </>
        )
    }

    return (
    <Formik 
        initialValues={{
            nombre:'',
            categoria:{
                id:''
            },
            ciudad:{
                id:''
            },
            descripcion:'',
            caracteristicas: [],
            imagenes: imagenes,
            precio:'15000'
        }}
        validate={ (valores) =>{
            let errores = {};
            if(!valores.nombre){
                errores.nombreDeLaPropiedad = "Por favor ingrese nombre del producto"
            } 
            if (!valores.categoria.id){
                errores.categoria = "Por favor ingrese una categoría"
            } 
             if (!valores.ciudad.id){
                errores.ciudad = "Por favor ingrese una ciudad"
            } 
            if (!valores.descripcion){
                errores.descripcion = "Por favor ingrese una descripción al producto"
            } 
             if (valores.caracteristicas.length === 0){
                errores.caracteristicas = "Por favor ingrese un atributo"
            } 
             if (valores.imagenes.length === 0){
                errores.imagenes = "Por favor ingrese imágenes"
            } 
            return errores
        }}
        onSubmit={ async (valores, {resetForm}, isSubmitting)  => {
            console.log("Holaaaa");
            const caracteristicasToBase = valores.caracteristicas.map((item) => JSON.parse(item))
            const valoresToBase = {
                nombre: valores.nombre,
                categoria: valores.categoria,
                ciudad: valores.ciudad,
                descripcion: valores.descripcion,
                caracteristicas: caracteristicasToBase,
                imagenes: valores.imagenes,
                precio: valores.precio
            }

            try {
                const crear = await crearProducto(valoresToBase, JWT)
                console.log(crear);
                setAcceptMessage("Se ha creado con éxito el producto: " + crear.nombre)
            } catch (error) {
                console.log(error);
                setErrorMessage(error.response.data)
            }
        }}
    >
        {( {errors, values , isSubmitting }) => (
           <div>
            <h1>Administración de productos</h1>
            <h3>Crear producto</h3>
            <Form className="formularioAdmin">
                <div className='inter'>
                    <label>Nombre del auto
                    <Field 
                        type='text'
                        id='nombre' 
                        name='nombre' 
                        placeholder='Fiat 600'
                        className='input'
                    />
                    </label>
                    <ErrorMessage name='nombre' component={ () => (<div className='error'>{errors.nombre} </div>)}/>
                </div>
                <div className='inter'>
                    <label>
                        Categoria
                    <Field 
                        as='select'
                        id='categoria' 
                        name='categoria.id' 
                        placeholder='Auto lujoso'
                        className='input'
                    >
                        <Categorias/>
                    </Field>
                    </label>
                    <ErrorMessage name='categoria' component={ () => (<div className='error'>{errors.categoria} </div>)}/>
                </div>
                <div className='inter'>
                    <label>
                        Ciudad
                    <Field 
                        as='select'
                        id='ciudad' 
                        name='ciudad.id' 
                        placeholder='Auto lujoso'
                        className='input'
                    >
                        <Ciudades/>
                    </Field>
                    </label>
                    <ErrorMessage name='ciudad' component={ () => (<div className='error'>{errors.ciudad} </div>)}/>
                </div>
                <div className='inter'>
                    <label>
                        Descripción
                    <Field 
                        as='textarea' 
                        id='descripcion' 
                        name='descripcion'
                        placeholder='Escribir aquí'
                        className='input'
                    />
                    </label>
                    <ErrorMessage name='descripcion' component={ () => (<div className='error'>{errors.descripcion} </div>)}/>
                </div>
                <div className='agregarCaracteristicasContainer'>
                    <div className='inter iconoCaracteristica'>
                        <p>Seleccioná una o varias características</p>
                        <Caracteristicas/>
                        <div className='error'>{errors.caracteristicas}</div>
                    </div>
                    <div className='inter'>
                        <AgregarIcono/>
                    </div>
                </div>
                <div className='inter'>
                    <AgregarImagenes />
                    <div className='error'>{errors.imagenes}</div>
                </div>
                <div className='buttonContainerForm'>
                {
                    isSubmitting 
                    ?
                    <ButtonForm tipo='submit' loading={true}/>
                    :
                    <ButtonForm tipo='submit'>Crear</ButtonForm>
                }
                </div>
            </Form>
            </div>

        )}
    </Formik>
  )
}

export default FormAdmin
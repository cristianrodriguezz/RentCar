import React from 'react'
import './skeletonProducto.css'
import '../../../Item/itemProducto.scss'

const SkeletonProducto = () => {
  return (
    <div className='listadoProductos'>
    <div  className='containerCar'>
    <div className='containerImageCar skeleton'></div>
    <div className='styles'>  
      <div className='skeleton skeleton-title'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
    </div>
  </div>
  <div  className='containerCar'>
    <div className='containerImageCar skeleton'></div>
    <div className='styles'>  
      <div className='skeleton skeleton-title'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
      <div className='skeleton skeleton-text'></div>
    </div>
  </div>
  </div>
  )
}

export default SkeletonProducto
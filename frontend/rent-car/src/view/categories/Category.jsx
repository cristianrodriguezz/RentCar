import React from 'react'
import Listado from '../../Components/Listado/Listado';
import data from '../../data.json';

const Category = () => {
  return (
    <div style={{heigh: "100vh"}}>
      <Listado data={data} />
    </div>
  )
}

export default Category
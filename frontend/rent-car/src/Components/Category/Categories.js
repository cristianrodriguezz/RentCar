import React from 'react'
import categoryJson from '../../categoryJson.json';
import Category from './CategoryCard';

const Categories = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {categoryJson.map((category) => (
          <div className="col-md-3" key={category.id}>
            <Category 
            imgUrl={category.image}
            title={category.titulo}
            urlCategory={category.url}
            description={category.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
import React from 'react'
import categoryJson from '../../categoryJson.json';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div>
      <div>
        {categoryJson.map((category) => (
          <div key={category.id}>
            <CategoryCard 
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
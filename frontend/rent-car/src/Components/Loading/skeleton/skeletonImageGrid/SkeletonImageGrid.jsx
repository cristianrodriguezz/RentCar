import React from 'react'
import './skeletonGrid.css'

const SkeletonImageGrid = () => {
  return (
    <div className='gridImageContainerSkeleton'>
        <div className='one skeleton'></div>
        <div className='two skeleton'></div>
        <div className='three skeleton'></div>
        <div className='fourd skeleton'></div>
        <div className='five skeleton'></div>  

    </div>
  )
}

export default SkeletonImageGrid
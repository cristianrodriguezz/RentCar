import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        <div className='container_children'>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout
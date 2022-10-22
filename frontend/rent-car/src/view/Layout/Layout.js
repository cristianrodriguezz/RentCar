import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

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
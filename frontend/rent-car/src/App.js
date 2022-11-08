import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './view/Home/Home';
import Category from './view/categories/Category';
import SignUp from './view/signUp/SignUp';
import Login from './view/login/Login';
import { Context }  from './Contexts/CategoryContextProvider'
import { useState } from 'react';

function App() {

  const [filtroProductoPorCategoria,setFiltroProductoPorCategoria,filtroProductoPorId,setFiltroProductoPorId] = useState(null);


  return (
      <Context.Provider value={{filtroProductoPorCategoria,setFiltroProductoPorCategoria}}>  
        <Layout>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Layout>
      </Context.Provider>
  );
}

export default App;

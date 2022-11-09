import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './view/Home/Home';
import Category from './view/categories/Category';
import SignUp from './view/signUp/SignUp';
import Login from './view/login/Login';
import Producto from './view/producto/Producto'

function App() {

  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productos/:id' element = {<Producto/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './view/Home/Home';
import Category from './view/category/Category';
import SignUp from './view/signUp/SignUp';
import ViewLogin from '.view/login/ViewLogin.';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<ViewLogin/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

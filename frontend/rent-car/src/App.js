import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './view/Home/Home';
import Category from './view/category/Category';
import Car from './view/car/Car';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/categories'  element={<Category/>}/>
          <Route path='/car'  element={<Car/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

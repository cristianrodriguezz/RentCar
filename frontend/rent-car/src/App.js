import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './Layouts/Layout';
import Home from './view/Home';
import Login from './view/Login';


function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './view/Home/Home';


function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

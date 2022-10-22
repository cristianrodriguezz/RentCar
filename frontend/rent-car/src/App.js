import './App.css';
import { Routes , Route } from "react-router-dom";
import Layout from './view/Layout/Layout';


function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/home'/>
        </Routes>
      </Layout>
  );
}

export default App;

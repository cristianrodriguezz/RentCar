import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './view/Layout';


function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/home'  />
        </Routes>
      </Layout>
  );
}

export default App;

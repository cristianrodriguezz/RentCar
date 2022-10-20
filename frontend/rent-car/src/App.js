import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './view/Header';
import Footer from './view/Footer';


function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/home' exact element = {<Header/>} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;

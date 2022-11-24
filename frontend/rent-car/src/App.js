import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./view/Home/Home";
import Category from "./view/categories/Category";
import SignUp from "./view/signUp/SignUp";
import Login from "./view/login/Login";
import Producto from "./view/producto/Producto";
import { Context } from "./Contexts/CategoryContextProvider";
import { useState } from "react";
import LoginRequerido from "./view/login/LoginRequerido";

function App() {
  const [filtroProductoPorCategoria, setFiltroProductoPorCategoria] =
    useState(null);
  const [filtroProductoPorId, setFiltroProductoPorId] = useState(null);
  const [filtroPorCiudad, setFiltroPorCiudad] = useState(null);

  const [botonesHeader, setBotonesHeader] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [hora, setHora] = useState("");

  return (
    <Context.Provider
      value={{
        filtroProductoPorCategoria,
        setFiltroProductoPorCategoria,
        filtroProductoPorId,
        setFiltroProductoPorId,
        anchor,
        setAnchor,
        filtroPorCiudad,
        setFiltroPorCiudad,
        botonesHeader,
        setBotonesHeader,
        hora,
        setHora,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos/:id" element={<Producto />} />
          <Route path="/loginRequerido" element={<LoginRequerido />} />
          <Route path="/productos/:id/reserva" element={<Producto />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./view/Home/Home";
import Category from "./view/categories/Category";
import SignUp from "./view/signUp/SignUp";
import Login from "./view/login/Login";
import Producto from "./view/producto/Producto";
import { Context } from "./Contexts/CategoryContextProvider";
import { useState } from "react";
import LoginRequerido from "./view/login/LoginRequerido";
import Administracion from "./view/administracion/Administracion";
import MisReservas from "./view/Reservas/MisReservas";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {
  const [filtroProductoPorCategoria, setFiltroProductoPorCategoria] = useState(null);
  const [filtroProductoPorId, setFiltroProductoPorId] = useState(null);
  const [filtroPorCiudad, setFiltroPorCiudad] = useState(null);
  const [botonesHeader, setBotonesHeader] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [hora, setHora] = useState("");
  const [sesions,setSesions] = useState(null)
  const [selectedDates, setSelectedDates] = useState(null)
  const [excludeDateIntervals, setExcludeDateIntervals] = useState(null);
  const [horaReserva,setHoraReserva] = useState(null)
  const [renderizarCaracteristicas, setRenderizarCaracteristicas] = useState(false)
  const [imagenes,setImagenes] = useState([])
  const [filtroPorCiudadYFecha, setFiltroPorCiudadYFecha] = useState(null)
  const [search, setSearch] = useState(false)
  const [reestablecerFiltros,setReestablecerFiltros] = useState(false)
  
  const rol = JSON.parse(sessionStorage.getItem('user'))?.authorities[0].authority


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
        sesions,
        setSesions,
        selectedDates,
        setSelectedDates,
        excludeDateIntervals,
        setExcludeDateIntervals,
        horaReserva,
        setHoraReserva,
        renderizarCaracteristicas,
        setRenderizarCaracteristicas,
        imagenes,
        setImagenes,
        filtroPorCiudadYFecha,
        setFiltroPorCiudadYFecha,
        search,
        setSearch,
        reestablecerFiltros,
        setReestablecerFiltros
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
          <Route path="/administracion" element={ rol === 'ROLE_ADMIN' ? <Administracion /> : <Navigate to={'/'}/>} />
          <Route path="/misReservas" element={<MisReservas />} />
        </Routes>
      </Layout>
    </Context.Provider>
  );
}

export default App;

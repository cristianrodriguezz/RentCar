import React from "react";

import "./reserva.scss";

const FormReserva = (props) => {
  return (
    <form className="formReserva" id="form">
      <div className="inter">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          readOnly
          className="inputUndifined input"
          value={props?.nombre}
        />
      </div>
      <div className="inter">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Tu apellido"
          readOnly
          className="inputUndifined input"
          value={props?.apellido}

        />
      </div>
      <div className="inter">
        <label htmlFor="email">Ingresar correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tucorreo@mail.com"
          readOnly
          className="inputUndifined input"
          value={props?.email}
        />
      </div>
      <div className="inter">
        <label htmlFor="ciudad">Ciudad</label>
        <input
          type="ciudad"
          id="ciudad"
          name="ciudad"
          placeholder="Tu ciudad"
          className="inputUndifined input"
          readOnly
          value={props?.ciudad}
        />
      </div>
    </form>
  );
};
export default FormReserva;

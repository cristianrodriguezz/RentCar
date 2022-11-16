import React from 'react'
import './politicaProducto.scss'


const PoliticaProducto = () =>{

    return (
        <div className='politicaProductoContainer'>
            <h3>Qué tenés que saber</h3>
            <hr />
            <div className="gridContainer">
                <div className="gridContainerItem">
                    <h4>LLEGADA CON RETRASO</h4>
                    <p>Si hacés una reserva y no te presentás a la hora pactada tenemos una tolerancia de espera de 59 minutos, una vez pasados se considera no show y la reserva queda cancelada.</p>
                </div>
                <div className="gridContainerItem">
                    <h4>SALUD Y SEGURIDAD</h4>
                    <p>El auto es desinfectado después de cada alquiler, sobre todo las superficies que más se tocan, como asientos, palanca de cambios, picaportes y manubrio.</p>
                </div>
                <div className="gridContainerItem">
                    <h4>CANCELACIÓN DE RESERVA</h4>
                    <p>La confirmación de la reserva prepaga implica la aceptación de un cargo de cancelación desde la realización de dicha reserva hasta 24 Hs previas a la fecha y hora para retirar la unidad equivalente a un monto predeterminado dependiendo de la fecha de pick up del vehículo más 4% de cargos administrativos.</p>
                </div>
            </div>

        </div>



    );
}
export default PoliticaProducto;
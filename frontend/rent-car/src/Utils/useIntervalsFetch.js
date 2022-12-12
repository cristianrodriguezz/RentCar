import { useContext } from "react";
import { Context } from "../Contexts/CategoryContextProvider";

const useIntervalsFetch = (url) => {

  const { setExcludeDateIntervals } = useContext(Context)
    const arrayFechas = []
    
      fetch(url)
        .then((res) =>res.json())
        .then(
          (result) => {
            console.log(result);
            result.map(item => arrayFechas.push({fechaInicioReserva: item?.fechaInicioReserva, fechaFinalReserva: item?.fechaFinalReserva}))
            setExcludeDateIntervals(arrayFechas)
          }
        );

};

export default useIntervalsFetch;
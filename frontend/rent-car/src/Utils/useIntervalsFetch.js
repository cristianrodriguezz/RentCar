import { useContext } from "react";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import { Context } from "../Contexts/CategoryContextProvider";

const useIntervalsFetch = (url, config = "GET") => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { excludeDateIntervals, setExcludeDateIntervals } = useContext(Context)
    const arrayFechas = []

  useEffect(() => {
    if (config === "GET") {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            result.map(item => arrayFechas.push({fechaInicioReserva: item?.fechaInicioReserva, fechaFinalReserva: item?.fechaFinalReserva}))
            setExcludeDateIntervals(arrayFechas)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } 
  }, [config, url]);

  return !isLoaded ? <Loading/> : error ? <div>{error.message}</div> : items;
};

export default useIntervalsFetch;
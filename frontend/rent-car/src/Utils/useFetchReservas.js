import { useEffect, useState } from "react";
import ErrorReservas from "../Components/ListadoMisReservas/ErrorReservas";
import SinReserva from "../Components/ListadoMisReservas/SinReserva";
import Loading from "../Components/Loading/Loading";


const useFetchReservas = (url) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            if (result.length === 0){
              setError(true);
            }
            console.log(result)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
          console.log(error);
  }, [url,error]);

  return !isLoaded ? <Loading/> : error ? <SinReserva/> : items;
};

export default useFetchReservas;
import { useEffect, useState } from "react";
import ErrorReservas from "../Components/ListadoMisReservas/ErrorReservas";
import Loading from "../Components/Loading/Loading";
import SkeletonCategoria from "../Components/Loading/skeleton/skeletonCategoria/SkeletonCategoria";
import SkeletonImageGrid from "../Components/Loading/skeleton/skeletonImageGrid/SkeletonImageGrid";
import SkeletonProducto from "../Components/Loading/skeleton/skeletonProducto/SkeletonProducto";

const useFetchReservas = (url, config = "GET",type) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (config === "GET") {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      fetch(url, config)
        .then((res) => res.json())
        .then(
          (result) => {
            
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [config, url]);

  return !isLoaded ? <Loading/> : error ? <ErrorReservas/> : items;
};

export default useFetchReservas;
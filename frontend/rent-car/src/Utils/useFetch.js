import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";

const useFetch = (url, config = "GET") => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (config === "GET") {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
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
  }, []);

  return !isLoaded ? <Loading/> : error ? <div>{error.message}</div> : items;
};

export default useFetch;

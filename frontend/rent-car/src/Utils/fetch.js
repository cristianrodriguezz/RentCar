export const fetchGet = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {return result}
        );
}
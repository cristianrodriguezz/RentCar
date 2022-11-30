export const formatDateFront = (date) => {
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/');
}
export const formatDateABase = (date) => {
  function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate())
    ].join('-');
}
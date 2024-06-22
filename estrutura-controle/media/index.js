document.addEventListener("click", (event) => {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let numero3 = document.getElementById("numero3").value;

  let button = event.target.value;

  if (button === "Media") {

    const array = [
      numero1,
      numero2,
      numero3
    ]

    document.getElementById("resultado").value = calcularMedia(conveteTipoNumero(array)).toFixed(2);
  }
})

const conveteTipoNumero = (array) => {
  return array.map(numero => Number(numero))
}

const calcularMedia = (array) => {
  return (array.reduce((a, b) => a + b)) / array.length;
}

document.addEventListener("click", (event) =>{
  if (event.target.value === "Calcular") {
    let nota1 = Number(document.getElementById("nota1").value);

    let nota2 = Number(document.getElementById("nota2").value);

    let nota3 = Number(document.getElementById("nota3").value);

    let nota4 = Number(document.getElementById("nota4").value);

    let nota5 = Number(document.getElementById("nota5").value);

    const nota = [
      nota1,
      nota2,
      nota3,
      nota4,
      nota5
    ]
    document.getElementById("result").value = mediaFinal(nota);
  }
})


const mediaFinal = (nota) => {
  return (nota.reduce((a, b) => a + b)) / nota.length;
}
document.addEventListener("click", (event) => {

  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
  
  let mes = Number(document.getElementById("numeroMes").value);

  let button = event.target.value;

  let result = 0;

  if (button === "Mês"){
     result = isMoreThan12(mes) ? alert("Não aceita mês mais de 12"): false;
     result = isNegative(mes) ? alert("Não aceita mês negativo") : result = meses[mes - 1];
  } 

  document.getElementById("resultado").value = result;
})

const isNegative = (mes) => {
  return mes < 0;
}

const isMoreThan12 = (mes) => {
  return mes > 12;
}


document.addEventListener("click", (event) => {
  let idade = Number(document.getElementById("idade").value);

  let button = event.target.value;

  if (button === "Idade"){
    alert(validateResult(idade));
  }
})

const validateResult = (idade) => {
    let isNegative = idade < 0;

    if (isNegative) {
      return "Não aceita idade negativa";
    } 
    let maiorOuMenor = idade > 0 && idade < 18 ? "Menor de idade" : "Maior de idade"
    
    return maiorOuMenor;
}


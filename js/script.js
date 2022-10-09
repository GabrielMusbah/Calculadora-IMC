function start() {
  //deixa que quando clica no botao a funcao handleCalculateImc() e ativada
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleCalculateImc);

  //coloca em var os 2 inputs
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  //deixa q toda vez q mudo o valor dos inputs a funcao executa (n tenho q clicar)
  inputWeight.addEventListener('input', handleCalculateImc);
  inputHeight.addEventListener('input', handleCalculateImc);

  //funcao ativa, pra ja ter um valor pronto
  handleCalculateImc();
}


function handleCalculateImc() {
  //pega os numeros q estao nos 2 inputs
  var inputWeight = Number(document.querySelector('#input-weight').value);
  var inputHeight = Number(document.querySelector('#input-height').value);

  var imc = calculateImc(inputWeight, inputHeight);

  //coloca o valor do imc no resultado
  var resultImc = document.querySelector('#imc-result');
  resultImc.textContent = imc.toFixed(2).replace('.', ',');

  //colocar a faixa de peso de acordo com o IMC
  var resultFaixaImc = document.querySelector('#faixa-imc-result');
  resultFaixaImc.textContent = faixaDoImc(imc);
}

//calcular o IMC
function calculateImc(weight, height) {
  return weight / (height * height);
}

//analizar a faixa do IMC pelo valor
function faixaDoImc(imc){
  var faixa = ''
  

  if(16 <= imc && imc < 17){
    faixa = 'Muito abaixo do peso';
  }else if(17 <= imc && imc < 18.5){
    faixa = 'Abaixo do peso';
  } else if(18.5 <= imc && imc < 25){
    faixa = 'Peso normal';
  } else if(25 <= imc && imc < 30){
    faixa = 'Acima do peso';
  } else if(30 <= imc && imc < 35){
    faixa = 'Obesidade grau I';
  } else if(35 <= imc && imc < 40){
    faixa = 'Obesidade grau II';
  } else if(40 <= imc){
    faixa = 'Obesidade grau III';
  } else {
    faixa = 'Invalido';
  }
  
  return faixa;
}

start();


var salario = 32234
var carro = 'uno'
var gay = true


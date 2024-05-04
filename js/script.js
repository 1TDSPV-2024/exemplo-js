alert("Helo World");

//var numero1 = 10;
//var numero2 = 20;
var soma;
var subtracao;
var multiplicacao;
var divisao;
var resto;

var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("digite o segundo número:")

soma = numero1 + numero2;
subtracao = numero1 - numero2;
multiplicacao = numero1 * numero2;
divisao = numero1 / numero2;


if (soma > subtracao){
    alert("Valor da soma é maior");
}else if (soma < subtracao){
    alert("valor da soma é menor");1
}

if (multiplicacao < divisao){
    alert("multiplicacao é menor que divisão");
}else if (multiplicacao > divisao){
    alert("multiplicação é meior que divisão")
}

if (soma != subtracao){
    alert("valore diferentes")
}else{
    alert("valore iguais")
}

function calcula(){
    soma = numero1 + numero2;
}

alert("função calcula" + calcula)



alert(soma);
alert(subtracao);
alert(multiplicacao);
alert(divisao);
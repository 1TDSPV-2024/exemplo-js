// alert("Helo World");

//var numero1 = 10;
//var numero2 = 20;
// var soma;
// var subtracao;
// var multiplicacao;

/*
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

console.log("Ola mundo");
consoler.console.warn("Aviso");
console.info("informação");
onsoler.error("Erro");

*/

// var nome = "Paulo";
// console.log(nome);
// nome = 1;
// console.log(nome);
// nome = true;
// console.log(nome);

// function escopada(){

//     let nome2 = "Marcos";
//     console.log("Mensagem de escopo");
// }

// escopada();

// // hoisting
// var nome2 = "Joaquim";

// if(true){
//     let nome = "Nilton";
// }

// //console.log(nome);

// const DIA_SEMANA = 21; // constante não pode ser alterado o valor no restante do programa de forma alguma.

// // tipos de variáveis
// // boolean
// let validacao = true;
// console.log(validacao);
// // parse para boolena
// let dados1 = 0;
// let boleano = Boolean(dados1); // false

// // String
// let str = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vero dolore eum harum ullam eos laborum, numquam quasi maxime magni, quibusdam hic? Quidem itaque voluptatem sapiente quasi atque, nisi consectetur aliquam expedita reprehenderit. Fugiat aliquid, possimus architecto similique nobis dolores laborum beatae et, magnam mollitia expedita, eligendi dolore? Perferendis, porro!</p>";
// let strAlterada = str.replace("dollar", "TTT");
// let strAlterada2 = str.split(",") // traz um array palavras com viergula
// let strAlterada3 = str.split(" ") // traz um array de plavras
// let strAlterada4 = str.indexOf("Quidem"); // retorna a posição inicial da string ou -1 se não encontrar // toda string é um array
// let strAlterada5 = str.substring(148,154);
// let strAlterada6 = str.indexOf("TOT");
// let strAlterada7 = str.lastIndexOf("amet"); // ultima ocorrência

// console.log(strAlterada);
// console.log(strAlterada2);
// console.log(strAlterada3);
// console.log(strAlterada4);
// console.log(strAlterada5);
// console.log(strAlterada6);

// // converte string para interiro
// let nr = "10";
// console.log(nr);
// console.log(parseInt(nr));
// nr = "10.1"
// console.log(parseFloat(nr))

// //converte numero para string
// let nr1 = 10;
// console.log(nr);
// console.log(nr.toString());

// nr = 20.22;
// console.log(nr);
// console.log(nr.toFixed(2));

// const btnElemento = document.getElementById("botao");

// btnElemento.addEventListener("click", function(){
//     console.log(btnElemento.innerHTML);
// })

let listaUsuarios = [
    {nome:"Joaquim José", email:"jo@email", senha:"123"},
    {nome:"Maria José", email:"ma@email", senha:"123"},
    {nome:"António José", email:"an@#email", senha:"123"},
    {nome:"Luiz José", email:"lu#email", senha:"123"},
    {nome:"Gertrudes José", email:"jo#email", senha:"123"},
];

function validaLogin(input1, input2){

    for(let x = 0; x < listaUsuarios.length; x++){

        let msgStatus

        try{
            msgStatus = document.querySelector(".valida");

            if((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha)){
                msgStatus.setAttribute("Class", "sucesso");
                msgStatus.innerText = "Login realizado com SUCESSO!";
            
                setTimeout( ()=>{
                    msgStatus.setAttribute("Class", "valida");
                    msgStatus.innerText = "";

                    window.location.href = "../status/sucesso.html";

                },3000);

                return true;
            }
        
            msgStatus.setAttribute("Class","erro");
            msgStatus.innerText = "Nome de usuário e ou senha inválidos!";

            setTimeout( ()=>{
            msgStatus.setAttribute("Class", "erro");
            msgStatus.innerText = "";
            },3000);

    }catch(error){
        msgStatus = (document.querySelector(".sucesso") ? document.querySelector(".sucesso") : document.querySelector(".erro"));
    }
        return false;
}



// function validaLogin(input1, input2){

//     listaUsuarios.forEach( (item,indice, array)=>{

//         if((input1.value == array[indice].email) && (input2.value == array[indice].senha)){

//             console.log('Usuario ${item.nome} O usuário foi validado com sucesso!');

//             console.log("Usuário validado com sucesso!");
//             return true;
//         }else{

//             console.log("Usuário não validadado")
//             return false;

//         }

//     } );

// }


// function validaLogin(input1, input2){

//     if((input1.value == listaUsuarios[0].email) && (input2.value == listaUsuarios[0].senha)){

//         console.log("Usuário validado com sucesso!");
//         return true;
//     }else{

//         console.log("Usuário não validadado")
//         return false;

//     }

// }


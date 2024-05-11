//Comentário de linha
/**
 * Comentário
 * de
 * Bloco
 */

// var nome = "José";
// console.log(nome);
// nome = 100;
// console.log(nome);
// nome = true;
// console.log(nome);

//Hoisting
// var nome  = "Joaquim";

// if(true){
//     var nome = "Nilton";
// }

// console.log(nome);

// const DIA_SEMANA = 23;
// console.log(DIA_SEMANA);

//Tipos de Dados

//Boolean
// let validacao = true;
// console.log(validacao);
// //Parse para Boolean
// let dados1 = 1;
// let boleano = Boolean(dados1);
// console.log(boleano);

//String
// let str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vero dolore eum harum ullam eos laborum, numquam quasi maxime magni, quibusdam hic? Quidem itaque voluptatem sapiente quasi atque, nisi consectetur aliquam expedita reprehenderit. Fugiat aliquid, possimus architecto similique nobis dolores laborum beatae et, magnam mollitia expedita, eligendi dolore? Perferendis, porro!";
// let strAlterada = str.lastIndexOf("amet");
// console.log(strAlterada);
// let nr = "10";
// console.log(nr);
// console.log(parseInt(nr));
// nr = "10.1";
// console.log(parseFloat(nr));

// let nr = 10;
// console.log(nr);
// console.log(nr.toString());

// nr = 20.22;
// console.log(nr);
// console.log(nr.toFixed(2));


const btnElemento = document.getElementById("botao");

btnElemento.addEventListener("click",function (){
    
    console.log(btnElemento.innerHTML);
    
});

//Recuperação de elementos no DOM

//Recupere o botão de submit do FORM, atrele o evento de mouseover e dispare um alert com a seguinte mensagem: "CONSEGUI";

// const botaoEnviar = document.getElementById("btnSubmit");
// botaoEnviar.addEventListener("mouseover",function (){
//     alert("CONSEGUI!");
// });

// //HTMLCollection
// let listaLi = document.getElementsByTagName("li");
// console.log(listaLi);

// //Array
// const nr1 = [1,2,3,4,5];
// console.log(nr1);

// //Convertendo HTMLCollection em Array com operador SPREAD ( ... );
// let novaListaLi = [...listaLi];
// console.log(novaListaLi);

// const nr2 = [6,7,8,9,10];

// const novoArray = [...nr1,...nr2];
// console.log(novoArray);

// //Removendo um item do array
// // const removeItem = (array,item) => {
// //     const indice = array.indexOf(item);
// //     if(indice != -1 ) 
// //         array.splice(indice,1);
// //     else
// //         console.log(`O valor não foi encontrado!`);
// // }

// // removeItem(novoArray,8);
// // novoArray.unshift(8);
// console.log(novoArray);

// console.log(nr1.concat(nr2));




//Recuperar os inputs Email e Senha e imprimir o atributo placeholder de ambos no console.

// const inputEmail = document.querySelector("input[placeholder='Digite seu email']");
const inputEmail = document.querySelector(".email");
console.log(inputEmail.placeholder);

const btnSubmit = document.querySelector("button[type=submit]");
// btnSubmit.innerText = "<p>TEXTO</p>";
btnSubmit.innerHTML = "<p>TEXTO</p>";
// console.log(btnSubmit.innerHTML);

btnSubmit.addEventListener("click", ()=>{
    console.log(inputEmail.value);
});
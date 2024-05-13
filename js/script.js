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


// const btnElemento = document.getElementById("botao");

// btnElemento.addEventListener("click",function (){
    
//     console.log(btnElemento.innerHTML);
    
// });

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

// // const inputEmail = document.querySelector("input[placeholder='Digite seu email']");
// const inputEmail = document.querySelector(".email");
// console.log(inputEmail.placeholder);

// const btnSubmit = document.querySelector("button[type=submit]");
// // btnSubmit.innerText = "<p>TEXTO</p>";
// btnSubmit.innerHTML = "<p>TEXTO</p>";
// // console.log(btnSubmit.innerHTML);

// btnSubmit.addEventListener("click", ()=>{
//     console.log(inputEmail.value);
// });

//Lista de usuários com objetos:
let listaUsuarios = [
  {nome:"Joaquim José", email:"jo@email", senha:"123"},
  {nome:"Maria José", email:"ma@email", senha:"123"},
  {nome:"Antonio José", email:"an@email", senha:"123"},
  {nome:"Luis José", email:"lu@email", senha:"123"},
  {nome:"Gertudres José", email:"ge@email", senha:"123"},
];

function validaLogin(input1,input2) {
  let msgStatus;
  try{
      msgStatus = document.querySelector(".valida");
  

for (let x = 0; x < listaUsuarios.length; x++) {    
 if((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha) ){
      msgStatus.setAttribute("class","sucesso");
      msgStatus.innerText = "Login realizado com SUCESSO!";
      
      setTimeout(()=>{
          msgStatus.setAttribute("class","valida");
          msgStatus.innerText = "";
          window.location.href = "../status/sucesso.html";
      },3000);
      
      return true;
  }
}
  msgStatus.setAttribute("class","erro");
  msgStatus.innerText = "Nome de Usuário e ou senha inválidos!";

  setTimeout(()=>{
      msgStatus.setAttribute("class","valida");
      msgStatus.innerText = "";
      window.location.href = "../status/erro.html";
  },3000);
  
}catch(error){
  msgStatus = ( document.querySelector(".sucesso") ? document.querySelector(".sucesso") : document.querySelector(".erro"));
}

  return false;
}

// if((input1.value == listaUsuarios[0].email) && (input2.value == listaUsuarios[0].senha) ){
//     console.log("Usuário validado com sucesso!");
//     return true;
// }else{
//     console.log("Usuário não validado!");
//     return false;
// }

// listaUsuarios.forEach( (item,indice,array)=>{

//     if((input1.value == array[indice].email) && (input2.value == array[indice].senha) ){
//         console.log(`Usuário ${item.nome} foi validado com sucesso!`);
//         return true;
//     }else{
//         console.log("Usuário não validado!");
//         return false;
//     }
// } );
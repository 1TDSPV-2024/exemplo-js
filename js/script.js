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

// AULA 08052024 ---------------------------------------------------------------------------------------------------------------------
//RECUPERAÇÃO DE ELEMENTOS NO DOM

// 1. Recuperar usando document #################################################################################

// const btnElemento = document.getElementById("botao"); //document.getElementById(elementId: string): Retorno da função OU null

// // função addEvenListener -> adiciona um escutador de evento (ele vai ficar "escutando" (esperando), assim que um usuário der um clique a função vai disparar)
// btnElemento.addEventListener("click",function (){
    
//     console.log(btnElemento.innerHTML); //OUTPUT: Teste de botão
    
// });

// // ATIVIDADE: Recupere o botao de submit do FORM, atrele o evento de mouseover e dispare um alert com a seguinte mensagem: "CONSEGUI"
// const botaoEnviar = document.getElementById("botaoEnviar");

// botaoEnviar.addEventListener("mouseover",function (){
    
//     alert("CONSEGUI");
    
// });

// // puxar todos os elementos <li></li>
//     // HTMLCollection
// let listaLi = document.getElementsByTagName("li");
// console.log(listaLi);

//     //Array
// const nr1 = [1,2,3,4,5];
// console.log(nr1);

// // Converter HTMLCollection para Array -> operador SPREAD (...)
// let novaListaLi = [...listaLi];
// console.log(novaListaLi);

// const nr2 = [6,7,8,9,10];

// // Concatenar duas listas em uma nova
// const novoArray = [...nr1,...nr2];
// console.log(novoArray)

// // Juntas duas listas (coloca um do lado do outro)
// console.log(nr1.concat(nr2));

// // 2. QUERY SELECTOR (chamar pelo SELETOR) #################################################################################
// const btnSubmit = document.querySelector("button[type=submit]");
// console.log(btnSubmit.innerText);

// //ATIVIDADE: Recuperar os inputs Email e Senha e imprimir o atributo placeholder de ambos no console
// const inputEmail = document.querySelector("#idEmail"); // # = chama ID da tag | OU input[type=email]
// console.log(inputEmail.placeholder);

// //Alterar o item selecionado
// const btnSubmit = document.querySelector("button[type=submit]");
// //btnSubmit.innerText = "<p>TEXTO</p>" //ENTENDE TEXTO   #OUT: <p>TEXTO</p>
// btnSubmit.innerHTML = "<p>TEXTO</p>" //ENTENDE TAG     #OUT: TEXTO
// //console.log(btnSubmit.innerHTML);

// btnSubmit.addEventListener("click", ()=>{
//     console.log(inputEmail.value)
// });

//Lista de usuarios com objetos
let listaUsuarios = [
    {nome:"Joaquim José", email:"joaquimjose@email", senha: "123"},
    {nome:"Maria José", email:"ma@email", senha: "123"},
    {nome:"Antonio José", email:"an@email", senha: "123"},
    {nome:"Luis José", email:"lu@email", senha: "123"},
    {nome:"Gertudres José", email:"ge@email", senha: "123"},
]

function validaLogin(input1,input2,event) {

    event.preventDefault();
    
    let msgStatus;
    try{
        const msgStatus = document.querySelector(".valida")

for (let x = 0; x < listaUsuarios.length; x++) {
    if((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha)){
        msgStatus.setAttribute("class","sucesso")
        msgStatus.innerText = "Login realizado com sucesso!"

        setTimeout( ()=>{
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
            window.location.href = "../status/sucesso.html"
        },3000)

        return true;
    }
}
    msgStatus.setAttribute("class","erro")
    msgStatus.innerText = "Nome de usuario ou senha invalida"

    setTimeout( ()=>{
        msgStatus.setAttribute("class","valida");
        msgStatus.innerText = "";
        window.location.href = "../status/erro.html"
    },3000)
}
catch(erro){
    const msgStatus = ( document.querySelector(".sucesso") ? document.querySelector(".sucesso") : document.querySelector(".erro"))
}
    return false;
}
// function validaLogin(input1,input2) {

//     listaUsuarios.forEach((item,indice,array)=>{

//     if((input1.value == listaUsuarios[indice].email) && (input2.value == listaUsuarios[indice].senha)){
//         console.log(`O Usuario ${item.nome} foi validado com sucesso!`);
//         return true;
//     }
//     else{
//         console.log("Usuario não validado");
//         return false;
//     }
// }} );
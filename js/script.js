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

// // Juntas duas listas (coloca um do lado do outro)
// console.log(nr1.concat(nr2));




// // 2. QUERY SELECTOR (chamar pelo SELETOR) #################################################################################
// const btnSubmit = document.querySelector("button[type=submit]");
// console.log(btnSubmit.innerText);

//ATIVIDADE: Recuperar os inputs Email e Senha e imprimir o atributo placeholder de ambos no console

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




// AULA 10052024 -------------------------------------------------------

//criar lista de usuarios com objetos
let listaUsuarios = [
    {nome: "Joaquim José", email: "jo@email", senha: "123"},
    {nome: "Maria José", email: "ma@email", senha: "123"},
    {nome: "Antonio José", email: "an@email", senha: "123"},
    {nome: "Luis José", email: "lu@email", senha: "123"},
    {nome: "Gertrudes José", email: "ge@email", senha: "123"},
];

function validaLogin(input1,input2,event) {

    event.preventDefault();

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

// function validaLogin(input1,input2) { //input1 e input2 -> ELEMENTOS HTML

// for (let x = 0; x < listaUsuarios.length; x++) { //array = listaUsuarios
//     // x vai ficar se comparando com o tamanho da lista
    
//     if ((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha)){
//         console.log(`Usuário ${listaUsuarios[x].nome} validado com sucesso!`); // ` DIFERENTE DE '
//         return true;
//     }
//     //nesse caso, caso o if esteja errado, ele vai pro else e ja morre sem ver os outros objetos
//     // então o "else" irá ficar FORA DA FUNÇÃO
// }

//     console.log("Usuário não validado!");
//     return false;
// }


// if ((input1.value == listaUsuarios[0].email) && (input2.value == listaUsuarios[0].senha)){
//     console.log("Usuário validado com sucesso!")
//     return true;
// }else{
//     console.log("Usuário não validado!")
//     return false;
// }

// }

// function validaLogin(input1,input2) { //input1 e input2 -> ELEMENTOS HTML

//     listaUsuarios.forEach((item,indice,array)=>{});
//     //na primeira volta que o loop der, o item vai pegar o primeiro onjeto da lista e jogar dentro da função
//     //assim que o loop fecha, o item vai para o próximo objeto
//     // porém o forEach leu todos os itens (ele não é bom para validação)

//     if ((input1.value == array[indice].email) && (input2.value == array[indice].senha)){
//         console.log(`Usuário ${item.nome} validado com sucesso!`); // ` DIFERENTE DE '
//         return true;
//     }else{
//         console.log("Usuário não validado!");
//         return false;
//     }
        // no forEach os return NÃO FUNCIONAM

// }
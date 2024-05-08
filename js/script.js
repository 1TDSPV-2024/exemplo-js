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











// Personal access token
// https://token@github.com/professorbossini/repositorio.git



// A mesma coisa que a calculoRapidinho faz, mas sem usar "Promise.resolve"
// const f = (n) => {
//     return new Promise((resolve, reject) => {
//         resolve((n * (n + 1)) / 2)
//     })
// }

// let r = f(10)
// r.then(res => console.log(res))

// const calculoRapidinho = (n) => {
//     return Promise.resolve((n * (n + 1)) / 2)
// }

// calculoRapidinho(10).then(res => console.log(res))



// const calculoDemorado = (n) => {
//     let p = new Promise((resolve, reject) => {
//         if(n < 0) {
//             reject('Não use números negativos')
//         } else {
//             let res = 0;
    
//             for(let i = 0; i <= n; i++) {
//                 res += i
//             }
    
//             resolve(res);
//         }
//     })

//     return p
// }

// const r = calculoDemorado(10)

// r.then(res => console.log(res))
//     .catch((erro) => console.log(erro))

// calculoDemorado(-5)
//     .then(res => console.log(res))
//     .catch((erro) => console.log(erro))






// function devolveUm(){
//     let p = new Promise((resolve, reject) =>{
//         resolve(1)
//     })
//     return p
// }

// const resultado = devolveUm()
// resultado.then((res) => console.log(res)) //"then" é especifico para os objetos "Promise"

/*
function devolveUm(){
    return 1
}

const resultado = devolveUm()
console.log(resultado)
*/


// Promise: ES6 - Objeto associado a um fluxo de instruções. A ideia é ser avisado no futuro quando a instrução acabar


// Callbakc Hell
// const fs = require('fs');

// const abrirArquivo = function(nomeArquivo) {

//     const exibirConteudo = function(erro, conteudo) {
//         if(erro) {
//             console.log('Erro: ' + erro)
//         } else {
//             console.log('OK: ' + conteudo.toString());
//             const dobro = +conteudo.toString() * 2; // O + converte a string para número, é um atalho do JS
//             console.log('Valor calculado: ' + dobro);

//             finalizar = function(erro) {
//                 if(erro) {
//                     console.log('Erro: ' + erro)
//                 } else {
//                     console.log('OK, escrever')
//                 }
//             }

//             // Parâmetros: nomeArquivo, conteúdo, callback
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     } 

//     // Parâmetros: Nome do arquivo, função callbak (função que definimos, mas não chamamos. Ela vai ser chamada automaticamente em um momento no futuro)
//     // Essa função readFile() opera de maneira assincrona
//     fs.readFile(nomeArquivo, exibirConteudo);
// }

// abrirArquivo('arquivo.txt');


// IO Bound - Entrada e Saída (Disco, arquivo, http) - Executa em "paralelo", mas gerenciada pelo JS (JS não possui paralelismo)
// CPU Bound  - Usar da CPU 




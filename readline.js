/*estudando apenas readline-sync para perguntas com nodejs*/

const readlineSync = require('readline-sync')
const nome = readlineSync.question('Qual éo seu nome \n')
console.log(`ola seja bem vindo ${nome}`)
const prompt = require('prompt-sync')()

const imcCalculo = require('./imc');

let peso = 0
let altura = 0

peso = prompt('Digite seu peso:')

altura = prompt('Digite sua altura:')

console.log(`O imc do paciente é `,imcCalculo(peso, altura))


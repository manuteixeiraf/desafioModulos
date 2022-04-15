const { calculaidade, calculaimc } = require('.funcoes.js');

const anoNascimento = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaidade(anoNascimento);
const imc = calculaimc(peso,altura);

console.log(calculaidade(anoNascimento));
console.log(calculaimc(peso,altura));
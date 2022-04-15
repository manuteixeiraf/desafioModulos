function calculaidade(anoNascimento) {
  return 2022-anoNascimento;
}

module.exports.calculaidade = calculaidade;

module.exports.calculaimc = function(peso,altura) {
  return peso/(altura*altura);
};
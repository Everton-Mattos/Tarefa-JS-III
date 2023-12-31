// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    const area = retangulo.largura * retangulo.altura;
  
    return {
      perimetro: perimetro,
      area: area
    };
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    const idadeMinima = 18;

    if (pessoa.idade >= idadeMinima) {
      return true;
    } else {
      return false;
    }
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    const valores = Object.values(obj);
    const resultado = valores.join(' ');
    return resultado;
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };

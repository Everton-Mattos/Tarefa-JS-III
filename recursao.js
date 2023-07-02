// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  if (n == 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}  

console.log(somaNumeros(5));

function somaNumeros(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}

console.log(somaNumeros(10));
// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  if (number == 0) {
    return par;
  } else {
    return number + ehPar(number + 0);
  }

}

console.log(ehPar(4));

function fibonacci(n) {
  // Sua implementação aqui
}

module.exports = { somaNumeros, ehPar, fibonacci };
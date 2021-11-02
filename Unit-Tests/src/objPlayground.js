/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 1, sub: 0 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
*/

const calculator = (number1, number2) => {
  // - sum: retorna o resultado da soma dos dois números;
  const sum = number1 + number2;
  //   - mult: retorna o resultado da multiplicação dos dois números;
  const mult = number1 * number2;
  //   - div: retorna o resultado da divisão dos dois números;
  // let div;
  // if (number2 !== 0) {
    const div = Math.floor(number1 / number2);
  // } else {
  //   div = 'Number is not divisible by zero'
  // }
  //   - sub: retorna o resultado da subtração dos dois números.
  const sub = number1 - number2;
  // Comportamento:
  // calculator(1, 2); // { sum: 3, mult: 2, div: 1, sub: 0 }
  return { sum, mult, div, sub }; // Expected property shorthand(abreviação de propriedade)
};

const arrayGenerator = (type, object) => {
  // Comportamento:
  // arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  // arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  // arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  if (type === 'keys') {
    return Object.keys(object);
  } if (type === 'values') {
    return Object.values(object);
  } if (type === 'entries') {
    return Object.entries(object);
  }
  return Error(`${type} is not valid`);
};

module.exports = { calculator, arrayGenerator };

// Desafio 10

function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs == 0) {
    return "Vazio!"
  } else {
    arrayTechsSort = arrayTechs.sort();
    for (index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechsSort[index],
        name: name
      }
      arrayTechsObject.push(techs);
    }
    return arrayTechsObject;
  }
}

// Desafio 11
function generatePhoneNumber(array11numbers) {
  if (array11numbers.length > 11 || array11numbers.length < 11) {
    return "Array com tamanho incorreto."
  } else {
    for (let key in array11numbers) {
      if (array11numbers[key] < 0 || array11numbers[key] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    let contador = 0;
    for (let k in array11numbers) {
      let number = array11numbers[k]
      for (let n of array11numbers) {
        if (n === number) {
          contador += 1
        }
        if (contador > 2) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
      contador = 0;
    }
    let ddd = array11numbers.slice(0, 2)
    let celPhoneBegin = array11numbers.slice(2, 7)
    let celPhoneEnd = array11numbers.slice(7, 11)
    return "(" + ddd.join("") + ") " + celPhoneBegin.join("") + "-" + celPhoneEnd.join("")
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || lineB + lineC < lineA || lineC + lineA < lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let numbers = str.replace(/\D/g, ' '); // deixa só os numeros, substitui o que não é número por vazio. Alex Weyne no StackOverFlow https://stackoverflow.com/questions/30607419/
  //   \D corresponde a um caractere que não é um dígito numérico. Portanto, qualquer não dígito é substituído por uma string vazia. O resultado são apenas os dígitos de uma string.

  // O g no final do literal da expressão regular é para "global", o que significa que substitui todas as correspondências, e não apenas a primeira.return-only-numbers-from-string/30607466
  let number = [];
  let arrayNumbers = numbers.split("")
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] !== " "){
      number.push(parseInt(arrayNumbers[index]))
    }
  }
  let sum = 0;
  for (let indexN = 0; indexN < number.length; indexN += 1){
    sum += number[indexN]
  }
  if (sum === 1) {
    return sum + ' copo de água'
  } else {
    return sum + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

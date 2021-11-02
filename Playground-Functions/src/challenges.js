// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return  (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  let first = arrayString[0];
  let last = arrayString[arrayString.length - 1];
  return (last + ', ' + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let greaterNumber = arrayNumbers[0];
  let countNumber = 0;
  for (let index in arrayNumbers) {
    if (greaterNumber < arrayNumbers[index]) {
      greaterNumber = arrayNumbers[index];
    }
  }
  for (let secondIndex in arrayNumbers) {      
    if (greaterNumber === arrayNumbers[secondIndex]) {
      countNumber += 1;
    }   
  }     
  return countNumber;
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let away1 = cat1 - mouse
  let away2 = cat2 - mouse
  if (Math.abs(away1) < Math.abs(away2)) {
    return 'cat1';
  } else if (Math.abs(away1) > Math.abs(away2)){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arr = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      arr.push("fizzBuzz");
    } else if (numbers[index] % 3 === 0) {
      arr.push("fizz");
    } else if (numbers[index] % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push("bug!");
    }
  }
  return arr
}

// Desafio 9
function encode(string) {
  let arrayString = string.split("")
  for ( let index = 0; index < arrayString.length; index+=1){
    if (arrayString[index] === "a") {
      arrayString[index] = 1;
    } else if (arrayString[index] === "e") {
      arrayString[index] = 2;
    } else if (arrayString[index] === "i") {
      arrayString[index] = 3;
    } else if (arrayString[index] === "o") {
      arrayString[index] = 4;
    } else if (arrayString[index] === "u") {
      arrayString[index] = 5;
    }
  }
  return arrayString.join("")
} 

function decode(stringInverse) {
  let arrayString = stringInverse.split("")
  for ( let index = 0; index < arrayString.length; index+=1){
    if (arrayString[index] == 1) {
      arrayString[index] = "a";
    } else if (arrayString[index] == 2) {
      arrayString[index] = "e";
    } else if (arrayString[index] == 3) {
      arrayString[index] = "i";
    } else if (arrayString[index] == 4) {
      arrayString[index] = "o";
    } else if (arrayString[index] == 5) {
      arrayString[index] = "u";
    }
  }
  return arrayString.join("")
} 


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

// Desafio 1
const compareTrue = (first, second) => {
  if (first === true && second === true) {
    return true;
  }
  return false;
};

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// // Desafio 6
const highestCount = (array) => {
  let biggest = array[0];

  array.forEach((element) => {
    if (element > biggest) {
      biggest = element;
    }
  });

  return array.filter((element) => element === biggest).length;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  const distanceToCat1 = Math.abs(mouse - cat1);
  const distanceToCat2 = Math.abs(mouse - cat2);

  if (distanceToCat1 < distanceToCat2) {
    return 'cat1';
  }

  if (distanceToCat2 < distanceToCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const fizzBuzz = (array) => array.map((number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }

  if (number % 3 === 0) {
    return 'fizz';
  }

  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
});

// Desafio 9

const encode = (string) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  const numbers = ['1', '2', '3', '4', '5'];

  const code = string.split('').map((letter) => {
    if (letters.indexOf(letter) === -1) {
      return letter;
    }
    return numbers[letters.indexOf(letter)];
  });

  return code.join().replace(/,/g, '');
};

const decode = (string) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  const numbers = ['1', '2', '3', '4', '5'];

  const code = string.split('').map((number) => {
    if (numbers.indexOf(number) === -1) {
      return number;
    }
    return letters[numbers.indexOf(number)];
  });

  return code.join().replace(/,/g, '');
};

// Desafio 10
const techList = (array, string) => {
  if (array.length === 0) {
    return 'Vazio!';
  }

  return array.sort().map((element) => ({ tech: element, name: string }));
};

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
  techList,
};

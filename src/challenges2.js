// Desafio 11
const generatePhoneNumber = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let checkRepetition = true;

  array.forEach((number) => {
    if (number > 9 || number < 0 || array.filter((element) => element === number).length > 2) {
      checkRepetition = false;
    }
  });

  if (checkRepetition === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11] = array;
  return `(${n1}${n2}) ${n3}${n4}${n5}${n6}${n7}-${n8}${n9}${n10}${n11}`;
};

// Desafio 12
const lineCheck = (A, B, C) => {
  let check = false;
  if (A < B + C && A > Math.abs(B - C)) {
    check = true;
  }
  return check;
};

function triangleCheck(A, B, C) {
  if (lineCheck(A, B, C) && lineCheck(B, C, A) && lineCheck(C, B, A)) {
    return true;
  }

  return false;
}

// Desafio 13
const hydrate = (string) => {
  const numbers = string.match(/\d+/g);
  const sum = numbers.reduce((acc, number) => acc + parseInt(number, 10), 0);
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

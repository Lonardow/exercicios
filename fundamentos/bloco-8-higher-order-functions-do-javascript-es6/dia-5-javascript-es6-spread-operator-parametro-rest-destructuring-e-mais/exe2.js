// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// const sum = (...numbers) => numbers.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);

const sum = ((...numbers) => numbers.reduce(((accumulator, currentValue) => {
  // console.log('acum', accumulator);
  // console.log('curr', currentValue);
  return accumulator + currentValue;
}), 0))

console.log(sum(1,2,3))
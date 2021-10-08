const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // // escreva seu código aqui
  const newArr = arrays.reduce((accumulator, currentValue) => {
    return accumulator = `${accumulator} ${currentValue}`
  },[]);
  console.log(newArr);
  // const newArr = arrays.reduce((acc, curr) => acc.concat(curr), []);
  // return newArr
  
}
flatten();
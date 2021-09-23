// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// function crescentOrder() {
//   let ordenados = oddsAndEvens.sort()
//   console.log(ordenados)
// }

// crescentOrder();


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);    //o que diabos é a,b a-b
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
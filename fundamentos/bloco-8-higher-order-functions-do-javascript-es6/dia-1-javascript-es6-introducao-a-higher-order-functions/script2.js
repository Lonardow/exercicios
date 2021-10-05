const checarResultado = (aposta, sorteado) => {

  return aposta === sorteado;
};



const resultadoSorteio = (aposta, callback) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);
  console.log(sorteado)
  return callback(aposta, sorteado) ? 'lucky day, you won!' : 'Try Again!';
};

console.log(resultadoSorteio(2, checarResultado));

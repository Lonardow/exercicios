const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const acertos = (rAnswers, sAnswers, comparacao) => {
  let pontos = 0;
  for (let index = 0; index < rAnswers.length; index += 1) {
    comparacao = answersChecker(rAnswers[index], sAnswers[index]);
    pontos += comparacao;
  }
  return `Resultado final: ${pontos} corretas`;
};

const answersChecker = (correct, input) => {
  if (correct === input) return 1;
  if (correct === 'N.A') return 0;
  return -0.5;
}


console.log(acertos(RIGHT_ANSWERS, STUDENT_ANSWERS, answersChecker()));
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const values = names.reduce((acc, name) => acc.concat(name)).split('');
  const result = values.filter((value) => value === 'A' || value === 'a').length;
  return result;
}
console.log(containsA())
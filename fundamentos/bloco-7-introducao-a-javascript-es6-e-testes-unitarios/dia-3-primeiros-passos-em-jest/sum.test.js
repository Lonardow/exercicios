// const sum = require('./sum.js');

// describe('testa a função sum', () => {
//   it('return the result of sum', () => {
//     expect(sum(4, 5)).toBe(9)
//     expect(sum(0, 0)).toBe(0)
//   });
//   it('must throw an error if one of parameters is not a number', () => {
//     expect(() => sum(4, '5')).toThrowError();
//     expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
//   })
// })


// const myRemove = require('./sum.js');

// describe('testa se o array remove o item pedido', () => {
//   it('return array without the second parameter', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 4, 3, 5])
//   })
// })

const { expect } = require('@jest/globals');
const myFizzBuzz = require('./sum.js');

describe('teste função fizzbuzz', () => {
  it('Vererica se ao passar parametro retorna valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('b')).toBe(false);
  })
});
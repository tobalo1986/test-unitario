// TEST

const sum = require('../utiles/suma');

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${5}      | ${1}        | ${6}
      ${0}      | ${1}        | ${1}
      ${5}      | ${17}        | ${22}
      ${7}      | ${13}        | ${20}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });
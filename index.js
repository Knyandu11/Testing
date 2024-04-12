const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  } = require('./yourFunctions.js');
  
  describe('capitalize function', () => {
    test('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  
    test('does not change the case of other characters', () => {
      expect(capitalize('wORLD')).toBe('WORLD');
    });
  
    test('works with empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });
  
  describe('reverseString function', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  
    test('works with empty string', () => {
      expect(reverseString('')).toBe('');
    });
  });
  
  describe('calculator object', () => {
    test('adds two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
  
    test('subtracts two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  
    test('multiplies two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  
    test('divides two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
  });
  
  describe('caesarCipher function', () => {
    test('shifts characters correctly', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  
    test('wraps from z to a', () => {
      expect(caesarCipher('z', 1)).toBe('a');
    });
  
    test('keeps the same case', () => {
      expect(caesarCipher('AbC', 1)).toBe('BcD');
    });
  
    test('works with punctuation', () => {
      expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
    });
  });
  
  describe('analyzeArray function', () => {
    test('returns correct object with average, min, max, and length', () => {
      const object = analyzeArray([1, 8, 3, 4, 2, 6]);
      expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
    });
  
    test('works with empty array', () => {
      const object = analyzeArray([]);
      expect(object).toEqual({
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0
      });
    });
  });

  // yourFunctions.js

function capitalize(str) {
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  
  function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(char) {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    });
  }
  
  function analyzeArray(arr) {
    if (arr.length === 0) return { average: NaN, min: undefined, max: undefined, length: 0 };
    
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return { average: avg, min: min, max: max, length: arr.length };
  }
  
  module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
  
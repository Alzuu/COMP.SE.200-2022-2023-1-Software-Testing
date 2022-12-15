import words from '../lib/src/words'

const inspectedString = 'fred, barney, & pebbles'

describe('words function should', () => {
  describe('return an empty array if', () => {
    test('the inspected string is empty', () => {
      expect(words('')).toEqual([])
    })
    test('the inspected string is empty but a pattern is given', () => {
      expect(words('', /[^, ]+/g)).toEqual([])
    })
  })
  describe('return a correct array of words from the inspected string if', () => {
    test('the inspected string has spaces and symbols', () => {
      expect(words(inspectedString)).toEqual(['fred', 'barney', 'pebbles'])
    })
    test('the inspected string contains whitespace on both sides ', () => {
      expect(words('    fred        barney        ')).toEqual([
        'fred',
        'barney',
      ])
    })
    test('the inspected string has spaces and symbols, and a pattern is given', () => {
      expect(words(inspectedString, /[^, ]+/g)).toEqual([
        'fred',
        'barney',
        '&',
        'pebbles',
      ])
    })
  })
})

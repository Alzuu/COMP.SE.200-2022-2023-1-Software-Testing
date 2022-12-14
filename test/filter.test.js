import filter from '../lib/src/filter'
const emptyResult = [[]]
const array = [
  'test',
  'filter',
  1,
  2,
  [3],
  [4, 5],
  { user: 'barney', active: true },
  { user: 'fred', active: false },
]

describe('filter function', () => {
  describe('should return an empty array if', () => {
    test('input is null', () => {
      expect(filter(null)).toEqual(emptyResult)
    })
    test('input array is empty', () => {
      expect(filter([])).toEqual(emptyResult)
    })
    test('the array is filtered by an index that is not in the array', () => {
      expect(filter(array, (value, index) => index === 10)).toEqual(emptyResult)
    })
    test('the array is filtered by a value that is not in the array', () => {
      expect(filter(array, (value) => value === 'value')).toEqual(emptyResult)
      expect(filter(array, (value) => value === 5)).toEqual(emptyResult)
      expect(filter(array, (value) => value === [4])).toEqual(emptyResult)
      expect(
        filter(array, (value) => value === { user: 'steve', active: false })
      ).toEqual(emptyResult)
    })
    test('the array is filtered by a key that is not in the array of objects', () => {
      expect(filter(array, (user) => user.age)).toEqual(emptyResult)
    })
  })
  describe('should return a new filtered array if', () => {
    test('the array contains the inputted value', () => {
      expect(filter(array, (value) => value === 'test'))
    })
    test('the array containing objects contains the inputted keys', () => {
      expect(filter(array, (value) => value.active === true)).toEqual([
        { user: 'barney', active: true },
      ])
      expect(filter(array, (value) => value.active === false)).toEqual([
        { user: 'fred', active: false },
      ])
    })
    test('the array containing arrays includes the inputted value', () => {
      expect(
        filter(array, (value) => Array.isArray(value) && value.includes(4))
      ).toEqual([[4, 5]])
    })
    test('the filter index exists in the array', () => {
      expect(filter(array, (_, index) => index === 1)).toEqual(['filter'])
      expect(filter(array, (_, index) => index === 3)).toEqual([2])
      expect(filter(array, (_, index) => index === 5)).toEqual([[4, 5]])
      expect(filter(array, (_, index) => index === 7)).toEqual([
        { user: 'fred', active: false },
      ])
    })
  })
})

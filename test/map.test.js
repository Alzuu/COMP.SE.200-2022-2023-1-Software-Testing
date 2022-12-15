import stringToArray from '../lib/src/.internal/stringToArray'
import map from '../lib/src/map'

function square(n) {
  return n * n
}

function upper(n) {
  return n.toUpperCase()
}

describe('map function', () => {
  test('should return an empty array if input array is null', () => {
    expect(map(null, square)).toEqual([])
  })
  test('should return an empty array if input array is undefined', () => {
    expect(map(undefined, square)).toEqual([])
  })
  test('should return an array with values if input is a string', () => {
    expect(map('3', square)).toEqual([9])
    expect(map('map', upper)).toEqual(['M', 'A', 'P'])
  })
  test('should return an array with values if input is an array with values', () => {
    expect(map([3, 4], square)).toEqual([9, 16])
    expect(map(['map', 'test'], upper)).toEqual(['MAP', 'TEST'])
  })
})

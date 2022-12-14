import isEmpty from '../lib/src/isEmpty'

describe('isEmpty function', () => {
  test('should return true if parameter is null ', () => {
    expect(isEmpty(null)).toBe(true)
  })
  test('should return true if value is not array like', () => {
    expect(isEmpty(false)).toBe(true)
    expect(isEmpty(1)).toBe(true)
  })
  test('should return true if value is an empty array or object', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
  })
  test('should return true if the value is an empty string', () => {
    expect(isEmpty('')).toBe(true)
  })
  test('should return true if the value is an empty buffer', () => {
    const buffer = Buffer.from('', 'utf-8')
    expect(isEmpty(buffer)).toBe(true)
  })
  test('should return true if the tag of the value is an empty Map', () => {
    const value = new Map()
    expect(isEmpty(value)).toBe(true)
  })
  test('should return true if the tag of the value is an empty Set', () => {
    const value = new Set()
    expect(isEmpty(value)).toBe(true)
  })
  test('should return true if the value is an empty Prototype', () => {
    const objectProto = Object.prototype
    expect(isEmpty(objectProto)).toBe(true)
  })
  test('should return false if the value has its own properties', () => {
    const value = { a: 1 }
    expect(isEmpty(value)).toBe(false)
  })
})

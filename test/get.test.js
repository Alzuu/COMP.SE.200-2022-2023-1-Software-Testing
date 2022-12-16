import get from '../lib/src/get'

const object = {
  a: [{ b: { c: 3 } }],
}

describe('get function', () => {
  test('should return undefined if the given object is null', () => {
    expect(get(null, 'a.b.c')).toBe(undefined)
  })
  test('should return undefined if the given object is undefined', () => {
    expect(get(undefined, 'a.b.c')).toBe(undefined)
  })
  test('should return undefined if the given object is a number', () => {
    expect(get(12, ['0'])).toBe(undefined)
  })
  test('should return undefined if given object is a string with a path of array of characters', () => {
    expect(get('string', ['a'])).toBe(undefined)
  })
  // As JS automatically converts between string primitives and String objects,
  // this may either be a passing or failing test depending on the
  // function specification and requirements.
  test('should return a character if the object is a string and the path is a correct index', () => {
    expect(get('string', ['0'])).toBe('s')
  })
  test('should return undefined if path of the property to get is not found', () => {
    expect(get(object, 'a.b.c')).toBe(undefined)
  })
  test('should return the default value if a default value is given and the result would be undefined', () => {
    expect(get(object, 'a.b.c', 'default')).toEqual('default')
  })
  test('should return the the correct value if the object can traverse the path that is given', () => {
    expect(get(object, 'a[0].b.c', 'default')).toEqual(3)
    expect(get(object, ['a', '0', 'b', 'c'], 'default')).toEqual(3)
  })
})

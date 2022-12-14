import isEmpty from '../lib/src/isEmpty'

describe('isEmpty function', () => {
  test('should return true if parameter is null ', () => {
    expect(isEmpty(null)).toBe(true)
  })
})

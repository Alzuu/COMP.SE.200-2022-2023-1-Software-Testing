import countBy from '../lib/src/countBy'

const users = [
  { user: 'barney', active: true },
  { user: 'betty', active: true },
  { user: 'fred', active: false },
]

describe('countBy function', () => {
  test('should not return a composed aggregate object if the inputs are incorrect', () => {
    expect(countBy(users, (value) => value.age)).toBeUndefined()
  })
  test('should return a correctly composed aggregate object if the inputs are correct', () => {
    expect(countBy(users, (value) => value.active)).toBe({ true: 2, false: 1 })
  })
})

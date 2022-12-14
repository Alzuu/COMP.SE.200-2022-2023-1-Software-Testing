import map from '../lib/src/map';
import toNumber from '../lib/src/toNumber'

describe('Converting things to numbers', () => {
  test("Converting string to float", () => {
    expect(toNumber('0.99')).toBe(0.99);
  });
  test("Converting infinity", () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  })
  test("Converting a negative integer should not transform it", () => {
    expect(toNumber(-2)).toBe(-2);
  })
  test("Converting a big int", () => {
    const bigNumber = 9n;
    expect(toNumber(bigNumber)).toBe(Number(bigNumber));
  })
  test("Converting a date should return milliseconds since epoch", () => {
    const date = new Date("1995-12-17T03:24:00");
    expect(toNumber(date)).toBe(819163440000);
  })
  test("Converting array with a single value should return the value", () => {
    expect(toNumber(["5"])).toBe(5)
  })
  test("Binary strings can be converted to numbers", () => {
    expect(toNumber("0b100100")).toBe(36)
  })
  test("Converting functions should return NaN", () => {
    expect(toNumber(Math.abs)).toBe(NaN)
  })
  test("Converting an array with multiple elements should return NaN", () => {
    const arr = [1, 2]
    expect(toNumber(arr)).toBe(NaN)
  })
  test("Converting a symbol should return NaN", () => {
    expect(toNumber(Symbol("2"))).toBe(NaN);
  });
  test("Converting an object should return NaN", () => {
    const obj = {1: 2}
    expect(toNumber({obj})).toBe(NaN)
  })
})

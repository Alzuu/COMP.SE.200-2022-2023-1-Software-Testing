import map from '../lib/src/map';
import toNumber from '../lib/src/toNumber'

describe('toNumber should', () => {
  describe("be able to", () => {
    test("convert string to float", () => {
      expect(toNumber("0.99")).toBe(0.99);
    });
    test("not affect infinity", () => {
      expect(toNumber(Infinity)).toBe(Infinity);
    });
    test("not change a negative integer", () => {
      expect(toNumber(-2)).toBe(-2);
    });
    test("convert a big int", () => {
      const bigNumber = 9n;
      expect(toNumber(bigNumber)).toBe(Number(bigNumber));
    });
    test("convert a date to milliseconds since epoch", () => {
      const date = new Date("1995-12-17T03:24:00");
      expect(toNumber(date)).toBe(date.valueOf());
    });
    test("convert an array with a single value to the value", () => {
      expect(toNumber(["5"])).toBe(5);
    });
    test("convert binary strings to numbers", () => {
      expect(toNumber("0b100100")).toBe(36);
    });
  })
  describe("return NaN when converting", () => {
    test("functions", () => {
      expect(toNumber(Math.abs)).toBe(NaN);
    });
    test("an array with multiple elements", () => {
      const arr = [1, 2];
      expect(toNumber(arr)).toBe(NaN);
    });
    test("a symbol", () => {
      expect(toNumber(Symbol("2"))).toBe(NaN);
    });
    test("an object", () => {
      const obj = { 1: 2 };
      expect(toNumber({ obj })).toBe(NaN);
    });
  })
})

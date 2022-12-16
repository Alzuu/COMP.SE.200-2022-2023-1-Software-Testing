import reduce from '../lib/src/reduce'

describe('reduce should', () => {
    describe('reduce correctly', () => {
        test('with arrays', () => {
            expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
        })
        test('with non-zero accumulator', () => {
            expect(reduce([1, 2], (sum, n) => sum + n, 3)).toBe(6);
        })
        test("without accumulator", () => {
          expect(reduce([1, 2], (sum, n) => sum + n)).toBe(3);
        });
        test('with string', () => {
            expect(reduce("obj", (string, char) => string.concat(char), "")).toBe("obj")
        })
        test('with empty array', () => {
            expect(reduce([], (sum, n) => sum + n, [])).toEqual([]);
        })
        test("with empty string", () => {
          expect(reduce("", (string, char) => string.concat(char), "")).toBe("");
        });
    })
})
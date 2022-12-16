import chunk from '../lib/src/chunk'

describe('Chunk should', () => {
    describe('split correctly', () => {
        test('an even amount of elements per group', () => {
            expect(chunk(["a", "b", "c", "d"], 2)).toBe([["a", "b"],["c", "d"]]);
        })
        test('an uneven amount of elements per group', () => {
          expect(chunk(["a", "b", "c", "d", "e"], 2)).toBe([["a", "b"],["c", "d"], ["e"]]);
        });
        test('an array into 1 chunk', () => {
            expect(chunk([1, 2, 3], 1)).toBe([1, 2, 3])
        })
    })
    describe('handle erroneus inputs, like', () => {
        test('an empty array should be returned the same', () => {
            expect(chunk([], 2)).toBe([])
        })
        test('a string should not have anything done to it', () => {
            expect(chunk("not an array", 2)).toBe("not an array")
        })
        test('an object should not have anything done to it', () => {
            const object = { name: "song", length: 351 };
            expect(chunk(object, 2)).toBe(object)
        })
    })
})
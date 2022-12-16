import chunk from '../lib/src/chunk'

describe('Chunk should', () => {
    describe('split correctly', () => {
        test('an even amount of elements per group', () => {
            expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'],['c', 'd']]);
        })
        test('an uneven amount of elements per group', () => {
          expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'],['c', 'd'], ['e']]);
        });
        test('an array into 1 chunk', () => {
            expect(chunk([1, 2, 3], 1)).toEqual([1, 2, 3])
        })
    })
    describe('handle erroneus inputs', () => {
        test('an empty array should be returned the same', () => {
            expect(chunk([], 2)).toEqual([])
        })
        test('a string should return an empty array', () => {
            // Could argue that strings could work as inputs, but the expected inputs are arrays
            expect(chunk('not an array', 2)).toEqual([])
        })
        test('an object should return an empty array', () => {
            const object = { name: 'song', length: 351 };
            expect(chunk(object, 2)).toEqual([])
        })
        test('an array that is too short to be split into the defined amount of chunks should raise an error', () => {
            // Could be argued that it should just split into the amount of parts that it can, but this could lead to errors
            // accessing indices that don't exist later on, thus violating principle of least suprise
            expect(() => {chunk([1,2,3], 4)}).toThrow(Error)
        })
        test('size of 0 should return empty array', () => {
            expect(chunk([1,2,3], 0)).toEqual([])
        })
        test("size should be 1 if the value is not given", () => {
          expect(chunk([1, 2, 3])).toEqual([1, 2, 3]);
        });
        test('null value for the array should return an empty array', () => {
            expect(chunk(null, 2)).toEqual([])
        })
    })
})
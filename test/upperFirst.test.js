import upperFirst from '../lib/src/upperFirst'

describe('upperFirst function should', () => {
    describe('return a string with first letter uppercased if', () => {
        test('the given string is entirely lowercase', () => {
            expect(upperFirst("fred")).toBe("Fred");
        })
        test("the given string has whitespace after it", () => {
          expect(upperFirst("whitespace ")).toBe("Whitespace ");
        });
    })
    describe('not change a string that starts with', () => {
        test("whitespace", () => {
          // Could be argued that the whitespace should be stripped  
          expect(upperFirst(" whitespace")).toBe(" whitespace");
        });
        test('an emoji', () => {
            expect(upperFirst("🤣 thats so dumb")).toBe("🤣 thats so dumb");
        })
        test('a number', () => {
            expect(upperFirst("1st place")).toBe("1st place");
        })
        test('a bracket', () => {
            expect(upperFirst("[bracket]")).toBe("[bracket]");
        })
        test('a symbol', () => {
            expect(upperFirst("& fred")).toBe("& fred");
        })
    })
    describe('return an empty string when given', () => {
        test('an empty string', () => {
            expect(upperFirst('')).toBe('');
        })
        test('a number', () => {
            expect(upperFirst(2)).toBe('');
        })
    })
})
import {startsWithNOnes} from '../lib/startsWithNOnes';

describe("startsWithNOnes", () => {
    describe("passes test case", () => {
        it("0111", () => {
            let string = [0, 1, 1, 1];
            expect(startsWithNOnes(string, 1)).toBe(false);
            expect(startsWithNOnes(string, 2)).toBe(false);
            expect(startsWithNOnes(string, 3)).toBe(false);
            expect(startsWithNOnes(string, 4)).toBe(false);
        });
        it("1000", () => {
            let string = [1, 0, 0, 0];
            expect(startsWithNOnes(string, 1)).toBe(true);
            expect(startsWithNOnes(string, 2)).toBe(false);
        });
        it("1100", () => {
            let string = [1, 1, 0, 0];
            expect(startsWithNOnes(string, 1)).toBe(true);
            expect(startsWithNOnes(string, 2)).toBe(true);
            expect(startsWithNOnes(string, 3)).toBe(false);
        });
        it("1110", () => {
            let string = [1, 1, 1, 0];
            expect(startsWithNOnes(string, 1)).toBe(true);
            expect(startsWithNOnes(string, 2)).toBe(true);
            expect(startsWithNOnes(string, 3)).toBe(true);
            expect(startsWithNOnes(string, 4)).toBe(false);
        });
        it("1111", () => {
            let string = [1, 1, 1, 1];
            expect(startsWithNOnes(string, 1)).toBe(true);
            expect(startsWithNOnes(string, 2)).toBe(true);
            expect(startsWithNOnes(string, 3)).toBe(true);
            expect(startsWithNOnes(string, 4)).toBe(true);
        });
    });
});

import {PossibleWalls} from '../lib/PossibleWalls';

describe("PossibleWalls", () => {
    describe("should compute test case", () => {
        it("7.5x1", () => {
            let pw = new PossibleWalls(7.5, 1);
            expect(pw.getTotal()).toBe(2);
        });
        it("7.5x2", () => {
            let pw = new PossibleWalls(7.5, 2);
            expect(pw.getTotal()).toBe(2);
        });
        it("12x3", () => {
            let pw = new PossibleWalls(12, 3);
            expect(pw.getTotal()).toBe(4);
        });
        it("27x5", () => {
            let pw = new PossibleWalls(27, 5);
            expect(pw.getTotal()).toBe(7958);
        });
    });
});

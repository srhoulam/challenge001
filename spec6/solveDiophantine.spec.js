import {solveDiophantine} from '../lib/solveDiophantine';

describe("solveDiophantine", () => {
    describe("should solve trivial equation", () => {
        it("3x + 4.5y = 3", () => {
            expect(solveDiophantine(3).length).toBe(1);
            expect(solveDiophantine(3)[0].x).toBe(1);
            expect(solveDiophantine(3)[0].y).toBe(0);
        });
        it("3x + 4.5y = 4.5", () => {
            expect(solveDiophantine(4.5).length).toBe(1);
            expect(solveDiophantine(4.5)[0].y).toBe(1);
            expect(solveDiophantine(4.5)[0].x).toBe(0);
        });
    });
    describe("should solve test case", () => {
        it("3x + 4.5y = 12", () => {
            expect(solveDiophantine(12).length).toBe(2);
            expect(solveDiophantine(12)[0].x).toBe(1);
            expect(solveDiophantine(12)[0].y).toBe(2);

            expect(solveDiophantine(12)[1].x).toBe(4);
            expect(solveDiophantine(12)[1].y).toBe(0);
        });
    });
});

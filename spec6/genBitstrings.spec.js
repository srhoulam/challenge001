import {genBitstrings} from '../lib/genBitstrings';

describe("genBitstrings", () => {
    describe("should generate an ordered list of bitstrings", () => {
        it("(2, 0) case", () => {
            let reference = [[0, 0]];

            expect(genBitstrings(2, 0).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(2, 1) case", () => {
            let reference = [[0, 1], [1, 0]];

            expect(genBitstrings(2, 1).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(2, 2) case", () => {
            let reference = [[1, 1]];

            expect(genBitstrings(2, 2).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(3, 0) case", () => {
            let reference = [[0, 0, 0]];

            expect(genBitstrings(3, 0).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(3, 1) case", () => {
            let reference = [[0, 0, 1], [0, 1, 0], [1, 0, 0]];

            expect(genBitstrings(3, 1).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(3, 2) case", () => {
            let reference = [[0, 1, 1], [1, 0, 1], [1, 1, 0]];

            expect(genBitstrings(3, 2).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(3, 3) case", () => {
            let reference = [[1, 1, 1]];

            expect(genBitstrings(3, 3).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(4, 0) case", () => {
            let reference = [[0, 0, 0, 0]];

            expect(genBitstrings(4, 0).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
        it("(4, 1) case", () => {
            let reference = [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]];

            expect(genBitstrings(4, 1).reduce((pV, cV, i) => {
                return pV && cV.reduce((pV, cV, j) => {
                    return pV && cV === reference[i][j];
                }, true);
            }, true)).toBe(true);
        });
    });
});

import {nextBitstring} from '../lib/nextBitstring';

function genBitstring(length, oneIndices) {
    let arr = new Array(length);
    arr.fill(0);
    oneIndices.forEach((index) => {
        arr[index] = 1;
    });

    return arr;
}

describe("nextBitstring", () => {
    describe("should generate the bitstring following", () => {
        it("00000111", () => {
            let arr = genBitstring(8, [5, 6, 7]);
            let next = genBitstring(8, [4, 6, 7]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00001011", () => {
            let arr = genBitstring(8, [4, 6, 7]);
            let next = genBitstring(8, [4, 5, 7]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00001101", () => {
            let arr = genBitstring(8, [4, 5, 7]);
            let next = genBitstring(8, [4, 5, 6]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00001110", () => {
            let arr = genBitstring(8, [4, 5, 6]);
            let next = genBitstring(8, [3, 6, 7]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00010011", () => {
            let arr = genBitstring(8, [3, 6, 7]);
            let next = genBitstring(8, [3, 5, 7]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00010101", () => {
            let arr = genBitstring(8, [3, 5, 7]);
            let next = genBitstring(8, [3, 5, 6]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
        it("00010110", () => {
            let arr = genBitstring(8, [3, 5, 6]);
            let next = genBitstring(8, [3, 4, 7]);
            let computedNext = nextBitstring(arr);

            expect(computedNext.reduce((pV, cV, index) => {
                return pV && (cV === next[index]);
            }, true)).toBe(true);
        });
    });
});

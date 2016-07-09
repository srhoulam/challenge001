import constants from './constants';
import {solveDiophantine} from './solveDiophantine';
import {genBitstrings} from './genBitstrings';

//  Find possible rows for one Diophantine solution.
function perSolution(solution) {
    const totalBricks = solution.x + solution.y;

    let rows = genBitstrings(totalBricks, solution.y).map((bitstring) => {
        return bitstring.map((bit) => {
            return constants.bricks[bit];
        });
    });

    return rows;
}

function seamListReduce(pSeam, brick) {
    let nextSeam = (pSeam[pSeam.length - 1] || 0) + brick.width;
    pSeam.push(nextSeam);

    return pSeam;
}

function toSeamList(row) {
    let result = row.reduce(seamListReduce, []);
    result.pop();
    return result;
}

function mergeLists(pV, list) {
    return pV.concat(list);
}

//  Find possible rows for a wall width.
//  Time complexity: O(n^3)
export function findPossibleRows(width) {
    let rows = solveDiophantine(width).
        map(perSolution).
        reduce(mergeLists, []).
        map(toSeamList);

    return rows;
}

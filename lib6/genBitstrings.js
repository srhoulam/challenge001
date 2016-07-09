import {nextBitstring} from './nextBitstring';
import {startsWithNOnes} from './startsWithNOnes';

//  Generate a list of bit strings of a length
//      with a fixed number of one bits.
//  Time complexity: O(2^n)
export function genBitstrings(length, numOnes) {
    let bitstrings = [];

    //  create initial permutation and also store one indices
    let currArr = new Array(length);
    currArr.fill(0);
    for(let index = 0; index < numOnes; index++) {
        currArr[length - 1 - index] = 1;
    }
    bitstrings.push(currArr);

    if(numOnes > 0) {
        while(!startsWithNOnes(currArr, numOnes)) {
            currArr = nextBitstring(currArr);
            bitstrings.push(currArr);
        }
    }

    return bitstrings;
}

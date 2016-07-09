//  Time complexity: O(n)
export function nextBitstring(bitstring) {
    let nextToMove = bitstring.lastIndexOf(1);

    while(bitstring[nextToMove - 1] !== 0 && nextToMove > 0) {
        nextToMove--;
    }
    if(nextToMove === 0) {
        return null;
    }

    let result = bitstring.slice(0);
    result[nextToMove - 1] = 1;
    result[nextToMove] = 0;

    let count = 0;
    for(let index = nextToMove; index < result.length; index++) {
        if(result[index] === 1) {
            count++;
            result[index] = 0;
        }
    }
    for(let index = 0; index < count; index++) {
        result[result.length - 1 - index] = 1;
    }

    return result;
}

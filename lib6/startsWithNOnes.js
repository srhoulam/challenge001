//  Time complexity: O(n)
export function startsWithNOnes(list, n) {
    for(let index = 0; index < list.length; index++) {
        if(list[index] === 0) {
            break;
        }
        if(index === n - 1) {
            return true;
        }
    }

    return false;
}

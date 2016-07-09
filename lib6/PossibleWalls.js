import {findPossibleRows} from './findPossibleRows';

function rowsFollow(rowA, rowB) {
    return rowA.row.reduce((pV, cSeam) => {
        return pV && rowB.row.indexOf(cSeam) === -1;
    }, true);
}
//  Time complexity: O(n^2)
function buildGraphSetAdjacent(arr) {
    for(let outer = 0; arr.length > 0; arr.splice(outer, 1)) {
        for(let inner = 1; inner < arr.length; inner++) {
            if(rowsFollow(arr[outer], arr[inner])) {
                arr[inner].adjacent.push(arr[outer]);
                arr[outer].adjacent.push(arr[inner]);
            }
        }
    }
}
function buildGraphAugmentRow(row) {
    return {
        row,
        adjacent : [],
        memo : []
    };
}
function buildRowGraph(width) {
    let rows = findPossibleRows(width).map(buildGraphAugmentRow);
    let rowsCopy = rows.slice(0);

    buildGraphSetAdjacent(rowsCopy);

    return rows;
}

function recursiveCount(row, depthToGo) {
    let result;

    if(row.memo[depthToGo]) {
        return row.memo[depthToGo];
    } else if(depthToGo === 0) {
        result = row.adjacent.length;
    } else {
        result = row.adjacent.reduce((pV, cRow) => {
            return pV + recursiveCount(cRow, depthToGo - 1);
        }, 0);
    }

    row.memo[depthToGo] = result;

    return result;
}

//  Time complexity: O(n^height), anticipated
export class PossibleWalls {
    /**
     *  Build a graph of possible walls of a given width and height using bricks of width 3 and 4.5.
     *  @param  {number}    width   The width of the desired wall.
     *  @param  {number}    height  The height of the desired wall.
     */
    constructor(width, height) {
        let graph = buildRowGraph(width);

        //  entry point into the graph
        let startPoint = [{
            row : null,
            adjacent : graph,
            memo : []
        }];
        this.total = startPoint.reduce((pV, row) => {
            return pV + recursiveCount(row, height - 1);
        }, 0);
    }

    /**
     *  Return the computed number of possibilities.
     */
    getTotal() {
        return this.total;
    }
}

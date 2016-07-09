import constants from './constants';

//  Solve a Diophantine equation of the form 3x + 4.5y = c,
//      where x and y are nonnegative integer unknowns.
//  Time complexity: O(width^2)
export function solveDiophantine(width) {
    //  Multiply constants by 10 to prevent floating-point inaccuracies.
    let a = constants.BRICK1 * 10;
    let b = constants.BRICK2 * 10;
    let c = width * 10;

    let solutions = [];

    //  naive approach
    let x = 0, y = 0;
    let ax = a * x;
    let by = b * y;
    while(ax <= c) {
        y = by = 0;
        while(ax + by <= c) {
            if(ax + by === c) {
                solutions.push({
                    x,
                    y
                });
            }

            //  increment
            by = b * ++y;
        }

        //  increment
        ax = a * ++x;
    }

    return solutions;
}

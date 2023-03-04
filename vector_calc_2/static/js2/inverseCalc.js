function addArray(total, num) {
    return total + num;
}

function determinateCalc(matrix) {
    let a = matrix[0][0] * matrix[1][1];
    let b = -matrix[0][1] * matrix[1][0];

    let sum = [a, b];
    return sum.reduce(addArray);
}

function inverse(matrix) {
    let determinate = determinateCalc(matrix);

    let a = matrix[0][0]
    let b = matrix[0][1] * -1
    let c = matrix[1][0] * -1
    let d = matrix[1][1]

    let cofactors = [
        [d, b],
        [c, a]
    ];

    for (let i = 0; i <= 1; i++) {
        for (let y = 0; y <= 1; y++) {
            cofactors[i][y] = cofactors[i][y] / determinate;
        }
    }

    return cofactors;
}

export { inverse };

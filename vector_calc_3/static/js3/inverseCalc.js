function addArray(total, num) {
    return total + num;
}

function determinateCalc(matrix) {
    let a = matrix[0][0] * matrix[1][1] * matrix[2][2];
    let b = matrix[0][1] * matrix[1][2] * matrix[2][0];
    let c = matrix[0][2] * matrix[1][0] * matrix[2][1];

    let d = -matrix[0][2] * matrix[1][1] * matrix[2][0];
    let e = -matrix[0][1] * matrix[1][0] * matrix[2][2];
    let f = -matrix[0][0] * matrix[1][2] * matrix[2][1];

    let sum = [a, b, c, d, e, f];
    return sum.reduce(addArray);
}

function inverse(matrix) {
    let determinate = determinateCalc(matrix);

    let a = matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1];
    let b = -(matrix[0][1] * matrix[2][2] - matrix[0][2] * matrix[2][1]);
    let c = matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1];

    let d = -(matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]);
    let e = matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0];
    let f = -(matrix[0][0] * matrix[1][2] - matrix[0][2] * matrix[1][0]);

    let g = matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0];
    let h = -(matrix[0][0] * matrix[2][1] - matrix[0][1] * matrix[2][0]);
    let i = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let cofactors = [
        [a, b, c],
        [d, e, f],
        [g, h, i],
    ];

    for (let i = 0; i <= 2; i++) {
        for (let y = 0; y <= 2; y++) {
            cofactors[i][y] = cofactors[i][y] / determinate;
        }
    }

    return cofactors;
}

export { inverse };

function crossMult(invmatrix, constmatrix) {
    let fa =
        invmatrix[0][0] * constmatrix.x +
        invmatrix[0][1] * constmatrix.y;
    let fb =
        invmatrix[1][0] * constmatrix.x +
        invmatrix[1][1] * constmatrix.y;
    let finalmatrix = [];

    finalmatrix.fa = fa;
    finalmatrix.fb = fb;
    return finalmatrix;
}

export { crossMult };

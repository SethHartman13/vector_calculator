function crossMult(invmatrix, constmatrix) {
    let fa =
        invmatrix[0][0] * constmatrix.x +
        invmatrix[0][1] * constmatrix.y +
        invmatrix[0][2] * constmatrix.z;
    let fb =
        invmatrix[1][0] * constmatrix.x +
        invmatrix[1][1] * constmatrix.y +
        invmatrix[1][2] * constmatrix.z;
    let fc =
        invmatrix[2][0] * constmatrix.x +
        invmatrix[2][1] * constmatrix.y +
        invmatrix[2][2] * constmatrix.z;
    let finalmatrix = [];

    finalmatrix.fa = fa;
    finalmatrix.fb = fb;
    finalmatrix.fc = fc;
    return finalmatrix;
}

export { crossMult };

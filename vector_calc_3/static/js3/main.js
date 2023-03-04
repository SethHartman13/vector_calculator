import { inverse } from "./inverseCalc.js";
import { crossMult } from "./multCalc.js";

function grabInputs() {
    let ax = parseFloat(document.querySelector("#Ax").value);
    let ay = parseFloat(document.querySelector("#Ay").value);
    let az = parseFloat(document.querySelector("#Az").value);

    let bx = parseFloat(document.querySelector("#Bx").value);
    let by = parseFloat(document.querySelector("#By").value);
    let bz = parseFloat(document.querySelector("#Bz").value);

    let cx = parseFloat(document.querySelector("#Cx").value);
    let cy = parseFloat(document.querySelector("#Cy").value);
    let cz = parseFloat(document.querySelector("#Cz").value);

    let matrix = [
        [ax, bx, cx],
        [ay, by, cy],
        [az, bz, cz],
    ];
    return matrix;
}

function grabConstants() {
    let constmatrix = [];

    constmatrix.x = parseFloat(document.querySelector("#X").value);
    constmatrix.y = parseFloat(document.querySelector("#Y").value);
    constmatrix.z = parseFloat(document.querySelector("#Z").value);

    return constmatrix;
}

function outputAnswer(finalanswers) {
    if (isNaN(finalanswers.fa)) {
        finalanswers.fa = 'ERROR'
        finalanswers.fb = 'ERROR'
        finalanswers.fc = 'ERROR'
    }else if (isNaN(finalanswers.fb)) {
        finalanswers.fa = 'ERROR'
        finalanswers.fb = 'ERROR'
        finalanswers.fc = 'ERROR'
        
    }else if (isNaN(finalanswers.fc)){
        finalanswers.fa = 'ERROR'
        finalanswers.fb = 'ERROR'
        finalanswers.fc = 'ERROR'
        
    }

    document.querySelector("#Fa").value = finalanswers.fa;
    document.querySelector("#Fb").value = finalanswers.fb;
    document.querySelector("#Fc").value = finalanswers.fc;
}

function mainProgram() {
    let matrix = grabInputs();
    let constmatrix = grabConstants();

    let invmatrix = inverse(matrix);

    outputAnswer(crossMult(invmatrix, constmatrix));
}

document.querySelector("#calculate").addEventListener("click", mainProgram);

import { inverse } from "./inverseCalc.js";
import { crossMult } from "./multCalc.js";

function grabInputs() {
    let ax = parseFloat(document.querySelector("#Ax").value);
    let ay = parseFloat(document.querySelector("#Ay").value);

    let bx = parseFloat(document.querySelector("#Bx").value);
    let by = parseFloat(document.querySelector("#By").value);

    let matrix = [
        [ax, bx],
        [ay, by],
    ];
    return matrix;
}

function grabConstants() {
    let constmatrix = [];

    constmatrix.x = parseFloat(document.querySelector("#X").value);
    constmatrix.y = parseFloat(document.querySelector("#Y").value);

    return constmatrix;
}

function outputAnswer(finalanswers) {
    if (isNaN(finalanswers.fa)) {
        finalanswers.fa = 'ERROR'
        finalanswers.fb = 'ERROR'
    }else if (isNaN(finalanswers.fb)) {
        finalanswers.fa = 'ERROR'
        finalanswers.fb = 'ERROR'
        
    }

    document.querySelector("#Fa").value = finalanswers.fa;
    document.querySelector("#Fb").value = finalanswers.fb;

}

function mainProgram() {
    console.log("Ping")
    let matrix = grabInputs();
    let constmatrix = grabConstants();

    let invmatrix = inverse(matrix);

    outputAnswer(crossMult(invmatrix, constmatrix));
}

document.querySelector("#calculate").addEventListener("click", mainProgram);

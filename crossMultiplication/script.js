
let n1Elem = document.getElementById('first');
let n2Elem = document.getElementById('second');
let n3Elem = document.getElementById('third');
let button = document.getElementsByTagName('button')[0];

n3Elem.addEventListener('input', account);

let res = document.getElementById('result');

button.addEventListener('click', changeFormula);

var formulaAlt = false;

function account() {
    let n1 = Number(n1Elem.value);
    let n2 = Number(n2Elem.value);
    let n3 = Number(n3Elem.value);

    if (!formulaAlt) {
        formula = n2 * n3 / n1;
    } else {
        formula = n1 * n2 / n3;
    }

    res.innerText = formula;
}

function changeFormula() {
    if (!formulaAlt) {
        formulaAlt = true;
    } else {
        formulaAlt = false;
    }

    account();
}
const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let i = 0;
setInterval(() => repeat(), 500);
function repeat() {
    let codeColor = '#';
    for (i=0; i < 6; i++) {
        codeColor += getRandomElem(hexChars);
    }
    document.body.style.background = codeColor;
}

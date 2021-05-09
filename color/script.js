let inputColor = document.querySelector('input#color');
let subButton = document.querySelector('input#sub');

subButton.addEventListener('click', changeBackground);

function changeBackground() {
    console.log(inputColor.value);
    document.body.style.background = inputColor.value;
}

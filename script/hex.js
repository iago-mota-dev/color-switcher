const colorBtn = document.querySelector(".randomColor");

function randomColor(){
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
}
function setColor(){
    let colorName=`#${randomColor()}`;
    document.body.style.backgroundColor = colorName;
    colorBtn.innerHTML = `Switch Color: ${colorName}`;
}
colorBtn.addEventListener("click", setColor);
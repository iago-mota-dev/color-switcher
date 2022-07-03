const colorBtn = document.querySelector(".randomColor");

function randomColor(){
    const color = Math.floor(Math.random() * 255);
    return color;
}
function setColor(){
    let colorName=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
    document.body.style.backgroundColor = colorName;
    colorBtn.innerHTML = `Switch Color: ${colorName}`;
}
colorBtn.addEventListener("click", setColor);
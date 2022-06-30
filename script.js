const colorBtn = document.querySelector(".randomColor");

function randomColor(){
    const color = Math.floor(Math.random() * 255);
    return color;
}
function setColor(){
    document.body.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`
}
colorBtn.addEventListener("click", setColor);
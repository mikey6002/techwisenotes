const button = document.querySelector(".button")
console.log(button);
function handleClick(){
    console.log("button clicked");
    const ticker = document.querySelector("#ticker")
    console.log(ticker)
    console.log('stock ticker is',ticker.textContent)
}
button.addEventListener("click",handleClick)
const clickCounter = document.querySelector("#click-counter")
clickCounter.addEventListener("click",() =>{
    const currentCount= parseInt(clickCounter.textContent);
    clickCounter.textContent = currentCount +1;
})
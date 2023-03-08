const colors = ["A", "B", "C", "D", "E", "F", 0,1,2,3,4,5,6,7,8,9 ];

const btn = document.getElementsByClassName("button");
// const color = document.getElementsByClassName("color");
const color = document.querySelector(".color")

// on clicking on the button this function is being called and the color of the web page changes and we need to update the same on the UI.
function changeColor(){
    let randomNumber = "#";
    for(let i = 0; i < 6; i++){
        randomNumber += colors[getRandomNumber()];
    }
    // console.log(randomNumber);

    // we are updating the UI of the webpage i.e changing the color of the page upon every click
    document.body.style.backgroundColor = randomNumber;

    // we are changing the display value, i.e we are changing the text value of the color
    color.innerText = randomNumber;
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

async function copyText(){
    await navigator.clipboard.writeText(color.innerText);
    // copyMsg.innerText = "copied";
    console.log("copied");
    let temp = color.innerText;
    color.innerText = "✓ copied";
    setTimeout(() => {
        color.innerText = temp;
    }, 1000);
    


}
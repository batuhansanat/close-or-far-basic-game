//! Selectors
let inputGuess = document.querySelector("#myGuess")
let btnGuess = document.getElementById("btn-myGuess")
let btnHowToPlay = document.querySelector("#btn-howToPlay")
let btnPlayAgain = document.getElementById('btn-playAgain')
let modalPlay = document.querySelector("#modalPlay")
let ulGuessDOM = document.querySelector("#latestGuesses")
let formDOM = document.querySelector("form")
let infoText = document.getElementById("info")

//! Number
let number = Math.floor(Math.random()* 100) +1
let latestGuess = []

//! Func

console.log(number)

formDOM.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(inputGuess.value == ""){
        infoText.innerHTML = "Please get a number"
        infoText.style.color = "tomato"
        setTimeout(() => {
            infoText.innerHTML = ""
        }, 2000);
    }
    else{
        Different(inputGuess.value)
        latestGuess.push(inputGuess.value)
        getLastGuess()
    }
    inputGuess.value = ""
})

btnPlayAgain.addEventListener("click", ()=>{
    restart()
})

function Different(guess){
    let diff = Math.abs(number - guess)
    if(diff == 0){
        infoText.innerHTML = "Congratulations!"
        infoText.style.color = "white"
        infoText.style.background = "green"
        btnGuess.style.display = "none"
        btnPlayAgain.style.display = "block"
    }else if(diff < 5){
        infoText.innerHTML = "You're sooo close!"
        infoText.style.color = "green"
    }else if(diff < 10){
        infoText.innerHTML = "You're pretty close!"
        infoText.style.color = "#cdcd4d"
    }else if(diff < 30){
        infoText.innerHTML = "You're close!"
        infoText.style.color = "black"
    }else if(diff < 50){
        infoText.innerHTML = "You're not close!"
        infoText.style.color = "black"
    }else if(diff < 70){
        infoText.innerHTML = "You're pretty far man!"
        infoText.style.color = "orange"
    }else if(diff < 90){
        infoText.innerHTML = "You're the unluckiest man in the world! You're so far :("
        infoText.style.color = "red"
    }

}

function getLastGuess(){
    let index = latestGuess.length-1;
    console.log(index)
    let li = document.createElement('li');
    li.innerHTML = latestGuess[index]
    ulGuessDOM.append(li)
}

function restart(){
    inputGuess.value = ""
    infoText.innerHTML =""
    infoText.style.color = ""
    infoText.style.background = ""
    latestGuess = []
    ulGuessDOM.innerHTML = ""
    btnGuess.style.display = "block"
    btnPlayAgain.style.display = "none"
    number = Math.floor(Math.random()* 100) +1
    console.log(number)
}


//! Modal
btnHowToPlay.addEventListener('click',(e)=>{
    e.preventDefault();
    let modal = new bootstrap.Modal(modalPlay, alertOptions)
    modal.show()
})

let alertOptions = {
    animation: true
}

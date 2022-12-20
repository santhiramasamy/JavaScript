let numOne = document.getElementById("num-one")
let numTwo = document.getElementById("num-two")
let numThree = document.getElementById("num-three")
let scoreEl = document.getElementById("score-el")
let One = document.getElementById("one")
let Two = document.getElementById("two")
let Three = document.getElementById("three")
let Score = document.getElementById("score-element")


let count = 0
let counter = 0

numOne.addEventListener("click", function (){
    count+=1
    scoreEl.textContent=count
})

numTwo.addEventListener("click", function (){
    count+=2
    scoreEl.textContent=count
})

numThree.addEventListener("click", function (){
    count+=3
    scoreEl.textContent=count
})

One.addEventListener("click", function (){
    counter+=1
    Score.textContent=counter
})

Two.addEventListener("click", function (){
    counter+=2
    Score.textContent=counter
})

Three.addEventListener("click", function (){
    counter+=3
    Score.textContent=counter
})



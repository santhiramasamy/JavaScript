let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let Sum = document.getElementById("sum-el")

function add()
{
    add = num1 + num2
    Sum.textContent = "Sum: " + add
}

function subtract()
{
    sub = num1 - num2
    Sum.textContent = "Sum: " + sub
}

function divide()
{
   div = num1 / num2
   Sum.textContent = "Sum: " + div
}

function multiply()
{
    mult = num1 * num2
    Sum.textContent = "Sum: " + mult
}

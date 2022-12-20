let sentence = ["Hello","my","name","is","Per"]
let greetingEl = document.getElementById("greeting-el")

for(let count=0;count<sentence.length;count++)
{
    greetingEl.textContent += sentence[count] + " "
}
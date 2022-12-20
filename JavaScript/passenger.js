//document.getElementById("count").innerText=5   
var countEl = document.getElementById("count")
var saveEl = document.getElementById("save-el")
var count = 0

function increment()
{
    count+=1;
    countEl.textContent = count

}

function save()
{
    var save1 = count + " - "
    saveEl.textContent += save1
    countEl.textContent = 0
    count = 0
}


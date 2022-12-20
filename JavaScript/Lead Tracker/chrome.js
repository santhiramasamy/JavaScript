var myleads = []

/*myleads.push("www.google.com")
myleads = JSON.stringify(myleads)
console.log(myleads)*/  


const button = document.getElementById("input-btn")
const input = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

//localStorage.clear()  
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))


if(leadsFromLocalStorage){
  myleads = leadsFromLocalStorage
  render(myleads)
}

function render(leads)
{
var listItems = ""
for(let i=0;i<leads.length;i++)
{

  /* listItems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
   console.log(listItems)*/
   /*const li=document.createElement("li")
   li.textContent = myleads[i]
   ulEl.append(li)*/
   listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
      ${leads[i]}
      </a>
      </li> 
   `
}
ulEl.innerHTML =  listItems 
}

deletebtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myleads = []
  render(myleads)
})

button.addEventListener("click",function(){
    myleads.push(input.value)
    input.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myleads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myleads) )
      render(myleads)
    })
})


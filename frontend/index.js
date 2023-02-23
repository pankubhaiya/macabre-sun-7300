// from function 

let fd = document.getElementById("fd")
let from = document.getElementById("from")
let fs = document.getElementById("fs")
let fa = document.getElementsByClassName("fa")

fd.addEventListener("click",()=>{
      from.style.display="none"
      fs.style.display="block"
      fa.style.display="block"
})
fd.addEventListener("click",()=>{
     
})
// to fuction 


let td = document.getElementById("td")
let to = document.getElementById("to")
let ts = document.getElementById("ts")

td.addEventListener("click",()=>{
      to.style.display="none"
      ts.style.display="block"
})

// diparcher date

let ddiv= document.getElementById("ddiv")
let dd = document.getElementById("dd")
let departur = document.getElementById("departur")

ddiv.addEventListener("click",()=>{
    departur.style.display="none"
    dd.style.display="block"
})


//return date

let rdiv= document.getElementById("rdiv")
let rd = document.getElementById("rd")
let ret = document.getElementById("ret")

rdiv.addEventListener("click",()=>{
    ret.style.display="none"
    rd.style.display="block"
   
})


rd.addEventListener("submit",()=>{
    
    ret.innerText=rd.value
    rd.style.display="none"
   
})
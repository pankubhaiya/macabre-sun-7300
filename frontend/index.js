// from function 
let fd = document.getElementById("fd")
let from = document.getElementById("from")
let fs = document.getElementById("fs")


fd.addEventListener("click",()=>{
      from.style.display="none"
      fs.style.display="block"
     
})
 


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




let botton = document.getElementById("button")


botton.addEventListener("click",()=>{
     from.innerHTML=fs.value
    from.style.display="block"
    fs.style.display="none"
    to.innerHTML=ts.value
    to.style.display="block"
    ts.style.display="none"
     
    departur.innerHTML=dd.value
    departur.style.display="block"
    dd.style.display="none"

    ret.innerHTML=rd.value
    ret.style.display="block"
    rd.style.display="none"

})


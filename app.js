
    

function run(){
    let faktora = Math.floor((Math.random()*10)+1);
    let faktorb = Math.floor((Math.random()*10)+1);
    
    const outputa = document.getElementById("a")
    const outputb = document.getElementById("b")

    outputa.innerHTML = faktora
    outputb.innerHTML = faktorb
    document.getElementById("losung").innerHTML = "-"
}

function los(){
    let a = document.getElementById("a").innerHTML
    let b = document.getElementById("b").innerHTML

    document.getElementById("losung").innerHTML = a*b



}
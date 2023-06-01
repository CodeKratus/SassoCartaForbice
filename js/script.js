let utenteScore = 0;
let pcScore = 0;


const uts = document.getElementById("uts");
const pcs = document.getElementById("pcs");
const vincitaTemporanea = document.getElementById("chiVince");
const sasso = document.getElementById(i1);
const carta = document.getElementById(i2);
const forbice = document.getElementById(i3);


function randomPc(){
   let sceltaPc="";
    const randInt = Math.floor(Math.random() * 3);
    if(randInt == 0){
        sceltaPc = "s"
        console.log("ho stampato s")
        return sceltaPc;
    }else if(randInt == 1){
        sceltaPc = "c"
        console.log("ho stampato c")
        return sceltaPc;
    }else
    sceltaPc = "f" 
    console.log("ho stampato f")
    return sceltaPc;
}

function gioco(sceltaUtente){
    randomPc();
console.log(sceltaUtente)
}


function sassoClick(){
    return gioco("s");
}

function cartaClick(){
    return gioco("c");
}

function forbiceClick(){
    return gioco("f");
}
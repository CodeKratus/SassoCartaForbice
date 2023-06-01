let utenteScore = 0;
let pcScore = 0;


const uts = document.getElementById("uts");
const pcs = document.getElementById("pcs");
const vincitaTemporanea = document.getElementById("chiVince");
const vincitore = document.getElementById("vincitore")
const tiroPc = document.getElementById("tiroPc");

function randomPc(){
//    let sceltaPc="";
    const sceltaPc =['s','c','f'];
    const randInt = Math.floor(Math.random() * 3);
     return sceltaPc[randInt];
    // if(randInt == 0){
    //     sceltaPc = "s"
    //     console.log("ho stampato s")
    //     return sceltaPc;
    // }else if(randInt == 1){
    //     sceltaPc = "c"
    //     console.log("ho stampato c")
    //     return sceltaPc;
    // }else
    // sceltaPc = "f" 
    // console.log("ho stampato f")
    // return sceltaPc;
}

function gioco(sceltaUtente){
    vincitore.innerHTML ="";
    const resPc = randomPc();
    if(resPc == "s"){
    tiroPc.innerHTML = "Pc ha scelto sasso" }
    else if(resPc == "c"){
        tiroPc.innerHTML = "Pc ha scelto carta"
    }else{
        tiroPc.innerHTML = "Pc ha scelto forbice"}
    switch(sceltaUtente + resPc){
    case 'sf':
    case 'cs':
    case 'fc':
        vincitaTemporanea.innerHTML = "Utente vince il round!"
        utenteScore++;
        uts.innerHTML = utenteScore;
        break;
    case 'fs':
    case 'sc':
    case 'cf':
        vincitaTemporanea.innerHTML = "Pc vince il round"
        pcScore++;
        pcs.innerHTML = pcScore;
        break;
    case 'cc':
    case 'ff':
    case 'ss':
        vincitaTemporanea.innerHTML = "Pareggio!"
        break;

    }  
    if(utenteScore < 3 && pcScore < 3){
        return null;
    }else 
      chiamaVincitore();
}

function chiamaVincitore(){
    if(utenteScore ==3){
       vincitore.innerHTML = "Utente vince il gioco";
        utenteScore = 0;
        pcScore=0;
        uts.innerHTML = utenteScore;
        pcs.innerHTML = pcScore;
    }else 
    vincitore.innerHTML = "Pc vince il gioco";
        pcScore=0;
        utenteScore = 0;
        pcs.innerHTML = pcScore;
        uts.innerHTML = utenteScore;
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
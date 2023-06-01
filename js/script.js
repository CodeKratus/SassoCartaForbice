let utenteScore = 0;
let pcScore = 0;


const uts = document.getElementById("uts");
const pcs = document.getElementById("pcs");
const vincitaTemporanea = document.getElementById("chiVince");
const sasso = document.getElementById(i1);
const carta = document.getElementById(i2);
const forbice = document.getElementById(i3);


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
    if(utenteScore < 3 && pcScore < 3){
    const resPc = randomPc();
    console.log("Utente ha scelto " + sceltaUtente)
    console.log("Pc ha scelto " + resPc)
    switch(sceltaUtente + resPc){
    case 'sf':
    case 'cs':
    case 'fc':
        console.log("Utente vince il round!")
        
        utenteScore++;
        console.log("Utente score : " + utenteScore)
        break;
    case 'fs':
    case 'sc':
    case 'cf':
        console.log("Pc vince il round!")
        pcScore++;
        console.log("Pc score : " + pcScore)
        break;
    case 'cc':
    case 'ff':
    case 'ss':
        console.log("Pareggio!")
        break;

    }
    }else 
    chiamaVincitore();
}

function chiamaVincitore(){
    if(utenteScore ==3){
        console.log('Utente vince il gioco');
        utenteScore = 0;
    }else 
        console.log('Pc vince il gioco');
        pcScore=0;
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
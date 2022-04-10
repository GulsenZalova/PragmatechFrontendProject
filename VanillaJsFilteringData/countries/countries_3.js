"use strict";
// Ən çox şəhəri olan ölkə adını return edən funksiya yazın
let countries = {
    Afghanistan: [
        "Herat",
        "Kabul",
        "Kandahar",

    ],
    BAlbania: [
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        
    ],
    SAlgeria: [
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Tlemcen"
    ],
    ZAndorra: [
        "Andorra la Vella",
        "Canillo",
        "Encamp",
        "Engordany",
        "Escaldes-Engordany",
        "La Massana",
        "Llorts",
        "Ordino",
        "Santa Coloma",
        "Sispony",
        "Soldeu"
    ],
    XAngola: [
        "Ambriz",
        "Benguela",
        "Cabinda",
        "Cacole",
        "Camabatela",
        "Cazeta",
        "Huambo",
    
    ],
}

function countryCity(){
    let vals=Object.values(countries);
    let all=Object.entries(countries);
    let citylist=0;
    let countryName;
    for(let i=0; i< all.length; i++){
        if(vals[i].length>citylist){
            citylist=vals[i].length
            countryName=all[i][0]
        }
    }
    return console.log(countryName)
}
countryCity()
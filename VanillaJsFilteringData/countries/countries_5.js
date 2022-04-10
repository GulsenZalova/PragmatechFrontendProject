"use strict";
// Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}
countries = {
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

function countryAndCity(){
    let showObj={}
    let keys=Object.keys(countries);
    let vals=Object.values(countries)
    for(let i=0; i < vals.length; i++){
    showObj[`"${keys[i]}"`]=vals[i].length
    }
    return console.log(showObj);
}
countryAndCity()



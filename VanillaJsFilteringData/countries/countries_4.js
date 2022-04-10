"use strict";
// Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya yazın.
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

function countryName(){
    let showCity=[]
    let country=Object.keys(countries)
    let name=Object.entries(countries)
    let vals=Object.values(countries)
    for(let i=0;i<vals.length; i++){
     showCity.push(country[i].length)
     showCity.sort=(function(a,b){return (a-b)})
    if(country[i].length===showCity[0]){
        let showName=(name[i][1])
        let arr=[]
        arr.push(showName)
        return console.log(arr[0])
    }
    }
}
countryName()
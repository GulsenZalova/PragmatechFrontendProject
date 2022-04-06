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
    let country=Object.keys(countries)
    for(let i=0;i<country.length; i++){
     let name=Object.entries(countries)
     console.log(country[i].length)
    if(country[i].length==11){
        let showName=(name[i][1])
        alert(showName)
    }
    }
}
countryName()
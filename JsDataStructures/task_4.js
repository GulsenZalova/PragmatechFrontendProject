// inputs

let students = [{
    ad: 'Eli',
    soyad: 'Piriyev',
    yas: 23
}, {
    ad: 'Ehmed',
    soyad: 'Memmedov',
    yas: 34
}, {
    ad: 'Sara',
    soyad: 'Qurbanova',
    yas: 40
}, {
    ad: 'Sevda',
    soyad: 'Ezizova',
    yas: 58
}, {
    ad: 'Qurban',
    soyad: 'Sadiqzade',
    yas: 60
}]

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

console.log("Ad: " + students[0]["ad"] + ", Soyad: " + students[0]["soyad"] +", Yaş: " + students[0]["yas"] )
console.log("Ad: " + students[1]["ad"] + ", Soyad: " + students[1]["soyad"] +", Yaş: " + students[1]["yas"] )
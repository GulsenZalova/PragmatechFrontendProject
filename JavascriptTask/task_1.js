// a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.
let a=prompt("Zəhmət olmasa a ədədini daxil edin: ");
let b=prompt("Zəhmət olmasa b ədədini daxil edin: ");
let c=prompt("Zəhmət olmasa c ədədini daxil edin: ");

if ((Number(c)-Number(a))>(Number(c)-Number(b))){
    alert(" Daxil edilən b ədədi c ədədinə daha yaxındır. ")
}else{
    alert(" Daxil edilən a ədədi c ədədinə daha yaxındır. ")
}

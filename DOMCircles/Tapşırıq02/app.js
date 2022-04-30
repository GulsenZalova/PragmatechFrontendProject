
    // Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairələrdən ən böyük dariənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq

let container=document.querySelector(".container");
let box=document.createElement("div");
container.appendChild(box)
 function createMultipleCircle(_selector,_circleCount, _radius,_backgroundColor){
   for(let i=0; i<`${_circleCount}`; i++){
     let circle=document.createElement("div");
     box.className=`${_selector}`
     circle.className="box";
     box.appendChild(circle);
     circle.style.width=`${ _radius/i}px`;
     circle.style.height=`${ _radius/i}px`;
     circle.style.borderRadius="50%";
     circle.style.border="1px solid black";
     circle.style.backgroundColor=`${_backgroundColor}`
     box.style.position='relative';
     circle.style.position="absolute";
     box.style.display="flex";
     box.style.justifyContent="center";
    box.style.alignItems="center";
   }
 }
 createMultipleCircle('container', 4 , 400 ,"rgb(220, 227, 230)")
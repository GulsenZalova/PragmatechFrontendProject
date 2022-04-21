"use strict"

    // Verilən parametrlərə əsasən dairə yaradan metod yazın
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq


  function createCircle(_selector, _radius, _backgroundColor) {
    let container=document.querySelector(`${_selector}`);
    let circle=document.createElement("div");
    circle.className="box"
    container.appendChild(circle)
    circle.style.width=`${_radius}px`;
    circle.style.height=`${_radius}px`;
    circle.style.borderRadius="50%";
    circle.style.backgroundColor=`${_backgroundColor}`;
    circle.style.border="1px solid black"
  }
  createCircle(".container", 300, "rgb(220, 227, 230")




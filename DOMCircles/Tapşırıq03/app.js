
    // [Tapşırıq 02](#tapşırıq-02)-də verilən detallar eyni ilə tətbiq olunacaq.Bu tapşırıqda yaradacağınız dairələrin görüntüsü [Link](https://www.presentation-process.com/wp-content/uploads/editable-circles-graphic.jpg)-dəki kimi olmalıdır

function createMultipleCircle(_selector,_circleCount, _radius,_backgroundColor){
    for(let i=0; i<`${_circleCount}`;i++){
        let container=document.querySelector(".container");
        let box=document.createElement("div");
        container.appendChild(box)
        box.className=`${_selector}`;
        let circle=document.createElement("div");
        circle.className='box';
        box.appendChild(circle)
        circle.style.width=`${_radius/i}px`;
        circle.style.height=`${_radius/i}px`;
        circle.style.borderRadius="50%";
        circle.style.backgroundColor=`${_backgroundColor}`;
        circle.style.border='1px solid black'
        box.style.position="relative";
        box.style.display='flex';
        box.style.alignItems='flex-end'
        box.style.justifyContent='center'
        circle.style.position="absolute";
    }
}
createMultipleCircle('.container', 6, 400,"rgb(220, 227, 230)")
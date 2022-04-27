
    // radiusu 5px olan bir dairə yaradın
    // funksiya hər dəfə icra olunanda yaradılan dairə body elementinin daxilində təsadufi bir yerdə görünməlidir


function randomCirclePlacement() {
let body=document.querySelector('body');
let circle=document.createElement("div");
circle.className="box";
body.appendChild(circle)
circle.style.width="50px";
circle.style.height="50px";
circle.style.borderRadius="50%";
body.style.position='relative';
circle.style.position='absolute'
circle.style.backgroundColor='rgb(10, 5, 115)'
let a=Math.floor(Math.random() * (window.innerWidth-50))
let b=Math.floor(Math.random() * (window.innerHeight-50))
circle.style.top=`${a}px`;
circle.style.left=`${b}px`
}
randomCirclePlacement()



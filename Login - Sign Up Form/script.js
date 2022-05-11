"use strict";
// Eye iconuna klik etdikdə passwordun və iconun görünür-gizli olması
const eyeicon=document.querySelector(".eyeicon");
const input=document.querySelector("#password");

eyeicon.addEventListener("click", function(){
   if(input.type === "password"){
      input.type="text",
      eyeicon.classList.replace("fa-eye-slash", "fa-eye")
   }else if(input.type === "text"){
    input.type="password",
    eyeicon.classList.replace("fa-eye", "fa-eye-slash")
   }
})
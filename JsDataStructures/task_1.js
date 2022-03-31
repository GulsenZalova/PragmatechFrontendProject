// "use strict";

  // sadəcə burda kod yazmağınıza icaze verilir
    // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
    // while for və digər loop expressionları istifadə etmək olmaz

//  1-ci üsul
// (function() {
//  let i=0;
//  i++;
//  console.log(i)
//  if(i<=100){ 
//  arguments.callee(i)
//  }
// })()

// 2-ci üsul
// (function() {
//   let i=0;
//   let sirala=function(){
//     i++;
//     console.log(i)
//     if(i<100){
//       sirala()
//     }
//   }
//   sirala()
//  })()

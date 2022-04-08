// Mətn daxilində böyük hərflə başlayan sözlərin olduğu arrayı return edən funksiya yazın

let sampleNews=`As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen. Since then, you gradually realize that you have put too much effort into one thing: modifying the application. Even when implementing a simple task, it also requires understanding the whole system. You can’t blame them for changes or new features since they are inevitable parts of software development. So, what is the main problem here?
The obvious answer could be derived from the application’s design. Keeping the system design as clean and scalable as possible is one of the critical things that any professional developer should dedicate their time to. And that’s where SOLID design principles come into play. It helps developers eliminate design smells and build the best designs for a set of features.
Although the SOLID design principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`

function upperletterFind(){
let capital_arr=["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// let getRandomNumer=Math.floor(Math.random()*capital_arr.length);
let word=sampleNews.split(" ");
for(let i=0; i<=capital_arr; i++){
let wordFirstLetter=word[i][0]
console.log(wordFirstLetter)
if(capital_arr[i]==wordFirstLetter){
    console.log(word)
    }
  }
}   
upperletterFind()
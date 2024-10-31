var firstDice = Math.floor((Math.random() * 6) +1);
console.log(firstDice);
var secondDice = Math.floor((Math.random() * 6) +1);
console.log(secondDice);


var image1 = document.querySelector(".img1");
image1.src = './images/dice'+firstDice+'.png';
var image2 = document.querySelector(".img2");
image2.src =  './images/dice'+secondDice+'.png';

if(firstDice > secondDice){
    document.querySelector(".container h1").textContent = "First player won";
}else if(firstDice < secondDice){
    document.querySelector(".container h1").textContent = "Second player won";

}
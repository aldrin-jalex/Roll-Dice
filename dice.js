var ranNum1 = Math.floor(Math.random() *6)+ 1;
var ranImageSource1 = "./images/dice" + ranNum1 + ".png";
var image= document.querySelectorAll("img")[0] .setAttribute("src", ranImageSource1);

var ranNum2 = Math.floor(Math.random() *6)+ 1;
var ranImageSource2 = "./images/dice" + ranNum2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", ranImageSource2);

if(ranNum1 > ranNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!"
}

else if(ranNum1 === ranNum2){
    document.querySelector("h1").innerHTML = "It's a draw!!"
}

else{
    document.querySelector("h1").innerHTML = "Player 2 wins!!"
}
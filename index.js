const randomNumber1 = Math.ceil(Math.random()*6);
const images=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

const getImageElement=document.getElementsByTagName("img");
getImageElement[0].setAttribute("src",images[randomNumber1]);
getImageElement[1].setAttribute("src",images[randomNumber1]);
const playerOne=getImageElement[0].src;
const playerTwo=getImageElement[1].src;
const refreshElement= document.querySelector("h1")
function correlateBothDice (){if
(playerOne==playerTwo){
 return refreshElement.innerHTML="It is a draw";
}
 else if (playerOne>playerTwo) {
    return refreshElement.innerHTML="Player one won";  
 }
 else {return refreshElement.innerHTML="Player two won";}
}

correlateBothDice();
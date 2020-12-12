var colours = ["yellow","red","brown","blue","purple","green","white","brown","darkblue"];

var randomColorNumber = Math.floor(Math.random()*9)+1;

var randomColor = colours[randomColorNumber];

document.querySelector("body").style.backgroundColor=randomColor;
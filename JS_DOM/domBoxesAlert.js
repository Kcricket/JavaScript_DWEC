function pickAndSay1(){
    var oldNode= document.querySelector(".box1").childNodes[0];
    var node = document.createElement("p");
    node.innerHTML = "This text has been exchanged in the left-top div";
    var papa = document.querySelector('.box1');
    var nodeReplaced = papa.replaceChild(node, oldNode);
}

function pickAndSay2(){
    var oldNode= document.querySelector(".box2").childNodes[0];
    var node = document.createElement("p");
    node.innerHTML = "This text has been exchanged in the right-top div";
    var papa = document.querySelector('.box2');
    var nodeReplaced = papa.replaceChild(node, oldNode);
}

function pickAndSay3(){
    var oldNode= document.querySelector(".box3").childNodes[0];
    var node = document.createElement("p");
    node.innerHTML = "This text has been exchanged in the left-bottom div";
    var papa = document.querySelector('.box3');
    var nodeReplaced = papa.replaceChild(node, oldNode);
}

function pickAndSay4(){
    var oldNode= document.querySelector(".box4").childNodes[0];
    var node = document.createElement("p");
    node.innerHTML = "This text has been exchanged in the right-bottom   div";
    var papa = document.querySelector('.box4');
    var nodeReplaced = papa.replaceChild(node, oldNode);
}
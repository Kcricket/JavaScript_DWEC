function createParagraph(){
    var p = document.createElement("p");
    p.innerHTML = "This is an appended Child </br>"
    document.getElementById("content").appendChild(p);
}
//we use window onload to make the function execute after the html loaded
//If not, gEByID will return error, Typical noob mistake


function addChildBeforeNode(){
    var p = document.createElement("p");
    //In order to create something in a parent, regarding a relation with certain child,
    //We are going to need to acceed to that parent and to its children tith 'childNodes[] '
    var p2 = document.querySelector('#content').childNodes[2];
    p.innerHTML = "Elemento Antes de Elemento DESAPEARS IN 3 SECONS!"
    var p2Parent = p2.parentNode;
    p2Parent.insertBefore(p, p2); 
}




var killChild = () =>{
    setTimeout(function(){
        var p2 = document.querySelector('#content');
        p2.removeChild(p2.childNodes[2]);
    }, 3000);
}; 

function childExchange(){
    var oldNode= document.querySelector('#content').childNodes[0];
    var node = document.createElement("p");
    node.innerHTML = "This is the exchanged text";
    var papa = document.getElementById('content');
    var nodeReplaced = papa.replaceChild(node, oldNode);
}

window.onload =()=>{
    createParagraph()
    addChildBeforeNode()
    killChild()
} 



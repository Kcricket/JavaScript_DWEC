
//List of functions to call elements from the DOM tree.
  
function callFirstChild() {
    var x = document.getElementById("content").firstChild.nodeName;
    document.getElementById("demo1").innerHTML = x; 


  }

  function callLastChild() {
    var x = document.getElementById("content").lastChild.nodeName;
    document.getElementById("demo2").innerHTML = x; 


  }

  function callNextSibling() {
    var x = document.getElementById("h2t").nextSibling.nodeName;
    document.getElementById("demo3").innerHTML = x; 


  }

  function callPreviousSibling() {
    var x = document.querySelector("p").previousSibling.nodeName;
    document.getElementById("demo4").innerHTML = x; 


  }

  function callParentNode() {
    var x = document.getElementById("h2t").parentNode.nodeName;
    document.getElementById("demo5").innerHTML = x;
  }


  // Save the list of contents in a variable 'c', and iterate it displaying the nodeName of each element
  function callAllChildren() {
    var c = document.getElementById('content').childNodes;
    var txt = "";
    var i;
    for (i = 0; i < c.length; i++) {
      txt = txt + c[i].nodeName + "<br>";
    }
  
    document.getElementById("demo6").innerHTML = txt;
  }
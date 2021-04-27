// Notice the page wont run from /opt/lampp/htdocs/ directory
// Only from localhost/Page_Name :))
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 1){
           // When conection with server is established, the gif shall be revealed
        document.getElementById("gif").style.visibility="visible";
       }
      if (this.readyState == 4 && this.status == 200) { setTimeout(() => { 
        document.getElementById("pcontainer1").innerHTML = this.responseText;
        document.getElementById("gif").style.visibility="hidden";
        // Now that the request ended we send a message and make the gif be hidden again 
        }, 2000);
      }
    };
    // The response time is very short. So I implemented the upper setTimeout func to delay it
    xhttp.open("GET", "answer.txt", true);
    xhttp.send();
}


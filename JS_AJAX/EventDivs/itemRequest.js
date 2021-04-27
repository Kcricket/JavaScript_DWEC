
function saySo1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        x = JSON.parse( this.response);
        document.getElementById("xp").innerHTML = x.answer1;
        //The variable holds the txt from the json, but we want it to be more interactive so we make our txt disapear in 2 sec
        setTimeout(() => { 
            y = "";
            document.getElementById("xp").innerHTML = y;
            }, 2000);
      }
    };
    xhttp.open("GET", "answers.json", true);
    xhttp.send();
}

function saySo2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        x = JSON.parse( this.response);
        document.getElementById("xp2").innerHTML = x.answer2;
        setTimeout(() => { 
            y = "";
            document.getElementById("xp2").innerHTML = y;
            }, 2000);
      }
    };
    xhttp.open("GET", "answers.json", true);
    xhttp.send();
}

function saySo3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        x = JSON.parse( this.response);
        document.getElementById("xp3").innerHTML = x.answer3;
        setTimeout(() => { 
            y = "";
            document.getElementById("xp3").innerHTML = y;
            }, 2000);
      }
    };
    xhttp.open("GET", "answers.json", true);
    xhttp.send();
}

function saySo4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        x = JSON.parse( this.response);
        document.getElementById("xp4").innerHTML = x.answer4;
        setTimeout(() => { 
            y = "";
            document.getElementById("xp4").innerHTML = y;
            }, 2000);
      }
    };
    xhttp.open("GET", "answers.json", true);
    xhttp.send();
}
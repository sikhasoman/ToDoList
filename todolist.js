
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      var Output = "";
  for(var i=0;i<response.length;i++){
    if(response[i].completed === true){
          Output += "<li>" + "<input type='checkbox' onclick='fn(this)' checked disabled>" + "<span style='color:green;'>" + " " + response[i].title + "</input>" + "</li>";
      }

  else{
    Output += "<li>" + "<input type='checkbox' onclick='fn(this)'>" + " " + response[i].title + "</input>" + "</li>";
      }
  }

            document.getElementById("tryit").innerHTML =  Output;
  }
}
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}  

function redirect() {
  location.href = "./index.html";
}

var count = 0;
function fn(evnt){
   if(evnt.checked === true)
    {
     count ++ ;
    }
  else
  {
     count -- ;
  }
  if(count === 5)
  {
  alert("Congrats. 5 Tasks have been Successfully Completed");
  }
}

  
 



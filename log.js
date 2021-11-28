
var validate = (login) => {
    var user = document.getElementById("uname").value;
    var pass = document.getElementById("psw").value;
    var error = document.getElementById("error");
    var pderror = document.getElementById("pderror");
    if (user.trim() === "admin" && pass.trim() === "12345") {
        pderror.innerHTML = "success";
        pderror.style.color = "green";
        login();
       
        
      } else if (user.trim() !== "" && pass.trim() !== "") {
        pderror.innerHTML = "Wrong Username or Password ";
        pderror.style.color = "red";
       
      }
      if (user.trim() === "") {
        pderror.innerHTML = "Username cannot be blank";
        pderror.style.color = "red";
     
      }
      if (pass.trim() === "") {
        pderror.innerHTML = "Password cannot be blank";
        pderror.style.color = "red";
       
      }
      if (user.trim() === "" && pass.trim() === "") {
        pderror.innerHTML = "feilds can't be empty";
        pderror.style.color = "red";
        
      }
    };
    function navigate() {
        // window.open('ToDoList.html');
        location.href = "./ToDoList.html";
      }

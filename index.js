function passs(){
    var pass = document.getElementById("Pass");
    if(pass.value == " " || pass.value.trim() == "") {
      document.getElementById("e4").style.visibility = "visible";
      setInterval(() => {
        document.getElementById("e4").style.visibility = "hidden";
      }, 2000);
      return false;
    }else {
      return true;
    }
  }
  function validate() {
    var first = document.getElementById("fname");
    var last = document.getElementById("lname");
    var email = document.getElementById("emaill");
    
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (first.value.trim() == "" || first.value == " ") {
      document.getElementById("e1").style.visibility = "visible";
      setInterval(() => {
        document.getElementById("e1").style.visibility = "hidden";
      }, 2000);
      return false;

    } else if (last.value.trim() == "" || last.value == " ") {
      document.getElementById("e2").style.visibility = "visible";
      setInterval(() => {
        document.getElementById("e2").style.visibility = "hidden";
      }, 2000);
      return false;
    } else if (email.value == " " || email.value.trim() == "") {
      document.getElementById("p2").style.display = "block";
      document.getElementById("p1").style.display = "none";
      document.getElementById("e3").style.visibility = "visible";
      setInterval(() => {
        document.getElementById("p2").style.display = "none";
        document.getElementById("p1").style.display = "block";
        document.getElementById("e3").style.visibility = "hidden";
      }, 2000);
      return false;
    } else if (email.value != " ") {
      if (email.value.match(format)) {
        var a = 0;
      } else {
        document.getElementById("e3").style.visibility = "visible";
        setInterval(() => {
          document.getElementById("e3").style.visibility = "hidden";
        }, 2000);
        return false;
      }
    } 
    passs();

  }


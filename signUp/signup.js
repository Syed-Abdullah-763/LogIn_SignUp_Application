function signupHandler() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  var users = localStorage.getItem("users");
  

  if (users == null) {
    var userArr = [userObj];

    localStorage.setItem("users", JSON.stringify(userArr));
  } else {
    var userArr = JSON.parse(users);

    var check = true;
    for (var i = 0; i < userArr.length; i++) {
        
        if (email.value == userArr[i].email) {
        check = false;
        var error = document.getElementById("error");

        error.textContent = "Enter Unique Email Adress.";

        return;
      }
    }

    if (check == true) {
      userArr.push(userObj);

      var error = document.getElementById("error");
        error.textContent = "";

      localStorage.setItem("users", JSON.stringify(userArr));

      window.location.href = "../logedIn/logedIn.html"
    }
  }

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
}

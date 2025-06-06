function loginHandler(btn) {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var users = localStorage.getItem("users");
  var storageCheck = true;

  function showError(errorMsg) {
    var error = document.getElementById("error");

    error.innerHTML = errorMsg;
  }

  if (users == null) {
    storageCheck = false;

    showError("Email and Password is not matched");
  }

  if (storageCheck == true) {
    var userArr = JSON.parse(users);
    var isMatch = false;

    for (var userObj of userArr) {
      if (userObj.email == email.value && userObj.password == password.value) {
        isMatch = true;

        window.location.href = "./logedIn/logedIn.html";
      }
    }

    if (isMatch == false) {
      showError("Email and Password is not matched");
    }
  }
}

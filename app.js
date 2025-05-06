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

    for (var i = 0; i < userArr.length; i++) {
      if (
        email.value == userArr[i].email &&
        password.value == userArr[i].password
      ) {
        isMatch = true;

        btn.innerHTML = `<a href="./logedIn/logedIn.html">LogIn</a>`;

        email.value = "";
        password.value = "";
      }
    }

    if (isMatch == false) {
      showError("Email and Password is not matched");
    }
  }
}

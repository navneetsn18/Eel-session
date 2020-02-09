function checkSession() {
    eel.checkSessionpy()(function(res) {
        if (res == 0) {
            window.location = "login.html"
        }
    })
}

function loginjs() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    eel.loginpy(username, password)(function(res) {
        if (res == 1) {
            window.location = "index.html";
        } else {
            alert("Incorrect login details.");
            window.location = "login.html";
        }
    });
}

function logoutjs() {
    eel.logoutpy();
    window.location = "login.html";
}
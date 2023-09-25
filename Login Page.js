function logIn() {
    var username = document.getElementById("usernameElement"); 
    var password = document.getElementById("passwordElement");
    var userValue = username.value;
    var passwordValue = password.value;
    if (userValue == passwordValue && userValue.length>1) {
        alert("Login Successful!");
        localStorage.setItem('userLoginStatus', 'true');
    } else {
        alert("Please enter valid credentials!!");
    }
}
var loginValue = localStorage.getItem('userLoginStatus');
if (loginValue == 'true') {
    location.assign('Order List Page.html')
}
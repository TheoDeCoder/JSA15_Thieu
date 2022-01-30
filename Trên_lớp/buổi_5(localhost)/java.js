
function signIn() {
    console.log(username.value)
    console.log(password.value)
    var setlocal = localStorage.setItem(username.value, password.value);
}
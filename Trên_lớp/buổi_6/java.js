const register = (e) => {
    e.preventDefault();
    let userInfo = window.localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo)
    
    let username = document.getElementById("username-signup");
    let password = document.getElementById("password-signup");
    let passwordCheck = document.getElementById("password-signup-check")
    
    if (username.value && password.value && passwordCheck.value)  {
      if(passwordCheck.value==password.value){
        window.localStorage.setItem("username", username.value);
        window.localStorage.setItem("password", password.value);
        window.location.replace("file:///C:/Users/Windows%2010/OneDrive/M%C3%A1y%20t%C3%ADnh/MindX/ONL-JSA15/Tr%C3%AAn_l%E1%BB%9Bp/bu%E1%BB%95i_6/signin.html");
        let object = {
            username: username.value,
            password: password.value,
        };
        userInfo.push(object)
        } else {
            alert("Mật khẩu không trùng khớp!")
        }
    } else {
      alert("Không thành công!");
    }
}; 
    
  


    const login = (e) => {
    e.preventDefault();
    let username = document.getElementById("username-login");
    let password = document.getElementById("password-login");
    
    username

}
























//     if (username.value && password.value) {
//       let usr = window.localStorage.getItem("username");
//       let pass = window.localStorage.getItem("password");
  
//       if (usr == username.value) {
//         if (pass == password.value) {
//           alert("Đăng nhập thành công!");
//         } else {
//           alert("Sai mật khẩu!");
//         }
//       } else {
//         alert("Sai tài khoản!");
//       }
//     } else {
//       alert("Tài khoản không tồn tại");
//     }
// };
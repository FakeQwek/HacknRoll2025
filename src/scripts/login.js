

const passwordBox = document.getElementById("password-box");
const usernameBox = document.getElementById("username-box");
const loginButton = document.getElementById("login-button");
const url = "http://localhost:3200";

loginButton.addEventListener("click", () => {
    let username = "";
    let password = "";
    password = passwordBox.value;
    username = usernameBox.value;
    
    fetch(`${url}/user`)
    .then((response) => response.json())
    .then((body) => {
        for(let i = 0; i < body["data"].length; i++) {
            let data = body["data"][i];
            let user = data['Username'];
            let pass = data['Password'];
            if(user == username && pass == password) {
                window.location.assign("./home.html");
            }
            else {
                alert("Username or Password incorrect!");
            
            }
        }
        
    });
    
})
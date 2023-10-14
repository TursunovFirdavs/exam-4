const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const emailMessage = document.querySelector("[data-message-email]");
const passwordMessage = document.querySelector("[data-message-password]");
const mainMessage = document.querySelector("[data-main-message]");
const btn = document.querySelector("button");
const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

loginForm.addEventListener("submit", createNewUser)

function checkValue(value, regex, element, type) {
    if (!regex.test(value)) {
        element.setAttribute(`data-message-${type}`, "error");
        element.innerText = `${type} is invalid`.toUpperCase();
        element.style.display = "block";
    }
    return regex.test(value)
}

async function createNewUser(e) {
    console.log("1");
    e.preventDefault();
    const isEmailValid = checkValue(loginEmail.value, EMAIL_REGEX, emailMessage, "email");
    const isPasswordValid = checkValue(loginPassword.value, PASSWORD_REGEX, passwordMessage, "password");

    if (isEmailValid && isPasswordValid) {
        try {
            btn.setAttribute("disabled", true);
            const response = await axios.post("http://localhost:3000/api/auth/login", 
                {
                    "email": loginEmail.value,
                    "password": loginPassword.value,
                    headers: {"Content-Type": "application/json"}
                })
            console.log(response)
            if(response.status === 200){
                btn.removeAttribute("disabled");
                localStorage.setItem("user-token", response.data.token);
                location.replace(location.origin + "/pages/dashboard.html")
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    // else {
    //     $mainMessage.setAttribute("data-main-message", "error");
    //     $mainMessage.innerText = "You entered something wrong!";
    // }
}
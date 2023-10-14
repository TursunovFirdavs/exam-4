
const signupForm = document.querySelector("#signup-form");
const signupLastName = document.querySelector("#signup-lastname");
const signupEmail = document.querySelector("#signup-email");
const signupName = document.querySelector("#signup-name");
const signupPassword = document.querySelector("#signup-password");
const $usernameMessage = signupForm.querySelector("[data-message-username]");
const $emailMessage = signupForm.querySelector("[data-message-email]");
const $passwordMessage = signupForm.querySelector("[data-message-password]");
const $mainMessage = signupForm.querySelector("[data-main-message]");
const eyeIcon = document.querySelector(".fa-eye")
const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,}$/;
const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

signupForm.addEventListener("submit", createNewUser);

function checkValue(value, regex, element, type) {
    if (!regex.test(value)) {
        element.setAttribute(`data-message-${type}`, "error");
        element.innerText = `${type} is invalid`.toUpperCase();
        element.style.display = "block";
    }
    return regex.test(value)
}

async function createNewUser(e) {
    e.preventDefault();
    const isEmailValid = checkValue(signupEmail.value, EMAIL_REGEX, $emailMessage, "email");
    const isPasswordValid = checkValue(signupPassword.value, PASSWORD_REGEX, $passwordMessage, "password");

    if (isEmailValid && isPasswordValid) {
        try {
           await axios
           .post(`http://localhost:3000/api/auth/signup`, 
            {
                firstname: signupName.value,
                lastname: signupLastName.value,
                email: signupEmail.value,
                password: signupPassword.value,
                headers: {"Content-Type": "application/json"}
            })
            .then(res => {
                console.log(res);
                if(res.status == 201){
                    location.replace(location.origin + "/pages/login.html")
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

eyeIcon.addEventListener("click", () => {
    if(signupPassword.type == "password") {
        signupPassword.type = "text"
    }
    else {
        signupPassword.type = "password"
    }
})


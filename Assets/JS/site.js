const correctUsername = "Vitalii";
const correctPassword = "676767";

function checkLogin(username, password) {
    return username === correctUsername && password === correctPassword;
}

function login(username, password) {
    if (checkLogin(username, password)) {
        document.cookie = "loggedIn=true; max-age=86400; path=/";
        return true;
    }

    showLoginScreen();
    return false;
}

function createLoginForm() {
    const main = document.createElement("main");

    const form = document.createElement("form");

    const usernameLabel = document.createElement("label");

    const usernameInput = document.createElement("input");

    const passwordLabel = document.createElement("label");

    const passwordInput = document.createElement("input");

    const submitButton = document.createElement("button");
    
    const message = document.createElement("p");

    form.id = "login-form";
    usernameLabel.htmlFor = "username";
    usernameLabel.textContent = "Username";
    usernameInput.id = "username";
    usernameInput.name = "username";
    usernameInput.type = "text";
    usernameInput.required = true;
    passwordLabel.htmlFor = "password";
    passwordLabel.textContent = "Password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.type = "password";
    passwordInput.required = true;
    submitButton.type = "submit";
    submitButton.textContent = "Log in";
    message.id = "login-message";
    message.setAttribute("role", "alert");

    form.append(
        usernameLabel,
        usernameInput,
        passwordLabel,
        passwordInput,
        submitButton,
        message
    );
    main.append(form);
    document.body.append(main);

    form.addEventListener("submit", function (event) {
    event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (login(username, password)) {
            message.textContent = "Login successful.";
            message.className = "success";
        } else {
            message.textContent = "Username or password is incorrect.";
            message.className = "error";
        }
    });
}

function showLoginScreen() {
    if (!document.getElementById("login-form")) {
        createLoginForm();
    }
}

createLoginForm();


const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
}
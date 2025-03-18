const loginEmail = document.getElementById("login-email");
const loginEmailAlert = document.getElementById("login-email-alert");

function emailAlert(event) {
  if (event.target.value === "") {
    loginEmailAlert.innerText = "이메일을 입력해주세요.";
    loginEmailAlert.classList.remove("hidden");

    loginEmail.style.border = `1px solid var(--alert-color)`;
    return;
  }
  loginEmailAlert.innerText = "";
  loginEmailAlert.classList.add("hidden");
  loginEmail.style.border = "none";
}

loginEmail.addEventListener("focusout", emailAlert);

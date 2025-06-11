const btnSignIn = document.getElementById("sign-in"),
  btnSignUp = document.getElementById("sign-up"),
  formLogin = document.querySelector(".login"),
  formRegister = document.querySelector(".register");

btnSignUp.addEventListener("click", (e) => {
  formLogin.classList.add("is-hidden");
  formRegister.classList.remove("is-hidden");
});

btnSignIn.addEventListener("click", (e) => {
  formRegister.classList.add("is-hidden");
  formLogin.classList.remove("is-hidden");
});

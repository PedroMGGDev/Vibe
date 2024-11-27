document.addEventListener("DOMContentLoaded", () => {
  // Referências aos botões e containers
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  // Alterar para modo de cadastro
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    document.querySelector(".sign-in-form").style.display = "none";
    document.querySelector(".sign-up-form").style.display = "block";
  });

  // Alterar para modo de login
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    document.querySelector(".sign-in-form").style.display = "block";
    document.querySelector(".sign-up-form").style.display = "none";
  });

  // Configuração do Firebase
  
  

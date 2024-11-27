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
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBEPa65Myn-ejVbyGWuyLMuDhrlqiPzIvc",
    authDomain: "groupbuy-9e93e.firebaseapp.com",
    projectId: "groupbuy-9e93e",
    storageBucket: "groupbuy-9e93e.appspot.com",
    messagingSenderId: "1093381465844",
    appId: "1:1093381465844:web:54ac1479ade1f6c2cfa0a1",
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Função de login
  const loginForm = document.querySelector(".sign-in-form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email-login").value.trim();
    const senha = document.getElementById("senha-login").value.trim();

    try {
      const usuariosRef = collection(db, "usuarios");
      const userQuery = query(usuariosRef, where("email", "==", email), where("senha", "==", senha));
      const userSnapshot = await getDocs(userQuery);

      if (!userSnapshot.empty) {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
      } else {
        alert("E-mail ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  });

  // Função de cadastro
  const signUpForm = document.querySelector(".sign-up-form");
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome-cadastro").value.trim();
    const email = document.getElementById("email-cadastro").value.trim();
    const telefone = document.getElementById("telefone-cadastro").value.trim();
    const senha = document.getElementById("senha-cadastro").value.trim();
    const confirmaSenha = document.getElementById("confirmaSenha-cadastro").value.trim();

    if (senha !== confirmaSenha) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      const usuariosRef = collection(db, "usuarios");

      // Verificar se o e-mail já está cadastrado
      const emailQuery = query(usuariosRef, where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);
      if (!emailSnapshot.empty) {
        alert("E-mail já cadastrado!");
        return;
      }

      // Verificar se o telefone já está cadastrado
      const telefoneQuery = query(usuariosRef, where("telefone", "==", telefone));
      const telefoneSnapshot = await getDocs(telefoneQuery);
      if (!telefoneSnapshot.empty) {
        alert("Telefone já cadastrado!");
        return;
      }

      // Adicionar usuário ao Firestore
      await addDoc(usuariosRef, {
        nome,
        email,
        telefone,
        senha, // **Nota**: Não armazene senhas em texto puro em produção.
      });

      alert("Cadastro realizado com sucesso!");
      signUpForm.reset();
      window.location.href = "profiles.html";
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  });
});

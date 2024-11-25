// Importar as funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFqEgc2jaOafTVsCwL5Zt65DHFHttcjok",
  authDomain: "vibe-8002b.firebaseapp.com",
  databaseURL: "https://vibe-8002b-default-rtdb.firebaseio.com",
  projectId: "vibe-8002b",
  storageBucket: "vibe-8002b.appspot.com",
  messagingSenderId: "1031587492132",
  appId: "1:1031587492132:web:9e9a1ce28ec6a596d843b1",
  measurementId: "G-JVPNDD1HM5",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Seleciona o formulário e os campos de entrada
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const professionInput = document.getElementById('profession');

// Adiciona evento ao formulário
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que a página recarregue

    // Coleta os valores do formulário
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const profession = professionInput.value.trim();

    // Verifica se os campos estão preenchidos
    if (name && age && profession) {
        // Salva os dados no Firebase
        const profilesRef = ref(database, 'profiles');
        const newProfileRef = push(profilesRef);
        set(newProfileRef, {
            name: name,
            age: age,
            profession: profession,
            photo: "default.png", // Foto padrão
        })
        .then(() => {
            console.log("Perfil criado com sucesso!");
            // Redireciona para profiles.html
            window.location.href = "profiles.html";
        })
        .catch((error) => {
            console.error("Erro ao criar perfil:", error);
        });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

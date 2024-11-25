// Firebase setup
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

// Firebase config (use as configurações reais de seu Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAFqEgc2jaOafTVsCwL5Zt65DHFHttcjok",
  authDomain: "vibe-8002b.firebaseapp.com",
  databaseURL: "https://vibe-8002b-default-rtdb.firebaseio.com",
  projectId: "vibe-8002b",
  storageBucket: "vibe-8002b.firebasestorage.app",
  messagingSenderId: "1031587492132",
  appId: "1:1031587492132:web:9e9a1ce28ec6a596d843b1",
  measurementId: "G-JVPNDD1HM5"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Seleciona os campos do formulário
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const professionInput = document.getElementById('profession');

// Adiciona o evento para o formulário de cadastro
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o recarregamento da página

    // Coleta os valores dos campos de input
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const profession = professionInput.value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name && age && profession) {
        // Cria um novo perfil no Firebase
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
            window.location.href = "profiles.html"; // Redirecionamento
        })
        .catch((error) => {
            console.error("Erro ao criar perfil:", error);
        });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

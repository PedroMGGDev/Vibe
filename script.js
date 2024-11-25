// Importar as funções necessárias do Firebase
import { getDatabase, ref, onValue } from "firebase/database";

// Inicializar o Firebase Database
const database = getDatabase();
const profilesRef = ref(database, 'profiles');

// Seleciona os elementos
const profileContainer = document.querySelector('.profile-container');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const resetButton = document.getElementById('reset-button');

let currentProfileIndex = 0;
let profiles = [];

// Função para carregar os perfis do Firebase
function loadProfilesFromFirebase() {
    onValue(profilesRef, (snapshot) => {
        if (snapshot.exists()) {
            profiles = Object.values(snapshot.val()); // Converte o snapshot em um array
            renderProfiles();
        } else {
            console.log("Nenhum perfil encontrado.");
        }
    });
}

// Função para renderizar os perfis no DOM
function renderProfiles() {
    profileContainer.innerHTML = ''; // Limpa os perfis existentes
    profiles.forEach((profile, index) => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        if (index !== 0) profileDiv.classList.add('hidden'); // Esconde todos exceto o primeiro
        profileDiv.innerHTML = `
            <img src="${profile.photo || 'default.png'}" alt="${profile.name}">
            <div class="profile-info">
                <h3>${profile.name}, ${profile.age}</h3>
                <p>${profile.profession}</p>
            </div>
        `;
        profileContainer.appendChild(profileDiv);
    });
    currentProfileIndex = 0; // Reinicia o índice
}

// Função para mostrar o próximo perfil
function showNextProfile() {
    const profileElements = document.querySelectorAll('.profile');
    if (currentProfileIndex < profileElements.length - 1) {
        profileElements[currentProfileIndex].classList.add('hidden');
        currentProfileIndex++;
        profileElements[currentProfileIndex].classList.remove('hidden');
    }
}

// Adicionando os eventos para os botões
likeButton.addEventListener('click', showNextProfile);
dislikeButton.addEventListener('click', showNextProfile);

// Função para reiniciar os perfis
resetButton.addEventListener('click', () => {
    const profileElements = document.querySelectorAll('.profile');
    profileElements.forEach(profile => profile.classList.add('hidden'));
    currentProfileIndex = 0;
    profileElements[currentProfileIndex].classList.remove('hidden');
});

// Carregar perfis ao iniciar o aplicativo
loadProfilesFromFirebase();

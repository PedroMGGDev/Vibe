// Seleciona os elementos
const profiles = document.querySelectorAll('.profile');
let currentProfileIndex = 0;

const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const resetButton = document.getElementById('reset-button');

// Função para mostrar o próximo perfil
function showNextProfile() {
    if (currentProfileIndex < profiles.length - 1) {
        profiles[currentProfileIndex].classList.add('hidden');
        currentProfileIndex++;
        profiles[currentProfileIndex].classList.remove('hidden');
    }
}

// Adicionando os eventos para os botões
likeButton.addEventListener('click', () => {
    showNextProfile();
});

dislikeButton.addEventListener('click', () => {
    showNextProfile();
});

// Função para reiniciar os perfis
resetButton.addEventListener('click', () => {
    profiles.forEach(profile => profile.classList.add('hidden'));
    currentProfileIndex = 0;
    profiles[currentProfileIndex].classList.remove('hidden');
});

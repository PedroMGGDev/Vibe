// script.js

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const appContent = document.querySelector(".app");
    const profiles = document.querySelectorAll(".profile");
    const likeButton = document.getElementById("like-button");
    const dislikeButton = document.getElementById("dislike-button");
    const resetButton = document.getElementById("reset-button");

    let currentProfileIndex = 0;

    // Esconde a tela de carregamento após 5 segundos
    setTimeout(() => {
        loadingScreen.style.display = "none";
        appContent.style.display = "block";
        showProfile(currentProfileIndex); // Mostra o primeiro perfil
    }, 5000);

    // Função para exibir o perfil atual
    function showProfile(index) {
        profiles.forEach((profile, i) => {
            profile.classList.add("hidden");
            if (i === index) {
                profile.classList.remove("hidden");
            }
        });
    }

    // Lógica para o botão de like
    likeButton.addEventListener("click", () => {
        nextProfile();
    });

    // Lógica para o botão de dislike
    dislikeButton.addEventListener("click", () => {
        nextProfile();
    });

    // Mostra o próximo perfil
    function nextProfile() {
        currentProfileIndex++;
        if (currentProfileIndex < profiles.length) {
            showProfile(currentProfileIndex);
        } else {
            alert("Não há mais perfis disponíveis!");
            currentProfileIndex = profiles.length - 1; // Mantém no último perfil
        }
    }

    // Lógica para o botão de reset
    resetButton.addEventListener("click", () => {
        currentProfileIndex = 0;
        showProfile(currentProfileIndex);
    });
});

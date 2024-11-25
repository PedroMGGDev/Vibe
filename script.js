document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const appContent = document.querySelector(".app");
    const profiles = document.querySelectorAll(".profile");
    const likeButton = document.getElementById("like-button");
    const dislikeButton = document.getElementById("dislike-button");
    const resetButton = document.getElementById("reset-button");

    let currentProfileIndex = 0;

    // Função para exibir o perfil atual
    function showProfile(index) {
        profiles.forEach((profile, i) => {
            if (i === index) {
                profile.classList.remove("hidden");
            } else {
                profile.classList.add("hidden");
            }
        });
    }

    // Esconde a tela de carregamento após 5 segundos
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Oculta a tela de carregamento
        appContent.style.display = "block";  // Mostra o conteúdo principal
        showProfile(currentProfileIndex);    // Mostra o primeiro perfil
    }, 5000);

    // Lógica para os botões de like e dislike
    likeButton.addEventListener("click", () => {
        nextProfile();
    });

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

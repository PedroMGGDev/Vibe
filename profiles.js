// Seleciona o contêiner de perfis
const profileContainer = document.querySelector('.profile-container');

// Carrega os perfis do localStorage
const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];

// Função para criar um perfil no DOM
function createProfile(profile) {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');

    profileDiv.innerHTML = `
        <img src="default-avatar.png" alt="${profile.name}">
        <div class="profile-info">
            <h3>${profile.name}, ${profile.age}</h3>
            <p>${profile.profession}</p>
        </div>
    `;

    profileContainer.appendChild(profileDiv);
}

// Adiciona os perfis ao contêiner
storedProfiles.forEach(profile => createProfile(profile));

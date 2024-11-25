// Captura o formulário de cadastro
const signupForm = document.getElementById('signup-form');

// Verifica se o formulário existe (para evitar erros)
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o reload da página

        // Coleta os dados do formulário
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const profession = document.getElementById('profession').value;

        // Cria um objeto com as informações do perfil
        const newProfile = {
            name: name,
            age: age,
            profession: profession,
        };

        // Salva o perfil no localStorage
        let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        profiles.push(newProfile);
        localStorage.setItem('profiles', JSON.stringify(profiles));

        // Redireciona para profiles.html
        window.location.href = 'profiles.html';
    });
}

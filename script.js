// Configuração do Firebase
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

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Seleciona o formulário de cadastro
const signupForm = document.getElementById('signup-form');

// Função para salvar os dados no Firebase
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário e o recarregamento da página

    // Pega os valores do formulário
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;

    // Cria um novo perfil no banco de dados
    const profilesRef = database.ref('profiles');
    const newProfileRef = profilesRef.push(); // Cria um novo perfil com um ID único
    newProfileRef.set({
        name: name,
        age: age,
        profession: profession
    }).then(() => {
        // Redireciona para a página de perfis após salvar os dados
        window.location.assign('profiles.html'); // Usar location.assign para garantir que o redirecionamento aconteça sem recarregar
    }).catch((error) => {
        console.error('Erro ao salvar os dados: ', error);
    });
});

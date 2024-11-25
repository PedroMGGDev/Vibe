// Importar as funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFqEgc2jaOafTVsCwL5Zt65DHFHttcjok",
  authDomain: "vibe-8002b.firebaseapp.com",
  databaseURL: "https://vibe-8002b-default-rtdb.firebaseio.com",
  projectId: "vibe-8002b",
  storageBucket: "vibe-8002b.firebasestorage.app",
  messagingSenderId: "1031587492132",
  appId: "1:1031587492132:web:9e9a1ce28ec6a596d843b1",
  measurementId: "G-JVPNDD1HM5",
};

// Inicializar Firebase e o Realtime Database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referência ao Database para perfis
const profilesRef = ref(database, 'profiles');

// Função para salvar um novo perfil
function saveProfile(name, age, profession, photo) {
    const newProfileRef = push(profilesRef); // Cria um ID único para o perfil
    set(newProfileRef, {
        name: name,
        age: age,
        profession: profession,
        photo: photo || "default.png", // Foto padrão caso não seja fornecida
    })
    .then(() => {
        console.log("Perfil salvo com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao salvar perfil:", error);
    });
}

// Exemplo de uso: Salvar perfis
saveProfile("Samuel", 24, "Engenheiro de Software", "Samuel.png");
saveProfile("Miguel", 27, "Advogado", "Miguel.png");
saveProfile("Pedrinho", 21, "Estudante de Engenharia", "Pedrinho.png");
saveProfile("Miguelzinho", 29, "Empresário", "Miguelzinho.png");

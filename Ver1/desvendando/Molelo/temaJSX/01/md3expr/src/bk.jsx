import { useState, useEffect } from 'react';
import './App.css';
import UserProfileCard from './UserProfileCard'; // Importar o UserProfileCard

function App() {
  // 1. Estado para o tema atual
  // Inicializa com o tema salvo no localStorage ou 'light' como padrão.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Estados para controlar os inputs do formulário e o estado de carregamento
  
 
  
  const [currentUser, setCurrentUser] = useState(null); // Estado para o usuário logado
 

  // 2. Efeito para aplicar o tema e salvar no localStorage
  useEffect(() => {
    // Remove classes de tema anteriores para evitar conflitos
    document.documentElement.classList.remove('light-theme', 'dark-theme', 'expressive-theme');
    // Adiciona a classe do tema atual ao elemento <html>
    document.documentElement.classList.add(`${theme}-theme`);
    // Salva a preferência do tema no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Este efeito roda sempre que o estado 'theme' mudar

  // 3. Função para lidar com a mudança de tema pelo select
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  const handleLogout = () => {
    setCurrentUser(null);
    // Adicione aqui qualquer outra lógica de limpeza de sessão, se necessário
    // Por exemplo, limpar tokens do localStorage, etc.
  };

  return (
    <div className="app-container">
      <header className="app-header">

        <div className="theme-selector-container">
          <label htmlFor="theme-select" className="theme-label">Tema:</label>
          <select id="theme-select" value={theme} onChange={handleThemeChange} className="theme-select">
            <option value="light">Claro ☀️</option>
            <option value="dark">Escuro 🌙</option>
            <option value="expressive">Expressivo ✨</option>
          </select>
        </div>
      </header>

      {currentUser ? (
        // Se currentUser existir, mostra o UserProfileCard
        <UserProfileCard
          
          onLogout={handleLogout} // Passa a função de logout para o UserProfileCard
        />
      ) : (
        // Caso contrário, mostra o formulário de login
        <div className="login-container">
          
          
          
         Modelo
          
          <div className="extra-links">
            <p>Ainda não faz parte? <a href="#">Crie sua conta!</a></p>
            <p><a href="#">Esqueceu a senha?</a></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

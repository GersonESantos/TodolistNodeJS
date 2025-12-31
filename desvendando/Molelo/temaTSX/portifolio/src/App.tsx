import { useState, useEffect } from 'react';
import { styled } from "@mui/material";
import './App.css';

interface HeroProps {
  theme: string;
}

interface User {
  name: string;
  email: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {  
    const StyledHero = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: theme === 'dark' ? "black" : 
                   theme === 'light' ? "white" : 
                   theme === 'expressive' ? "linear-gradient(45deg, #ff6b6b, #4ecdc4)" : "black",
        color: theme === 'light' ? "black" : "white",
        transition: "all 0.3s ease"
    }));

    return (
        <StyledHero>
            <h1>Welcome to My Portfolio</h1>
        </StyledHero>
    );
};

const App: React.FC = () => {
    // 1. Estado para o tema atual
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // 2. Efeito para aplicar o tema e salvar no localStorage
    useEffect(() => {
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'expressive-theme');
        document.documentElement.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 3. Função para lidar com a mudança de tema pelo select
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    const handleLogin = () => {
        setCurrentUser({ name: 'Usuário Teste', email: 'teste@email.com' });
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
                
                {/* Botão de login/logout */}
                {currentUser ? (
                    <button onClick={handleLogout} className="auth-button">Logout</button>
                ) : (
                    <button onClick={handleLogin} className="auth-button">Login</button>
                )}
            </header>

            {currentUser ? (
                <div className="user-profile">
                    <h2>Bem-vindo, {currentUser.name}!</h2>
                    <p>Email: {currentUser.email}</p>
                </div>
            ) : (
                <div className="login-container">
                    <Hero theme={theme} />
                    
                    <div className="extra-links">
                        <p>Ainda não faz parte? <a href="#">Crie sua conta!</a></p>
                        <p><a href="#">Esqueceu a senha?</a></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
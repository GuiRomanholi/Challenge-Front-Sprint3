
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../style/Login.module.css';

export default function Login() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Após o submit, apenas definimos isLoggedIn como true
        setIsLoggedIn(true);

        setTimeout(() => {
            navigate('/'); // Certifique-se de que "/home" seja o caminho correto para sua página Home
        }, 2000);
    };

    return (
        <div className={styles.loginContainer}>
            {isLoggedIn ? (
                <div className={styles.successMessage}>
                    Você está logado!
                </div>
            ) : (
                <form id="form-login" className={styles.loginForm} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input
                        type="text"
                        name="txtLogin"
                        id="idLogin"
                        className={styles.inputField}
                        placeholder="Usuário"
                        required
                    />
                    <input
                        type="password"
                        name="txtSenha"
                        id="idSenha"
                        className={styles.inputField}
                        placeholder="Senha"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Entrar</button>
                    <Link className={styles.createAccountLink} to={"/cadastro"}>Criar uma conta</Link>
                </form>
            )}
        </div>
    );
}

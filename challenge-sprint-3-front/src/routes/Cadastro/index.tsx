import { Link, useNavigate } from 'react-router-dom';
import styles from '../../style/Cadastro.module.css';
import React, { useState } from 'react';

export default function Cadastro(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = (event.currentTarget.elements.namedItem('txtName') as HTMLInputElement).value;
        const confirmName = (event.currentTarget.elements.namedItem('txtConfirmName') as HTMLInputElement).value;
        const password = (event.currentTarget.elements.namedItem('txtPassword') as HTMLInputElement).value;
        const confirmPassword = (event.currentTarget.elements.namedItem('txtConfirmPassword') as HTMLInputElement).value;

        if (name !== confirmName) {
            setErrorMessage("Os nomes não coincidem.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem.");
            return;
        }

        // Se as validações passarem, exibe a mensagem de sucesso
        setIsSubmitted(true);
        setErrorMessage("");

        // Após 3 segundos, redireciona para a página de login
        setTimeout(() => {
            navigate('/login');
        }, 3000); // 3000ms = 3 segundos
    };



    return(
        <div className={styles.registerContainer}>
            {isSubmitted ? (
                <div className={styles.successMessage}>
                    Cadastrado com sucesso! Redirecionando para a tela de login...
                </div>
            ) : (
                <form id="form-register" className={styles.registerForm} onSubmit={handleSubmit}>
                    <h2>Cadastro</h2>
                    <input
                        type="text"
                        name="txtName"
                        id="idName"
                        className={styles.inputField}
                        placeholder="Insira seu nome"
                        required
                    />
                    <input
                        type="text"
                        name="txtConfirmName"
                        id="idConfirmName"
                        className={styles.inputField}
                        placeholder="Confirme seu nome"
                        required
                    />
                    <input
                        type="password"
                        name="txtPassword"
                        id="idPassword"
                        className={styles.inputField}
                        placeholder="Insira sua senha"
                        required
                    />
                    <input
                        type="password"
                        name="txtConfirmPassword"
                        id="idConfirmPassword"
                        className={styles.inputField}
                        placeholder="Confirme sua senha"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Cadastrar</button>
                    <Link className={styles.loginLink} to={"/login"}>Já possui uma conta? Login</Link>

                    {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                </form>
            )}
        </div>
    );
}
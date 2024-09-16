

import { Link } from 'react-router-dom';
import styles from '../../style/Login.module.css';

export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <form id="form-login" className={styles.loginForm} action="../pag-chamado/chamado.html" method="get">
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
        </div>
    );
}

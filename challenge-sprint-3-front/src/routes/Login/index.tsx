

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
                    placeholder="CPF ou E-mail"
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
                <a href="../pag-cadastro/cadastro.html" className={styles.createAccountLink} title="Criar uma conta">Criar uma conta</a>
            </form>
        </div>
    );
}

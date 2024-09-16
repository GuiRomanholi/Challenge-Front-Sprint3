import { Link } from 'react-router-dom';
import styles from '../../style/Cadastro.module.css';

export default function Cadastro(){
    return(
        <div className={styles.registerContainer}>
            <form id="form-register" className={styles.registerForm} action="../pag-chamado/chamado.html" method="get">
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
            </form>
        </div>
    );
}
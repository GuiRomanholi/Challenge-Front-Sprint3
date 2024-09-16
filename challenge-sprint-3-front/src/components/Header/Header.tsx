import Logo from '../../../public/img/logo_ccs.png';
import { Link } from 'react-router-dom';
import styles from '../../style/Header.module.css';

export default function Header() {
    return (
        <header>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo_principal" />
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre nós</Link>
                        </li>
                        <li>
                            <Link to="/fale">Fale conosco</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <button>Iniciar Sessão</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

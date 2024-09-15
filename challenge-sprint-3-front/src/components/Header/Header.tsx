import Logo from '../../../public/img/logo_ccs.png';
import { Link } from 'react-router-dom';
import styles from '../../style/Header.module.css';

export default function Header(){
    return(
        <header>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo_principal"/>
                </div>
                <div className={styles.menu}>
                    <li>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/sobre"}>Sobre nós</Link>
                        <Link to={"/fale"}>Fale conosco</Link>
                        <Link to={"/faq"}>FAQ</Link>
                        <button>Iniciar Sessão</button>
                    </li>            
                </div>
            </nav>
        </header>
    );
}
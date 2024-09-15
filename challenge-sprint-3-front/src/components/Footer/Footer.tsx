import { Link } from 'react-router-dom';
import logo_insta from '../../../public/img/logo_instagram_branco.png';
import github_logo from '../../../public/img/logo_github_branco.png';
import logo_branco from '../../../public/img/logo_ccs_branco.png';
import styles from '../../style/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerConteiner}>
                <li>
                    <Link className={styles.logoFooter} to={"/"}>
                        <img src={logo_branco} alt="Logo Branco" />
                    </Link>
                </li>
                <p className={styles.barraSeparacao}>|</p>
                <li>
                    <a href="https://github.com/1TDSPM-ChallengeIGC/challenge_front-end_v2" target="_blank">
                        <img src={github_logo} alt="GitHub Logo" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src={logo_insta} alt="Instagram Logo" />
                    </a>
                </li>
            </div>
            <p>&copy; 2024 Consert Car's. Todos os direitos reservados.</p>
        </footer>
    );
}

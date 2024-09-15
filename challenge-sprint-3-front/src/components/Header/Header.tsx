import Logo from '../../../public/img/logo_ccs.png'
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <header>
            <nav>
                <div>
                    <img src={Logo} alt="logo_principal"/>
                </div>
                <div>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/sobre"}>Sobre nós</Link></li>
                    <li><Link to={"/fale"}>Fale conosco</Link></li>
                    <li><Link to={"/faq"}>FAQ</Link></li>            
                </div>
            </nav>
        </header>
    );
}
import styles from '../../style/Fale.module.css';
import fale_conosco from '../../../public/img/fotoFaleConosco.png';
import icone_email from '../../../public/img/icone_email_azul.png';
import icone_whats from '../../../public/img/icone_whats_azul.png';


export default function Fale(){

    return(
        <div>
            <section className={styles.section1}>
                <div className={styles.headline}>
                    <h1>Fale conosco!</h1>
                    <p>Estamos sempre prontos para ouvir você! Se tiver <strong> dúvidas, sugestões ou críticas, </strong> não hesite em entrar em contato. Nossa equipe retornará o mais breve possível.</p>
                </div>
                <div className={styles.imgHeadline}>
                    <img src={fale_conosco} alt="fale_conosco"/>
                </div>
            </section>

            <section className={styles.section2}>
                <div className={styles.email}>
                    <img src={icone_email} alt="icone_email"/>
                    <div className={styles.textEmail}>
                        <h2>Email</h2>
                        <p>consertcars@gmail.com</p>
                    </div>
                </div>
                <div className={styles.whats}>
                    <img src={icone_whats} alt="icone_whats"/>
                    <div className={styles.textWhats}>
                        <h2>Telefone</h2>
                        <p>(11)9 9999 9999</p>
                    </div>
                </div>
            </section>

            <article className={styles.article}>
                <h2>Tem alguma dúvida sobre o Consert Car's?</h2>
                <p>Já deu uma olhada nas Dúvidas Frequentes? Pode ser que a sua resposta já esteja por lá!
                    Ainda quer falar com a gente? Entre em contato pelo e-mail ou contact-nos por telefone.
                </p>
            </article>
        </div>
    );
}
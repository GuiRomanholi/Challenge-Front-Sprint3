
import sobre_nos from '../../../public/img/fotoSobreNos02.png';
import cristian_foto from '../../../public/img/foto_cristan.png';
import guilherme_foto from '../../../public/img/foto_guilherme.png';
import igor_foto from '../../../public/img/foto_igor.png';
import styles from '../../style/Sobre.module.css';



export default function Sobre(){

    return(
        <div>
            <section className={styles.headline}>
                <img src={sobre_nos} alt="sobre_nos"/>
            </section>
            <article className={styles.article}>
                <div>
                    <h1>Sobre nós</h1>
                    <p>Somos estudantes da sala 1TDSPM da FIAP e estamos desenvolvendo um projeto inovador que utiliza tecnologia de ponta para simplificar e aprimorar a maneira como os usuários lidam com problemas em seus veículos e solicitam serviços de guincho, oferecendo conveniência, rapidez e transparência, ou seja,  uma experiência completa e satisfatória para pessoas com problemas em seus veículos e resolvem utilizar nossa aplicação. </p>
                </div>
            </article>
            <section className={styles.section2}>
                <h2>Nosso Time</h2>
                <div className={styles.time}>
                    <div className={styles.card}>
                        <img src={cristian_foto} alt="cristian_foto"/>
                        <h3>Cristian Caja</h3>
                        <p>RM: 558502</p>
                        <p><a href="https://github.com/cristianrcaja" target="_blank" >GitHub</a></p>
                    </div>
                    <div className={styles.card}>
                        <img src={guilherme_foto} alt="guilherme_foto"/>
                        <h3>Guilherme Romanholi</h3>
                        <p>RM: 557462</p>
                        <p><a href="https://github.com/GuiRomanholi" target="_blank">GitHub</a></p>
                    </div>
                    <div className={styles.card}>
                        <img src={igor_foto} alt="igor_foto"/>
                        <h3>Igor Werneck</h3>
                        <p>RM: 558395</p>
                        <p><a href="https://github.com/IgorWJ" target="_blank" >GitHub</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
import foto_faq from '../../../public/img/fotoFaq03.png';
import styles from '../../style/Faq.module.css';

export default function Faq(){

    return(
        <div>
            <section className={styles.section}>
                <img src={foto_faq} alt="foto_faq03"/>
            </section>
            <article className={styles.article}>
                <h1>O que é este site?</h1>
                <p>É um site criado para guinchos serem chamado mais rápido via chatbot e ao mesmo tempo fazer um formulário do problema do carro e enviá-lo ao mecânico.</p>
                <hr/>
                <h1>Quem está por trás do site?</h1>
                <p>Essa resposta pode ser vista nos links rápidos e entrando em quem somos, venha descobrir um pouco sobre a gente.</p>
                <hr/>
                <h1>Como posso entrar em contato com vocês?</h1>
                <p>Para entrar em contato com a gente é necessário ir para os Links rápidos e clicar em Contatos, lá terá mais informações.</p>
                <hr/>
                <h1>Quais os benefícios de usar esse site?</h1>
                <p>Neste site você pode economizar tempo e estresse para chamar um guincho rápido e já enviar a localização que deseja que o guincho deixe seu carro( seja em uma mecânica ou em algum outro lugar).</p>
                <hr/>
                <h1>Como faço para criar uma conta?</h1>
                <p>Nosso sistema de criação de conta infelizmente ainda não está pronto, mas logo ele ficará, e não precisará se preocupar com isso.</p>
            </article>
        </div>
    );
}
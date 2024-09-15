
import foto_home from '../../../public/img/fotohome1-ai.png'
import icon_relatorio from '../../../public/img/icone_relatorio_azul.png'
import icon_gps from '../../../public/img/icone_gps_azul.png'
import icon_oficina from '../../../public/img/icone_oficina_azul.png'



export default function Home(){

    return(
        <main>
            <section>
                <div>
                    <h1 id="h1-1">Consertos <strong>rápidos</strong>,</h1>
                    <h1 id="h1-2">com a <strong>força da IA!</strong></h1>
                    <p>Descubra a nova era dos consertos automotivos com nossa <strong>tecnologia de IA</strong>. Experimente um serviço<strong> rápido, preciso e confiável</strong>, feito sob medida para as necessidades do seu carro. Comece agora e sinta a diferença!</p>
                    <button>Começar</button>
                </div>
                <div>
                    <img src={foto_home} alt="foto_home" />
                </div>
            </section>
    
            <section>
                <h2>Tudo o que seu carro precisa <strong>na palma da sua mão!</strong> </h2>
                <div>
                    <div>
                        <img src={icon_relatorio} alt="icone_relatorio_azul" />
                        <h3>Relatórios de problemas</h3>
                        <p>Os usuários podem descrever os problemas encontrados em seus veículos através de <strong>texto, voz ou até mesmo fotos</strong>. O <strong> sistema de IA </strong> analisa as informações fornecidas e oferece sugestões ou soluções preliminares.</p>
                    </div>
                    <div>
                        <img src={icon_gps} alt="icone_gps_azul" />
                        <h3>Localização GPS</h3>
                        <p>O aplicativo utiliza a <strong> localização GPS do dispositivo móvel </strong> do usuário para identificar sua localização exata. Isso permite que o serviço, em caso de guincho, seja despachado para o local correto com rapidez e precisão.</p>
                    </div>
                    <div>
                        <img src={icon_oficina} alt="icone_oficina_azul" />

                        <h3>Parceria com oficinas</h3>
                        <p>O App interage com uma <strong> rede de oficinas mecânicas e serviços de guincho parceiros</strong>. O sistema pode sugerir oficinas próximas com base na localização do usuário e na disponibilidade de serviços necessários.</p>
                    </div>
                </div>
            </section>
            <article>
                <h2>O que é o Consert Car's?</h2>
                <p>Somos uma aplicação móvel inovador que utiliza tecnologia de ponta para simplificar e aprimorar a maneira como os usuários lidam com problemas em seus veículos. Utilizando inteligência artificial, via chatbot, ajuda os usuários a relatar problemas em seus carros e solicitar serviços de guincho de forma rápida e eficiente.</p>
            </article>
        </main>
    );
}
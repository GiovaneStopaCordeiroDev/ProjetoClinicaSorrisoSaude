import imgSobre from '../../images/imagem-sobre.png'
import '../../Estilização.css'

function Sobre() {
    return (
        <div>
            <div className="secao-sobre">
                <h1 className='h1-section'>Sobre nós</h1>

                <div className="conteudo-sobre">
                    <div className="p-sobre">
                        <p>A Clínica Sorriso & Saúde nasceu em 2018 com o sonho de dois amigos dentistas, Dra. Ana Paula e Dr. Lucas Martins, que acreditavam que o atendimento odontológico poderia ser mais acolhedor e próximo das pessoas.</p>
                        <p>O projeto começou em uma pequena sala, com poucos equipamentos, mas com uma grande missão: transformar o atendimento tradicional em uma experiência leve, segura e humana.</p>
                        <p> Com o tempo, o cuidado e a dedicação da equipe conquistaram a confiança da comunidade local — e a clínica cresceu, tornando-se referência em odontologia estética e ortodontia personalizada. Hoje, continuamos com o mesmo propósito que nos move desde o início: cuidar de sorrisos e espalhar confiança.</p>
                    </div>
                    <img src={imgSobre } alt='História Clinica & Saúde'/>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
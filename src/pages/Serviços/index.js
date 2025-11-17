import servicoClareamento from '../../images/servico-clareamento.png'
import servicoLimpeza from '../../images/servico-limpeza.png'
import servicoImplante from '../../images/servico-implante.png'
import servicoOdontopediatria from '../../images/servico-odontopediatria.png'
import '../../Estilização.css'

function Serviços() {
    return (
        <div>
            <div className="section-servicos">
                <h1 className="h1-section">Nossos Serviços</h1>

                <div className="conteudo-servicos">
                    <div className="card-servicos">
                        <img src={servicoLimpeza}/>
                        <p className='title-card-servicos'>Limpeza e prevenção</p>
                        <p className='p-card-servicos'>Sessões de profilaxia completas, remoção de placa bacteriana e aplicação de flúor para manter dentes e gengivas sempre saudáveis.</p>
                    </div>
                    <div className="card-servicos">
                        <img src={servicoClareamento}/>
                        <p className='title-card-servicos'>Clareamento dental</p>
                        <p className='p-card-servicos'>Tratamento estético seguro e eficiente, com técnicas modernas de clareamento a laser e moldeiras personalizadas.</p>
                    </div>
                    <div className="card-servicos">
                        <img src={servicoImplante}/>
                        <p className='title-card-servicos'>Implante dentário</p>
                        <p className='p-card-servicos'>Restaure a função e a estética do seu sorriso. Implantes de titânio com tecnologia de ponta, garantindo conforto, segurança e aparência natural.</p>
                    </div>
                    <div className="card-servicos">
                        <img src={servicoOdontopediatria}/>
                        <p className='title-card-servicos'>odontopediatria</p>
                        <p className='p-card-servicos'>Cuidar dos pequenos desde cedo é o primeiro passo para um sorriso saudável. Atendimento com foco na prevenção e na adaptação da criança ao dentista.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Serviços;
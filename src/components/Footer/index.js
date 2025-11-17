import {Link} from 'react-router-dom'
import Instagram from '../../images/insta-icon.png'
import Facebook from '../../images/face-logo.png'
import LoginADM from '../../ADMIN/LoginADM'
import '../../Estilização.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="achar-admin">
                    <Link to={'/loginADM150325'}>Painel admin</Link>
                </div>
                <div className='conteudo-footer'>
                    <p>2025 Clínica Sorriso e Saúde. Todos os direitos reservados.</p>
                    <p>Contato: (14) 99999-9999</p>
                    <p>Rua das Flores, 123 - Centro - São Paulo/SP</p>
                    <p>Desenvolvido por <a href='#' className='giovane'>Giovane Stopa Cordeiro</a></p>
                </div>
                <div className='redes-footer'>
                    <p>rede sociais</p>
                    <div className='redes-sociais'>
                        <a href='#'><img src={Instagram}/></a>
                        <a href='#'><img src={Facebook}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import logoHeader from '../../images/logo-empresa.png'
import '../../Estilização.css'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="nav">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Agendamento</a>
                </div>
                <img src={logoHeader} alt='Clinica Sorriso & Saúde Dentista' className='img-header'/>
            </div>
        </div>
    )
}

export default Header;
import '../../Estilização.css'
import {Link} from 'react-router-dom'

function LoginADM() {
    return (
        <div>
            <div>   
                <div className="agendamento-form-ADMIN">
                    <form>
                        <h1>Clínica Sorriso & Saúde</h1>
                        <h1>Login Painel de ADMIN</h1>
                        <div className="input-form-ADMIN">
                            <label>Email:</label>
                            <input type="text" placeholder="Digite seu email"/>
                        </div>

                        <div className="input-form-ADMIN">
                            <label>Senha:</label>
                            <input type="text" placeholder="Digite sua senha"/>
                        </div>

                       <Link to={'/painelADMINClinicaSorriso&Saude'} className="button-agendar-ADMIN">Acessar Painel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginADM;
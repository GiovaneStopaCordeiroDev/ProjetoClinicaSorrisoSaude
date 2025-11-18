import '../../Estilização.css'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebaseConnection'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginADM() {

    const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

    async function logarUsuario() {
        try {
        await signInWithEmailAndPassword(auth, email, senha)
        setEmail("")
        setSenha("")
        navigate('/painelADMINClinicaSorriso&Saude');
        } catch (error) {
        alert(error.message)
      }

    }
    return (
        <div>
            <div>   
                <div className="agendamento-form-ADMIN">
                    <form>
                        <h1>Clínica Sorriso & Saúde</h1>
                        <h1>Login Painel de ADMIN</h1>
                        <div className="input-form-ADMIN">
                            <label>Email:</label>
                            <input type="text" placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-form-ADMIN">
                            <label>Senha:</label>
                            <input type="password" placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                    <button type='button' className='button-agendar-ADMIN' onClick={logarUsuario}>Acessar Painel</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginADM;
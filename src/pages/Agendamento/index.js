import { db } from '../../firebaseConnection';
import { collection, addDoc} from 'firebase/firestore';
import { useState } from 'react';

function Agendamento() {
    const [NomeCliente, setNomeCliente] = useState('')
    const [EmailCliente, setEmailCliente] = useState('')
    const [NumeroCliente, setNumeroCliente] = useState('')

    async function agendarCliente(e) {
        e.preventDefault();

         if(!NomeCliente | !EmailCliente | !NumeroCliente){
            alert("Digite em todos os locais")
            return;
        }

        await addDoc(collection(db, "Clientes"), {
            nomecliente: NomeCliente,
            emailcliente: EmailCliente,
            numerocliente: NumeroCliente
        })
        .then(() => {
            setNomeCliente("");
            setEmailCliente("");
            setNumeroCliente("");
        })
        .catch((erro) => {
            alert("Erro" + erro)
        })
    }

    return (
        <div>
            <div className="section-agendamento">
                <h1 className="h1-section">Agendar</h1>
                <h2>Agende aqui sua visita</h2>

                <div className="agendamento-form">
                    <form onSubmit={agendarCliente}>
                        <h1>Formulário de agendamento</h1>
                        <div className="input-form">
                            <label>Nome:</label>
                            <input type="text" placeholder="Digite seu nome"
                            value={NomeCliente}
                            onChange={(e) => setNomeCliente(e.target.value)}
                            />
                        </div>

                        <div className="input-form">
                            <label>Email:</label>
                            <input type="text" placeholder="Digite seu email"
                            value={EmailCliente}
                            onChange={(e) => setEmailCliente(e.target.value)}
                            />
                        </div>

                        <div className="input-form">
                            <label>Telefone:</label>
                            <input type="text" placeholder="14 99999-9999"
                            value={NumeroCliente}
                            onChange={(e) => setNumeroCliente(e.target.value)}
                            />
                        </div>

                        <button className="button-agendar" type='submit'>Agendar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Agendamento;
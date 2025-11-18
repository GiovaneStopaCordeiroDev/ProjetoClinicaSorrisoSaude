import { Link } from "react-router-dom";
import { db } from '../../firebaseConnection';
import {doc, collection, getDocs, deleteDoc} from 'firebase/firestore';
import { useState, useEffect } from 'react';

function PainelAdmin() {
    const [listaClientes, setlistaClientes] = useState([])
    

    async function BuscarClientes() {
        const bancoClientes = collection(db, 'Clientes')
        await getDocs(bancoClientes)
        .then((snapshot) => {
            let lista = []
            console.log(lista);
            snapshot.forEach((docItem) => {
                lista.push({
                    id: docItem.id,
                    nome: docItem.data().nomecliente,
                    email: docItem.data().emailcliente,
                    numero: docItem.data().numerocliente
                })
            })

            setlistaClientes(lista)
        })

        .catch((e) => {
            alert("erro" + e)
        })
    }

    useEffect(() => {
        BuscarClientes();
    }, []);

    async function excluirCliente(id) {
        const clienteRef = doc(db, 'Clientes', id)
        await deleteDoc(clienteRef)
        
          
        .then(() => {
        setlistaClientes((prev) => prev.filter((cliente) => cliente.id !== id));
        })

        .catch((e) => {
        alert("erro" + e)
        })
    }

    function enviarMensagem(numerowhats) {
        const mensagem = encodeURIComponent("Olá! Somos da clínica Sorriso & Saúde, você agendou uma consulta conosco, no que posso ajudar?");
        window.open(`https://wa.me/${numerowhats}?text=${mensagem}`, '_blank')
    }

    return (
        <div>
            <div className="painel">
                <div className="header header-painel">
                    <h1>Painel ADMIN Clínica Sorriso & Saúde</h1>
                   <Link to={'/'} className="painel-irsite">Ir para o site</Link>
                </div>
                   <div className="area-clientes">
                    <h1>Clientes</h1> 
                    <ul>
                        {listaClientes.map((cliente) => {
                            return (
                                <li key={cliente.nome} className="cliente-dados">
                                    <div className="nome-email-cliente">
                                        <span>{cliente.nome}</span>
                                        <span>{cliente.email}</span>
                                    </div>
                                    <button onClick={() => enviarMensagem(cliente.numero)} className="btn-enviarmsg">Enviar Mensagem</button>
                                    <button onClick={() => excluirCliente(cliente.id)} className="btn-excluirmsg">Excluir</button>
                                </li>
                                
                            )

                        })}
                        
                    </ul>
                   </div>
            </div>
        </div>
    )
}

export default PainelAdmin;
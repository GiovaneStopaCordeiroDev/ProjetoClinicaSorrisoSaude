import { Link } from "react-router-dom";
import { db } from '../../firebaseConnection';
import {doc, setDoc, collection, addDoc, getDoc, getDocs} from 'firebase/firestore';
import { useState, useEffect } from 'react';

function PainelAdmin() {
    const [listaClientes, setlistaClientes] = useState([])

    async function BuscarClientes() {
        const bancoClientes = collection(db, 'Clientes')
        await getDocs(bancoClientes)
        .then((snapshot) => {
            let lista = []
            console.log(lista);
            snapshot.forEach((doc) => {
                lista.push({
                    nome: doc.data().nomecliente,
                    email: doc.data().emailcliente,
                    numero: doc.data().numerocliente
                })
            })

            setlistaClientes(lista)
        })

        .catch((e) => {
            alert("erro" + e)
        })
    }

    function enviarMensagem(numerowhats) {
        const mensagem = encodeURIComponent("Olá! Somos da clínica Sorriso & Saúde, você agendou uma consulta conosco");
        window.open(`https://wa.me/${numerowhats}?text=${mensagem}`, '_blank')
    }

    return (
        <div>
            <div className="painel">
                <div className="header">
                    <p>Settings</p>
                    <h1>Painel ADMIN Clínica Sorriso & Saúde</h1>
                   <Link to={'/'}>Ir para o site</Link>
                </div>
                   <div className="area-clientes">
                    <h1>Clientes</h1>
                    <button onClick={BuscarClientes}>Buscar Clientes</button>
                    <ul>
                        {listaClientes.map((cliente) => {
                            return (
                                <li key={cliente.nome} className="cliente-dados">
                                    <div className="nome-email-cliente">
                                        <span>{cliente.nome}</span>
                                        <span>{cliente.email}</span>
                                    </div>
                                    <button onClick={() => enviarMensagem(cliente.numero)}>Enviar Mensagem</button>
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
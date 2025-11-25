import { db } from '../../firebaseConnection';
import { 
    doc, 
    getDoc, 
    getDocs, 
    collection, 
    setDoc 
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Agendamento() {
    const [NomeCliente, setNomeCliente] = useState('');
    const [EmailCliente, setEmailCliente] = useState('');
    const [NumeroCliente, setNumeroCliente] = useState('');
    const [DataConsulta, setDataConsulta] = useState('');
    const [HorarioOcupados, setHorarioOcupados] = useState([]);
    const [HorarioSelecionado, setHorarioSelecionado] = useState('');

    // -------------------------
    // LISTA DE HORÁRIOS
    // -------------------------
    function gerarHorarios() {
        return [
            "08:00", "08:30",
            "09:00", "09:30",
            "10:00", "10:30",
            "11:00", "11:30",
            "14:00", "14:30",
            "15:00", "15:30"
        ];
    }
    const horarios = gerarHorarios();

    // -------------------------
    // BUSCAR HORÁRIOS OCUPADOS
    // -------------------------
    async function buscarHorariosOcupados(data) {
        const ref = collection(db, "Agendamentos", data, "Horarios");
        const snap = await getDocs(ref);

        const ocupados = [];
        snap.forEach((docItem) => {
            ocupados.push(docItem.id); // ID do doc = horário
        });

        return ocupados;
    }

    // -------------------------
    // AO MUDAR A DATA → BUSCA HORÁRIOS OCUPADOS
    // -------------------------
    useEffect(() => {
        if (!DataConsulta) return;

        buscarHorariosOcupados(DataConsulta).then((res) => {
            setHorarioOcupados(res);
        });

    }, [DataConsulta]);


    // -------------------------
    // AGENDAR CLIENTE
    // -------------------------
    async function agendarCliente(e) {
        e.preventDefault();

        if (!NomeCliente || !EmailCliente || !NumeroCliente || !DataConsulta || !HorarioSelecionado) {
            alert("Preencha todos os campos e escolha o horário!");
            return;
        }

        const ref = doc(db, "Agendamentos", DataConsulta, "Horarios", HorarioSelecionado);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            alert("Esse horário já está ocupado! Escolha outro.");
            return;
        }

        await setDoc(ref, {
            nome: NomeCliente,
            email: EmailCliente,
            telefone: NumeroCliente,
            data: DataConsulta,
            horario: HorarioSelecionado,
            criadoEm: new Date()
        });

        alert("Agendamento realizado com sucesso!");

        // Limpar
        setNomeCliente("");
        setEmailCliente("");
        setNumeroCliente("");
        setDataConsulta("");
        setHorarioSelecionado("");
    }



    return (
        <div>
            <div className="section-agendamento">
                <h1 className="h1-section">Agendar</h1>
                <h2>Agende aqui sua visita</h2>

                <div className="agendamento-form">
                    <form onSubmit={agendarCliente}>
                        <h1>Formulário de agendamento</h1>

                        {/* Nome */}
                        <div className="input-form">
                            <label>Nome:</label>
                            <input type="text" placeholder="Digite seu nome"
                                value={NomeCliente}
                                onChange={(e) => setNomeCliente(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="input-form">
                            <label>Email:</label>
                            <input type="text" placeholder="Digite seu email"
                                value={EmailCliente}
                                onChange={(e) => setEmailCliente(e.target.value)}
                            />
                        </div>

                        {/* Telefone */}
                        <div className="input-form">
                            <label>Telefone:</label>
                            <input type="text" placeholder="14 99999-9999"
                                value={NumeroCliente}
                                onChange={(e) => setNumeroCliente(e.target.value)}
                            />
                        </div>

                        {/* Data */}
                        <div className="input-form">
                            <label>Data:</label>
                            <input type='date'
                                value={DataConsulta}
                                onChange={(e) => setDataConsulta(e.target.value)}
                            />
                        </div>

                        {/* Horários */}
                        <div className="input-form">
                            <label>Horário:</label>

                            <div className="grid-horarios">
                                {horarios.map((h) => (
                                    <button
                                        key={h}
                                        type="button"
                                        disabled={HorarioOcupados.includes(h)}
                                        onClick={() => setHorarioSelecionado(h)}
                                        className={
                                            HorarioOcupados.includes(h)
                                                ? "btn-hora ocupada"
                                                : h === HorarioSelecionado
                                                    ? "btn-hora selecionada"
                                                    : "btn-hora"
                                        }
                                    >
                                        {h}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Botão */}
                        <button className="button-agendar" type='submit'>Agendar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Agendamento;

    import Sobre from '../Sobre'
    import Serviços from '../Serviços';
    import Agendamento from '../Agendamento';
    import bgHome from "../../images/background-home.png";
    import Header from '../../components/Header'
    import Hero from '../../pages/Hero'
    import Footer from '../../components/Footer';
    import '../../Estilização.css'


    function Home() {
        return (
            <div>
                <Hero/>
                <Sobre/>
                <Serviços/>
                <Agendamento/>
                <Footer/>
            </div>
        )
    }

    export default Home;
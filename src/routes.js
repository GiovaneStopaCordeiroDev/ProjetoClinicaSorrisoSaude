import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import LoginADM from "./ADMIN/LoginADM";
import PainelAdmin from './ADMIN/PainelADM'

function RoutesApp () {
    return (
        <BrowserRouter>
                <Routes> 
                    <Route path="/painelADMINClinicaSorriso&Saude" element = {<PainelAdmin/>}/>
                    <Route path="loginADM150325" element= {<LoginADM/>}/>
                    <Route path="/" element= {<Home/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
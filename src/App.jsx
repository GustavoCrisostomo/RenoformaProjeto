import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Cadastro from "./page/Cadastro";
import CadastroAdmin from "./page/CadastroAdmin";
import LoginAdmin from "./page/LoginAdmin";
import Login from "./page/Login";
import EsqueceuSenha from "./page/EsqueceuSenha";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/cadastro" element={<Cadastro />} />

                <Route
                    path="/adminlogin" element={<LoginAdmin />} />

                <Route
                    path="/admincadastro"element={<CadastroAdmin />}/>

                <Route
                    path="/EsqueceuSenha"element={<EsqueceuSenha />}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
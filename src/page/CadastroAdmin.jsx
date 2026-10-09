import { useState } from "react"
import Header from "../components/layout/Header"
import '../styles/cadastroAdmin.css'
 
 
function CadastroAdmin() {
 
  const [mostrarSenha, setMostrarSenha] = useState(false);
 
  const handleSubmit = (e) => {
 
    e.preventDefault();
 
  };
 
  return (
 
    <>
        <Header/>
 
    <div className="cadastro-page">
      <svg
 
        className="cadastro-wave"
 
        viewBox="0 0 768 499"
 
        preserveAspectRatio="none"
 
        aria-hidden="true"
      >
        <defs>
          <linearGradient
 
            id="cadastroGradient"
 
            x1="0"
 
            y1="0"
 
            x2="1"
 
            y2="1"
          >
            <stop offset="0%" stopColor="#7cb823" />
            <stop offset="100%" stopColor="#5f9a14" />
          </linearGradient>
        </defs>
 
        <path
 
          d="M230 0 H768 V360 C730 420 660 470 590 499 H0 V315 C80 270 170 200 210 110 C220 80 228 40 230 0 Z"
 
          fill="url(#cadastroGradient)"
 
        />
      </svg>
 
      <main className="cadastro-main">
        <h1 className="cadastro-title">
 
          Cadastro de Administrador
        </h1>
 
        <p className="cadastro-subtitle">
 
          Cadastre um novo administrador para gerenciar
 
          o sistema com segurança e praticidade.
        </p>
 
        <form
 
          className="cadastro-card"
 
          onSubmit={handleSubmit}
        >
          <div className="cadastro-field cadastro-field--full">
            <label className="cadastro-label" htmlFor="nome">
 
              Nome completo
            </label>
            <input
 
              className="cadastro-input"
 
              type="text"
 
              id="nome"
 
              autoComplete="name"
 
              placeholder="Como aparece nos documentos"
 
              required
 
            />
          </div>
 
          <div className="cadastro-field">
            <label className="cadastro-label" htmlFor="usuario">
 
              Usuário
            </label>
            <input
 
              className="cadastro-input"
 
              type="text"
 
              id="usuario"
 
              autoComplete="username"
 
              placeholder="ex.: maria.silva"
 
              required
 
            />
          </div>
 
          <div className="cadastro-field">
            <label className="cadastro-label" htmlFor="email">
 
              E-mail
            </label>
            <input
 
              className="cadastro-input"
 
              type="email"
 
              id="email"
 
              autoComplete="email"
 
              placeholder="voce@empresa.com"
 
              required
 
            />
          </div>
 
          <div className="cadastro-field cadastro-field--full">
            <label className="cadastro-label" htmlFor="telefone">
 
              Telefone
            </label>
            <input
 
              className="cadastro-input"
 
              type="tel"
 
              id="telefone"
 
              autoComplete="tel"
 
              placeholder="(11) 90000-0000"
 
            />
          </div>
 
          <div className="cadastro-field">
            <label className="cadastro-label" htmlFor="senha">
 
              Senha
            </label>
            <input
 
              className="cadastro-input"
 
              type={mostrarSenha ? "text" : "password"}
 
              id="senha"
 
              autoComplete="new-password"
 
              placeholder="Mínimo de 8 caracteres"
 
              minLength={8}
 
              required
 
            />
          </div>
 
          <div className="cadastro-field">
            <label className="cadastro-label" htmlFor="confirmar">
 
              Confirmar senha
            </label>
            <input
 
              className="cadastro-input"
 
              type={mostrarSenha ? "text" : "password"}
 
              id="confirmar"
 
              autoComplete="new-password"
 
              placeholder="Repita a senha"
 
              minLength={8}
 
              required
 
            />
          </div>
 
          <label className="cadastro-show cadastro-field--full">
            <input
 
              type="checkbox"
 
              checked={mostrarSenha}
 
              onChange={(e) => setMostrarSenha(e.target.checked)}
 
            />
 
            Mostrar senhas
          </label>
 
          <button className="cadastro-btn" type="submit">
 
            Cadastrar administrador
          </button>
 
          <p className="cadastro-login cadastro-field--full">
 
            Já tem conta? <a href="/login">Entrar</a>
          </p>
        </form>
      </main>
    </div>
    </>
  );
 
}
 
 
export default CadastroAdmin;
 
 
 
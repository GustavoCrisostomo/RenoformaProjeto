import '../styles/loginAdmin.css'
import CadeiraAdmin from '../assets/img/CadeiraAdm.png'
import logo from '../assets/img/logo-segundario.svg'
 
 
  function LoginAdmin() {
 
  return (
    <div className="login-page">
      <svg
        className="login-wave"
        viewBox="0 0 1067 693"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7cb823" />
            <stop offset="100%" stopColor="#5f9a14" />
          </linearGradient>
        </defs>
        <path
          d="M390 0 H905 C1020 120 1070 250 1057 380 C1045 520 990 620 930 693 H370 C440 600 520 480 505 340 C490 200 420 100 390 0 Z"
          fill="url(#waveGradient)"
        />
      </svg>
 
      <img className="login-logo" src={logo} alt="Logo Renoforma"/>
 
      <section className="login-welcome">
        <h1>Olá, Admin!</h1>
        <p>
          Faça login para acessar seu painel e gerenciar sua página de forma
          simples e segura.
        </p>
 
        <img
          className="login-chair"
          src={CadeiraAdmin}
          alt="Cadeira de escritório"
        />
      </section>
 
      <form className="login-card">
        <h2 className="login-title">Entrar na sua conta</h2>
 
        <label className="field-label" htmlFor="usuario">E-mail ou Usuário</label>
        <input
          type="text"
          id="usuario"
          className="field-input"
          placeholder="voce@empresa.com"
          autoComplete="username"
        />
 
        <label className="field-label" htmlFor="senha">Senha</label>
        <div className="field-password">
          <input
            type='password'
            id="senha"
            className="field-input"
            placeholder="Digite sua senha"
          />
          <button
            type="button"
            className="field-toggle"
          >
 
          </button>
        </div>
 
        <div className="login-options">
          <label className="login-remember">
            <input
              type="checkbox"
            />
            Lembrar de mim
          </label>
          <a className="login-forgot" href="#">Esqueceu a senha?</a>
        </div>
 
        <button className="btn-enter" type="submit"> Entrar
        </button>
 
        <p className="login-or"><span>ou continue com</span></p>
 
        <div className="login-social">
          <button className="btn-social" type="button" aria-label="Entrar com Google">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-8z" />
              <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1-3.8 1-2.9 0-5.4-2-6.3-4.6H2.1v2.8A11 11 0 0 0 12 23z" />
              <path fill="#FBBC05" d="M5.700 14c-.2-.7-.4-1.300-.4-2s.1-1.400.4-2V7.200H2.100a11 11 0 0 0 0 9.600L5.700 14z" />
              <path fill="#EA4335" d="M12 5.400c1.600 0 3.100.6 4.200 1.700l3.100-3.100A11 11 0 0 0 2.100 7.200L5.700 10c.9-2.600 3.400-4.600 6.300-4.600z" />
            </svg>
          </button>
          <button className="btn-social" type="button" aria-label="Entrar com Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.900 11.900v-8.400H7.100V12h3V9.400c0-3 1.800-4.700 4.500-4.700 1.300 0 2.700.2 2.700.2v3h-1.500c-1.500 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.900v8.400A12 12 0 0 0 24 12z" />
            </svg>
          </button>
        </div>
 
        <p className="login-no-account">Ainda não tem conta?</p>
        <a className="btn-signup" href="#">Cadastre-se</a>
      </form>
    </div>
  )
}
 
export default  LoginAdmin;
 
 
import '../styles/esqueceuSenha.css'
import Header from "../components/layout/Header"

 
function EsqueceuSenha() {
 
    return (
 
        <>
            <Header />
 
            <div className="recuperar-page">
                <svg className="recuperar-wave" viewBox="0 0 768 499" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="recuperarGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#7cb823" />
                            <stop offset="100%" stopColor="#5f9a14" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M230 0 H768 V360 C730 420 660 470 590 499 H0 V315 C80 270 170 200 210 110 C220 80 228 40 230 0 Z"
                        fill="url(#recuperarGradient)"
                    />
                </svg>
 
                <main className="recuperar-main">
                    <h1 className="recuperar-title">Recuperar senha</h1>
                    <p className="recuperar-subtitle">
                        Informe o e-mail da sua conta e enviaremos um link para você criar
                        uma nova senha. </p>
 
                    <form className="recuperar-card">
                        <label className="recuperar-label" htmlFor="email">E-mail</label>
                        <input
                            className="recuperar-input"
                            type="email"
                            id="email"
                            autoComplete="email"
                            placeholder="voce@empresa.com"
                        />
 
 
                        <button className="recuperar-btn" type="submit">
                            Recuperar
                        </button>
 
                        <a className="recuperar-back" href="#">← Voltar para o login</a>
                    </form>
 
                    {/* <div className="recuperar-card recuperar-card--ok" role="status">
            <div className="recuperar-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
 
            <h2 className="recuperar-ok-title">Confira seu e-mail</h2>
            <p className="recuperar-ok-text">
              Se existir uma conta para este email, você receberá
              em instantes um link para redefinir a senha. Não esqueça de olhar
              a caixa de spam.
            </p>
 
            <button
              className="recuperar-btn recuperar-btn--outline"
              type="button"
            >
            </button>
 
            <button
              className="recuperar-link"
              type="button"
            >
              Usar outro e-mail
            </button>
 
            <a className="recuperar-back" href="#">← Voltar para o login</a>
          </div> */}
                </main>
            </div>
        </>
    )
}
 
export default EsqueceuSenha;
 
 
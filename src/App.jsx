import './App.css'

function App() {
 
  return (
    <div className="landing">
    <header className="header">
      <h1 className="logo">🌤️ Nuvem Zen</h1>
    </header>

    <section className="hero">
      <h2>Meditação e Foco para Profissionais de Tecnologia</h2>
      <p>Receba uma meditação guiada + planner digital gratuitos e aumente sua produtividade com mais leveza.</p>
      
      <form className="lead-form">
        <input type="email" placeholder="Seu melhor e-mail" required />
        <button type="submit">Quero receber</button>
      </form>
    </section>

    <section className="benefits">
      <h3>Por que usar a Nuvem Zen?</h3>
      <ul>
        <li>🌱 Reduza o estresse no trabalho</li>
        <li>🧘‍♂️ Concentre-se com mais facilidade</li>
        <li>🕓 Tenha mais controle do seu tempo</li>
      </ul>
    </section>

    <section className="bonus">
      <h3>Ganhe agora mesmo:</h3>
      <p>🎧 Meditação guiada exclusiva</p>
      <p>📒 Planner digital para foco e organização</p>
    </section>

    <footer className="footer">
      <p>© 2025 Nuvem Zen - Bem-estar para mentes brilhantes</p>
    </footer>
  </div>
  )
}

export default App

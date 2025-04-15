// src/pages/Contato.jsx
function Contato() {
    return (
      <section className="page contato">
        <h2>Entre em Contato</h2>
        <p>
          Quer saber mais sobre a NuvemZen, tirar dúvidas ou sugerir uma ideia? Estamos aqui para ajudar! Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
        </p>
        <form className="form-contato">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem..." required></textarea>
          <button className="btn" type="submit">Enviar Mensagem</button>
        </form>
        <div className="contato-info">
          <h3>Informações Adicionais</h3>
          <p>Email: contato@nuvemzen.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </div>
      </section>
    )
  }
  
  export default Contato
  
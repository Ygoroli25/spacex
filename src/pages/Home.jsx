import { useState } from 'react';
import './Home.css'; // Importe o arquivo CSS

const Home = () => {
  const [tipoLocalizacao, setTipoLocalizacao] = useState('texto');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDestinoChange = (e) => {
    const destino = e.target.value;
    setTipoLocalizacao(destino === 'marte' ? 'numerico' : 'texto');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <img src="caminho-para-a-logo-da-empresa" alt="Logo da Empresa" />
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#cadastro">Cadastro de Entrega</a></li>
            <li><a href="#edicao">Edição de Endereço</a></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
        </nav>
      </header>

      <section id="cadastro">
        <h2>Cadastro de Entrega</h2>
        <form>
          <label htmlFor="destino">Destino:</label>
          <select id="destino" name="destino" onChange={handleDestinoChange}>
            <option value="terra">Terra</option>
            <option value="marte">Marte</option>
          </select>

          <label htmlFor="nome">Nome do Destinatário:</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="produto">Produto:</label>
          <input type="text" id="produto" name="produto" />

          <label htmlFor="dataEnvio">Data de Envio:</label>
          <input type="date" id="dataEnvio" name="dataEnvio" />

          <label htmlFor="endereco">Endereço de Destino:</label>
          {tipoLocalizacao === 'texto' ? (
            <input type="text" id="endereco" name="endereco" />
          ) : (
            <input type="number" id="endereco" name="endereco" min="1000" max="9999" />
          )}

          <label htmlFor="observacoes">Observações:</label>
          <textarea id="observacoes" name="observacoes" rows="5" maxLength="500"></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Home;



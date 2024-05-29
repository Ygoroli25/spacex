import { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [destino, setDestino] = useState('terra');
  const [nome, setNome] = useState('');
  const [produto, setProduto] = useState('');
  const [dataEnvio, setDataEnvio] = useState('');
  const [endereco, setEndereco] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Para evitar múltiplos submits
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevenir múltiplos submits

    setIsSubmitting(true);

    try {
      const novaEntrega = {
        destino,
        nome,
        produto,
        dataEnvio,
        endereco,
        observacoes
      };

      const entregasExistentes = JSON.parse(localStorage.getItem('entregas')) || [];
      entregasExistentes.push(novaEntrega);
      localStorage.setItem('entregas', JSON.stringify(entregasExistentes));

      alert('Entrega cadastrada com sucesso!');

      setDestino('terra');
      setNome('');
      setProduto('');
      setDataEnvio('');
      setEndereco('');
      setObservacoes('');
    } catch (error) {
      console.error('Erro ao salvar entrega:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDestinoChange = (e) => {
    setDestino(e.target.value);
    setEndereco('');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className='header conteiner'>
        <img src="https://jgd625.github.io/SpaceXAPI/images/Xlogo.png" alt="Logo da Empresa" />
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className='nav-link'>
            <li><Link to="/">Cadastro</Link></li>
            <li><Link to="/edicao">Entregas</Link></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
        </nav>
        </div>
      </header>

      <section id="cadastro">
        <h2>Cadastro de Entrega</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="destino">Destino:</label>
          <select id="destino" name="destino" value={destino} onChange={handleDestinoChange}>
            <option value="terra">Terra</option>
            <option value="marte">Marte</option>
          </select>

          <label htmlFor="nome">Nome do Destinatário:</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />

          <label htmlFor="produto">Produto:</label>
          <input 
            type="text" 
            id="produto" 
            name="produto" 
            value={produto} 
            onChange={(e) => setProduto(e.target.value)} 
            required 
          />

          <label htmlFor="dataEnvio">Data de Envio:</label>
          <input 
            type="date" 
            id="dataEnvio" 
            name="dataEnvio" 
            value={dataEnvio} 
            onChange={(e) => setDataEnvio(e.target.value)} 
            required 
          />

          <label htmlFor="endereco">Endereço de Destino:</label>
          {destino === 'terra' ? (
            <input 
              type="text" 
              id="endereco" 
              name="endereco" 
              value={endereco} 
              onChange={(e) => setEndereco(e.target.value)} 
              required 
            />
          ) : (
            <input 
              type="number" 
              id="endereco" 
              name="endereco" 
              value={endereco} 
              onChange={(e) => setEndereco(e.target.value)} 
              min="1000" 
              max="9999" 
              required 
            />
          )}

          <label htmlFor="observacoes">Observações:</label>
          <textarea 
            id="observacoes" 
            name="observacoes" 
            rows="5" 
            maxLength="500" 
            value={observacoes} 
            onChange={(e) => setObservacoes(e.target.value)}
          ></textarea>

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </section>
    </div>
  );
};

export default Home;

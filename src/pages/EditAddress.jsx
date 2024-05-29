import { useState } from 'react';
import { Link } from 'react-router-dom';


const EditAddress = () => {
  const [nome, setNome] = useState('');
  const [dados, setDados] = useState(null);
  const [tipoLocalizacao, setTipoLocalizacao] = useState('texto');
  const [isSubmitting, setIsSubmitting] = useState(false); // Para evitar múltiplos submits
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    const entregasExistentes = JSON.parse(localStorage.getItem('entregas')) || [];
    const entregaEncontrada = entregasExistentes.find(entrega => entrega.nome === nome);
    if (entregaEncontrada) {
      setDados(entregaEncontrada);
      setTipoLocalizacao(entregaEncontrada.destino === 'marte' ? 'numerico' : 'texto');
    } else {
      alert('Entrega não encontrada!');
    }
  };

  const handleDestinoChange = (e) => {
    const destino = e.target.value;
    setTipoLocalizacao(destino === 'marte' ? 'numerico' : 'texto');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevenir múltiplos submits

    setIsSubmitting(true);

    try {
      const entregasExistentes = JSON.parse(localStorage.getItem('entregas')) || [];
      const novaListaEntregas = entregasExistentes.map(entrega => 
        entrega.nome === dados.nome ? dados : entrega
      );
      localStorage.setItem('entregas', JSON.stringify(novaListaEntregas));
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar entrega:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    if (!window.confirm('Tem certeza que deseja excluir esta entrega?')) return;

    try {
      const entregasExistentes = JSON.parse(localStorage.getItem('entregas')) || [];
      const novaListaEntregas = entregasExistentes.filter(entrega => entrega.nome !== dados.nome);
      localStorage.setItem('entregas', JSON.stringify(novaListaEntregas));
      alert('Entrega excluída com sucesso!');
      setNome('');
      setDados(null);
    } catch (error) {
      console.error('Erro ao excluir entrega:', error);
    }
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
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
        </nav>
        </div>
      </header>

      <section id="edicao">
        <h2>Edição de Endereço</h2>
        <div>
          <label htmlFor="searchNome">Nome do Destinatário:</label>
          <input 
            type="text" 
            id="searchNome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        
        {dados && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="destino">Destino:</label>
            <select id="destino" name="destino" value={dados.destino} onChange={(e) => {
              setDados({ ...dados, destino: e.target.value });
              handleDestinoChange(e);
            }}>
              <option value="terra">Terra</option>
              <option value="marte">Marte</option>
            </select>

            <label htmlFor="nome">Nome do Destinatário:</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              value={dados.nome} 
              onChange={(e) => setDados({ ...dados, nome: e.target.value })} 
              required 
            />

            <label htmlFor="produto">Produto:</label>
            <input 
              type="text" 
              id="produto" 
              name="produto" 
              value={dados.produto} 
              onChange={(e) => setDados({ ...dados, produto: e.target.value })} 
              required 
            />

            <label htmlFor="dataEnvio">Data de Envio:</label>
            <input 
              type="date" 
              id="dataEnvio" 
              name="dataEnvio" 
              value={dados.dataEnvio} 
              onChange={(e) => setDados({ ...dados, dataEnvio: e.target.value })} 
              required 
            />

            <label htmlFor="endereco">Endereço de Destino:</label>
            {tipoLocalizacao === 'texto' ? (
              <input 
                type="text" 
                id="endereco" 
                name="endereco" 
                value={dados.endereco} 
                onChange={(e) => setDados({ ...dados, endereco: e.target.value })} 
                required 
              />
            ) : (
              <input 
                type="number" 
                id="endereco" 
                name="endereco" 
                value={dados.endereco} 
                onChange={(e) => setDados({ ...dados, endereco: e.target.value })} 
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
              value={dados.observacoes} 
              onChange={(e) => setDados({ ...dados, observacoes: e.target.value })}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>Atualizar</button>
            <button type="button" onClick={handleDelete}>Excluir</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default EditAddress;

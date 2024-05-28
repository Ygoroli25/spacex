
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  );
};

export default App;

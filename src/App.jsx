
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditAddress from './pages/EditAddress';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edicao" element={<EditAddress />} />
      </Routes>
    </Router>
  );
};

export default App;

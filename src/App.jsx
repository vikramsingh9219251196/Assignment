import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './components/HomePage/HomePage';
import Hero from './components/Hero/Hero';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './componenets/Navbar'; // Ensure the path is correct
import Login from './componenets/login';
import Signup from './componenets/signup';
import Home from './componenets/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;




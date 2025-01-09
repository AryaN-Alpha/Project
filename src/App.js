import './App.css';
import Navbar from './componenets/Navbar'; // Ensure the path is correct
import Login from './componenets/login';
import Signup from './componenets/signup';
import Home from './componenets/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Personal_Training from './componenets/Personal_Training';
import Group_Classes from './componenets/Group_Training';
import Client  from './componenets/Client'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Personal_training" element={<Personal_Training />} />
        <Route path="/Group_training" element={<Group_Classes />} />
        <Route path="/Client" element={<Client />} />
      </Routes>
    </Router>
  );
}

export default App;




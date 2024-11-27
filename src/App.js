import './App.css';
import Navbar from './componenets/Navbar'; // Ensure the path is correct
import Login from './componenets/login';
import Signup from './componenets/signup';
import Home from './componenets/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Group_Classes from './componenets/Group_Classes';
import Personal_Training from './componenets/Personal_Training'
import Nutrition_Guide from './componenets/Nutrition_Guide'
import Strength_Training from './componenets/Strength_Training'
import Cardio_Fitness from './componenets/Cardio_Fitness'
import Yoga_Classes from './componenets/'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/group_classes" element={<Group_Classes />} />
        <Route path="/Personal_Training" element={<Personal_Training />} />
        <Route path="/Nutrition_Guide" element={<Nutrition_Guide/>} />
        <Route path="/Strength_Training" element={<Strength_Training/>} />
        <Route path="/Cardio_Fitness" element={<Cardio_Fitness/>} />
        <Route path="/Yoga_Classes" element={<Yoga_Classes/>} />
      </Routes>
    </Router>
  );
}

export default App;



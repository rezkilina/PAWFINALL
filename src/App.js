import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage'; // Importez votre page SignUp
import LoginPage from './pages/LoginPage'; // Importez votre page SignUp
import Dashboard from './pages/Dashboard'; // Importez votre page SignUp
import Settings from './pages/Settings';
import Todo from './pages/Todo';
import Calendarpage from './pages/Calendarpage';
import Garden from './pages/Garden';
import "./App.css";


function App() {
  return (
    
    
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route path="/RegistrationPage" element={<RegistrationPage />} /> {/* Route pour SignUp */}
        <Route path="/LoginPage" element={<LoginPage />} /> {/* Route pour Login */}
        <Route path="/Dashboard" element={<Dashboard />} /> {/* Route pour Login */}
        <Route path="/Settings" element={<Settings />} /> {/* Route pour Login */}
        <Route path="/Calendarpage" element={<Calendarpage/>} /> {/* Route pour Login */}
        <Route path="/Garden" element={<Garden/>} /> {/* Route pour Login */}
        <Route path="/Todo" element={<Todo/>} /> {/* Route pour Login */}
      </Routes>
   
  );
}

export default App;

// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home/Home'; // Import the HomePage component
import {Course} from './pages/Course/Course'; 
import { Services } from "./pages/Services/Services";
import { Shop } from "./pages/Shop/Shop";
import { Contact } from "./pages/Contact/Contact";
import { Header } from './component/Header';
function App() {
  return (
    
    <Router>
      <Header/>
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} /> 
        <Route path="/Course" element={<Course />} /> 
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Home from "./Home/Home.js"
import Testimonials from "./Components/Testimonials/Testimonials.js";
import Projects from "./Components/Projects/Projects.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Diary from './Components/Diary/Diary.js'
import Contact from './Components/Contact/Contact.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/diary" element={<Diary/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

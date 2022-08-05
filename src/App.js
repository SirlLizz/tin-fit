import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Сontact";
import NoMatch from "./pages/NoMatch";
import Prices from "./pages/Prices";
import ContactButton from "./components/ContactButton";
import Footer from "./components/Footer";

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <Router>
                <ContactButton/>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                      <Route exact path="/about" element={ <About/> } />
                    <Route exact path="/prices" element={ <Prices/> } />
                     <Route exact path="/contact" element={ <Contact/> } />
                     <Route component={ NoMatch } />
                </Routes>
            </Router>
        </header>
        <Footer/>
    </div>
  );
}

export default App;

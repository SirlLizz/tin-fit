import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Сontact";
import NoMatch from "./pages/NoMatch";
import Prices from "./pages/Prices";

function App() {
    return (
    <div className="App">
      <header className="App-header">
          <Router>
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
    </div>
  );
}

export default App;

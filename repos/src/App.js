
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';

function App() {
  return (

    <>
      <Router>
        <Navbar />
    
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>


          <Route path="/About">
            <About />
          </Route>

          <Route path="/Services">
            <Services />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>


    </>
  );
}

export default App;

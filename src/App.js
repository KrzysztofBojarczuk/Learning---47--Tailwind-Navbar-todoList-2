import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Todolist from './components/Todolist';

function App() {
  return (
    
    <div>
      <Router>
      <Navbar />
      <Switch>

            <Route path="/" component={About} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/todolist" component={Todolist} exact />



      </Switch>
      </Router>

    </div>
  );
}

export default App;

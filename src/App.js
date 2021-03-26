import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default App;
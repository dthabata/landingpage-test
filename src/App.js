// import './App.css';
import Header from './components/Header'; 
import Home from './components/Home';
import Plans from './components/Plans';
import Coverage from './components/Coverage';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Mobile from './components/Mobile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Plans />
      <Coverage />
      <Accordion />
      <Footer />
      <Mobile />
    </div>
  );
}

export default App;

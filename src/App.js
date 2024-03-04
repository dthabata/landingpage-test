import './styles/components/app.scss';
import Header from './components/Header'; 
import Home from './components/Home';
import Plans from './components/Plans';
import Coverage from './components/Coverage';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Plans />
      <Coverage />
       <Accordion /> 
       {/*
       <Footer /> */}
    </div>
  );
}

export default App;

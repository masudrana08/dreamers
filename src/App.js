import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Roadmap from './components/Roadmap/Roadmap';
import Faq from './components/Faq/Faq';
import Dreamers from './components/Dreamers/Dreamers';
import Team from './components/Team/Team';
import Mint from './components/Mint/Mint';

function App() {
  return (
    <div >
     <Header />
     <Main />
     <Mint />
     <Roadmap />
     <Faq />
     <Team />
     <Dreamers />
    </div>
  );
}

export default App;

import logo from './assets/img/logo.png';
import sparkles from './assets/emoji/sparkles_2728.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-header-menu">
            <li className="App-header-list"><a className="App-header-item" href="#"></a>Accueil</li>
            <li className="App-header-list"><a className="App-header-item" href="#"></a>Parcours</li>
            <li className="App-header-list"><a className="App-header-item" href="#"></a>Compétence</li>
            <li className="App-header-list"><a className="App-header-item" href="#"></a>Contact</li>
          </ul>
        <a href="#">CV <img src={sparkles} className="App-header-CV" alt="CV" /></a>
      </header>
    </div>
  );
}

export default App;

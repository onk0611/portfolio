// import style conponent
import './importCss';

// import image
import logo from '../assets/img/logo.png';
import rocket from '../assets/emoji/Rocket.png';
import resume from '../assets/resume/CV_Ts.pdf';

function Header() {
    return (
        <div className="AppHeader">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <ul className="App-header-menu">
                <li className="App-header-list"><a className="App-header-item" href="#"></a>Accueil</li>
                <li className="App-header-list"><a className="App-header-item" href="#"></a>Parcours</li>
                <li className="App-header-list"><a className="App-header-item" href="#"></a>Compétence</li>
                <li className="App-header-list"><a className="App-header-item" href="#"></a>Contact</li>
                </ul>
                <div className="App-header-container-resume">
                    <a href={resume} className="App-header-download-cv" target="_blank">CV <img src={rocket} class="App-header-icon-rocket"/></a>
                </div>
            </header>
        </div>
    );
    
}

export default Header;
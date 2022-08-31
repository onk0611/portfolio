// import style
import './importCss';

// import icon social network
import Linkedin from '../assets/icon/linkedin.png';
import Pinterest from '../assets/icon/pinterest.png';
import Github from '../assets/icon/github.png';

function Footer() {
    return (
        <div className="App-footer-container"><a href="#"></a>
            <a href="#"><img src={Linkedin} className="App-footer-icon" /></a>
            <a href="#"><img src={Pinterest} className="App-footer-icon" /></a>
            <a href="#"><img src={Github} className="App-footer-icon" /></a>
        </div>
    )
}

export default Footer;
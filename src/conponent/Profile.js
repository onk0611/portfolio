// import style conponent
import './importCss';

function Profile() {
    return (
        <div className="App-profile">
            <h1 className="App-title">Portfolio</h1>
            <h1 className="App-title-job">DÉVELOPPEUR FULL-STACK</h1>
            {/* SVG TOP */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,245.3C840,256,960,224,1080,218.7C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
}

export default Profile;
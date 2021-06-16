import '../css/navigation.css';
import '../App.css';
import Projector from "./Projector";

const Navigation = () => {
  return (
    <div className="navigation gradient-background-black">
      <div id="wrapper-navigation" className="center">
        <div id="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart"
               viewBox="0 0 16 16">
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          <h1>Animal Lovers</h1>
        </div>
        <div className="nav-bar">
          <ul className="flex">
            <button key="0" className="nav-button home-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path
                  d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>
            </button>
            <button key="1" className="nav-button nav-button-simple">Lvi</button>
            <button key="2" className="nav-button nav-button-simple">Zebry</button>
            <button key="3" className="nav-button nav-button-simple">Žirafy</button>
            <button key="4" className="nav-button nav-button-simple">Pumy</button>
            <button key="5" className="nav-button nav-button-simple">Kohouti</button>
          </ul>
        </div>
      </div>
      <Projector />
    </div>
  )
};

export default Navigation;

import '../css/projector.css';
import '../App.css';
import lion from '../media/lion-mini.jpg';
import zebra from '../media/zebra-mini.jpg';
import tiger from '../media/tiger-mini.jpg';
import ProjectorScreen from "./ProjectorScreen";
import {useState} from "react";

const Projector = () => {
  const [screen, setScreen] = useState(0);

  const handleClick = (key) => {
    setScreen(key)
  }
  return (
    <div className="projector center">
      <ProjectorScreen id={screen} />
      <div className="controls">
        <button key={0} onClick={() => handleClick(0)} className="control-button"><img src={lion} alt="lion button"/></button>
        <button key={1} onClick={() => handleClick(1)} className="control-button"><img src={zebra} alt="zebra button"/></button>
        <button key={2} onClick={() => handleClick(2)} className="control-button"><img src={tiger} alt="tiger button"/></button>
      </div>
    </div>
  )
}

export default Projector;

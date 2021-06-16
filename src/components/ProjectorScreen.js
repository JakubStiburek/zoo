import lion from '../media/lion.jpg';
import zebra from '../media/zebra.jpg';
import tiger from '../media/tiger.jpg';


const ProjectorScreen = (props) => {
  if (props.id === 0) {
    return (
      <div>
        <img src={lion} width={1300} alt="lion"/>
      </div>
    )
  } else if (props.id === 1) {
    return (
      <div>
        <img src={zebra} width={1300} alt="zebra"/>
      </div>
    )
  } else if (props.id === 2) {
    return (
      <div>
        <img src={tiger} width={1300} alt="tiger"/>
      </div>
    )
  } else {
    return (
      <div>
        error
      </div>
    )
  }

};

export default ProjectorScreen;

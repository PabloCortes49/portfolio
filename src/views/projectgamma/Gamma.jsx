import PROJECT_IMAGE from './img-project-gamma.png';
import "./landing.scss";

function Landing() {
  return (
    <>
      <div className="Bg-green">
        <p className="title">
        PROJECT <b>GAMMA</b></p>
    </div>
    <div className="bg-white">
      <p className="text-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
        fringilla euismod augue, non suscipit leo aliquam nec. Fusce aliquet mi mollis eros 
        dictum, vel eleifend tellus rhoncus. <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
        fringilla euismod augue, non suscipit leo aliquam nec. Fusce aliquet mi mollis eros 
        dictum, vel eleifend tellus rhoncus.
      </p>
    </div>
    <img className="project-gamma-details" src={PROJECT_IMAGE} alt="detalle del project gamma"/>
    </>
  );
}

export default Landing;


import PROJECT_IMAGE from './img-project-gamma.png';
import "./landing.scss";


function Landing() {
    return (
      <div>
        <div className="Bg-green" />
        <div className="projectgamma">
          <p>
            <b>PROJECT</b>GAMMA</p>
        </div>
        <div className="bg-white" />
        <p className="projectgamma-text-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
          fringilla euismod augue, non suscipit leo aliquam nec. Fusce aliquet mi mollis eros 
          dictum, vel eleifend tellus rhoncus. <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
          fringilla euismod augue, non suscipit leo aliquam nec. Fusce aliquet mi mollis eros 
          dictum, vel eleifend tellus rhoncus.
        </p>
        <img className="project-gamma-details" src={PROJECT_IMAGE} alt="detalle del project gamma" />
      </div>
    );
  }

export default Landing;

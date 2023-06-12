import { Outlet, Link } from "react-router-dom";
import "./app.scss";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header">
        <nav className={`menu ${showMobileMenu ? "menu--show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/projectalpha"> Alpha</Link>
          <Link to="/projectbeta"> Beta</Link>
          <Link to="/projectgamma"> Gamma</Link>
          <Link to="/contact">Contact</Link>
          <button className="menu__close" onClick={handleShowMenuClick}>
            X
          </button>  
        </nav>
        <button className="show-menu" onClick={handleShowMenuClick}>
          Menu
        </button>
      </header>

      <Outlet />

      <footer className="footer">
        <p className="footer-text">Pablo Cortés, 2023</p>
    </footer>   
     </>
  );
}

export default App;
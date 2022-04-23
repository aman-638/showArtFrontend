import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import SelectContext from "../contexts/SelectContext";
const Nav = () => {
  const { searchTerm, setSearchTerm, handleSubmit } = useContext(SelectContext);
  const [isNavOpen, setIsNavOpen] = useState(Boolean);
  const [isBurgerOpen, setIsBurgerOpen] = useState(Boolean);

  const openMobileMenuHandler = () => {
    setIsNavOpen(!isNavOpen);
    setIsBurgerOpen(!isBurgerOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav>
      <div className="navbar-wrapper">
        <Form
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
        <div className="desktop-nav">
          <Link tabIndex="0" to="/">
            Home
          </Link>
          <Link tabIndex="0" to="/myfavorites">
            My favorites
          </Link>
          <Link tabIndex="0" to="/about">
            About
          </Link>
        </div>
        <div
          className={isBurgerOpen ? `burger open` : `burger`}
          onClick={openMobileMenuHandler}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div className={isNavOpen ? `mobile-nav active` : `mobile-nav`}>
        <Link onClick={openMobileMenuHandler} to="/">
          Home
        </Link>
        <Link onClick={openMobileMenuHandler} to="/myfavorites">
          My favorites
        </Link>
        <Link onClick={openMobileMenuHandler} to="/about">
          About
        </Link>
        <Link to="https://github.com/aman-638/showArtFrontend.git">
          <FontAwesomeIcon icon={faGithub} /> Jatin Sharma
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

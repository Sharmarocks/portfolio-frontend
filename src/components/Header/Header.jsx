import { useState } from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <section>
      <div className="header">
        <div className="header__logo">
          <img className="header__img" />
          <p className="header__logotext">Rahul Sharma</p>
        </div>

        <div className={`header__navigation `}>
          <ul className={`header__list ${isNavOpen ? "open" : ""}  `}>
            <li className="header__listitem">Hire Me</li>
            <li className="header__listitem">Projects</li>
            <li className="header__listitem">Home</li>
          </ul>
          <FaBars className="header__bars" onClick={toggleNav} />
        </div>
      </div>
    </section>
  );
}

export default Header;

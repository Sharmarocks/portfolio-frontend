import "./Header.scss";

function Header() {
  return (
    <section>
      <div className="header">
        <div className="header__logo">
          <img className="header__img" />
          <p className="header__logotext">Rahul Sharma</p>
        </div>

        <div className="header__navigation">
          <ul className="header__list">
            <li className="header__listitem">Hire Me</li>
            <li className="header__listitem">Projects</li>
            <li className="header__listitem">Home</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;

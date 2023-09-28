import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section id="page4">
      <div className="footer">
        <p className="footer__header">Let's Work Together...</p>
        <img className="footer__react" />
        <img className="footer__sass" />
        <img className="footer__nodejs" />
        <img className="footer__express" />
        <img className="footer__sql" />
      </div>

      <div className="footer__contactinfo">
        <Link to={"https://www.linkedin.com/in/rahul-s97"}>
          <FaLinkedinIn className="footer__linkedin" />
        </Link>

        <Link to={"https://github.com/Sharmarocks"}>
          <FaGithub className="footer__github" />
        </Link>
        <p className="footer__gmail">rahulsharma199724@gmail.com</p>
      </div>
    </section>
  );
}

export default Footer;

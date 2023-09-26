import "./Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section>
      <p className="heading">My Work</p>

      <div className="projects">
        <div className="projects__box1">
          <img className="projects__image1" />
          <p className="projects__subheading">MyDoctor</p>
          <Link
            to={"https://cosmic-madeleine-85e461.netlify.app"}
            className="projects__livelink"
          >
            Visit
          </Link>
          <br />
          <Link
            to={"https://github.com/Sharmarocks/mydoctor-client"}
            className="projects__githublink"
          >
            Github
          </Link>
        </div>
        <div className="projects__box2">
          <img className="projects__image2" />
          <p className="projects__subheading">BrainFlix</p>
          <Link
            to={"https://stunning-gecko-19e89e.netlify.app"}
            className="projects__livelink"
          >
            Visit
          </Link>
          <br />
          <Link
            to={"https://github.com/Sharmarocks/rahul-sharma-brainflix"}
            className="projects__githublink"
          >
            Github
          </Link>
        </div>
        <div className="projects__box3">
          <img className="projects__image3" />
          <p className="projects__subheading">BandSite</p>
          <Link
            to={"https://clinquant-starlight-4884a4.netlify.app"}
            className="projects__livelink"
          >
            Visit
          </Link>
          <br />
          <Link
            to={"https://github.com/Sharmarocks/rahul-sharma-bandsite"}
            className="projects__githublink"
          >
            Github
          </Link>
        </div>
        <div className="projects__box4">
          <img className="projects__image4" />
          <p className="projects__subheading">Travelling Site</p>
          <Link
            to={"https://dazzling-figolla-001233.netlify.app"}
            className="projects__livelink"
          >
            Visit
          </Link>
          <br />
          <Link
            to={"https://github.com/Sharmarocks/Rahul-Sharma-travelsite"}
            className="projects__githublink"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;

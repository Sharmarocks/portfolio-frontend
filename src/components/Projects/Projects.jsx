import "./Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="page2">
      <p className="heading">My Work</p>

      <div className="projects">
        <div className="projects__box1">
          <img className="projects__image1" />
          <p className="projects__subheading">MyDoctor</p>

          <p className="projects__info">
            MyDoctor is an innovative online platform to find doctors nearby
            <br /> and book appointments online
          </p>

          <p className="projects__tip">
            Please wait for 2 mins after clicking on Doctors as the backend{" "}
            <br /> is deployed through Render.
          </p>

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

          <p className="projects__info">
            Demonstrated proficiency in full-stack development. Integrated
            <br />
            static features with a mock movie API and subsequently built a<br />
            functional backend API service to manage video content effectively.
          </p>

          <p className="projects__tip">
            Please wait for 2 mins for the content to load as the backend <br />{" "}
            is deployed through render.
          </p>
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
          <p className="projects__info">
            Collaborated with design specs and mock ups to create a fully
            <br />
            functional live site. Successfully delivered a dynamic and
            <br /> engaging online presence for the up-and-coming band
          </p>
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
      </div>
    </section>
  );
}

export default Projects;

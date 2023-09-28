import "./About.scss";

function About() {
  return (
    <section>
      <p className="about__heading">About me</p>
      <div className="about">
        <div className="about__imagebox">
          <img className="about__image" />
        </div>
        <p className="about__info">
          My journey in the world of technology began with my diploma in
          Computer Science and Information Systems from Douglas College , which
          equipped me with a solid understanding of the fundamental principles
          that underpin the digital landscape.
          <br /> Building on that foundation, I recently completed a web
          development bootcamp at BrainStation in Vancouver, where I honed my
          skills in HTML, CSS, and JavaScript,React,Nodejs. These languages
          serve as my canvas, allowing me to craft visually stunning and highly
          functional web experiences.
          <br /> As a lifelong learner, I am committed to staying at the
          forefront of technology trends and am excited to embark on a career
          where I can continue to grow and innovate. When I'm not coding, you
          can find me exploring the latest tech advancements, collaborating with
          creative minds, or enjoying the natural beauty of Vancouver.
          <br /> I'm excited to contribute my skills and knowledge to exciting
          projects and am always open to new opportunities for collaboration.
          Feel free to reach out, and let's build something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;

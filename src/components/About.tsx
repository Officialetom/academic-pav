import src from "../assets/logo.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-item">
          <img src={src} alt="about-logo" />
        </div>
        <div className="about-item">
          <h2>
            About <br />
            <span className="text-secondary">Academic Pavilion</span>
          </h2>
          <p>
            Our platform aims to provide a seamless experience for Universities
            and students to manage academic data and access information. With
            our innovative solution we strive to make higher education more
            efficient and accessible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

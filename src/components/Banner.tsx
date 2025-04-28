import Button from "./Button";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="banner">
      <Navbar page="/" />
      <div className="banner-container">
        <div className="banner-item">
          <h1>
            Welcome to <br />
            <span className="text-secondary">Academic Pavilion</span>
          </h1>
          <p>
            Transforming Higher Education <br /> Innovative Solution for
            Universities <br />
            and Students.
          </p>
          <Button href="/login" name="Login" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

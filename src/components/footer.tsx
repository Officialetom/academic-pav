import Img from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <img src={Img} alt="footer_img" />
          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/universities">Universities</Link>
              </li>
              <li>
                <Link to="/professors">Professors</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright @ Academic Pavilion</span>
      </div>
    </>
  );
}

export default Footer;

import Button from "./Button";
import logo from "../assets/logo.jpg";
import polygon from "../assets/Polygon.png";
import poly from "../assets/ojo.png";
import toggleDark from "../assets/toggle-b.png";
import toggleWhite from "../assets/toggle-w.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface props {
  page: string;
}

function Navbar({ page }: props) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleClick = () => {
    if (dropdownRef.current && imgRef.current) {
      dropdownRef.current.classList.toggle("show");
      imgRef.current.classList.toggle("img-show");
    }
  };

  const handleMove = () => {
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("move");
    }
  };

  const handleMoveParent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === navLinksRef.current) {
      navLinksRef.current?.classList.toggle("move");
    }
  };
  if (page == "/")
    return (
      <>
        <div className="navbar">
          <div className="nav-container">
            <div className="nav-item">
              <img src={logo} alt="academic-pav-logo" />
              <div
                className="nav-links-container"
                ref={navLinksRef}
                onClick={handleMoveParent}
              >
                <div className="nav-links">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="link-center">
                      <span onClick={handleClick}>
                        Academia
                        <img src={polygon} ref={imgRef} alt="navbar-polygon" />
                      </span>
                      <div className="drop-down" ref={dropdownRef}>
                        <ul>
                          <li>
                            <Link to="/universities">Universities</Link>
                          </li>
                          <li>
                            <Link to="/professors">Professors</Link>
                          </li>
                          <li>
                            <Link to="/programs">Programs</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                  {/* shown button on mobile */}
                  <div className="btn-show">
                    <Button href="/register" name="Register" />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <Button href="/register" name="Register" />
            </div>
            <div className="toggle_btn" onClick={handleMove}>
              <img src={toggleDark} alt="nav_tbtn-light" />
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="navbar">
          <div className="nav-container">
            <div className="nav-item-w">
              <img src={logo} alt="academic-pav-logo" />
              <div
                className="nav-links-container"
                ref={navLinksRef}
                onClick={handleMoveParent}
              >
                <div className="nav-links">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="link-center">
                      <span onClick={handleClick}>
                        Academia
                        <img src={poly} ref={imgRef} alt="navbar-polygon" />
                      </span>
                      <div className="drop-down" ref={dropdownRef}>
                        <ul>
                          <li>
                            <Link to="/universities">Universities</Link>
                          </li>
                          <li>
                            <Link to="/professors">Professors</Link>
                          </li>
                          <li>
                            <Link to="/programs">Programs</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                  {/* shown button on mobile */}
                  <div className="btn-show">
                    <Button href="/register" name="Register" />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <Button href="/register" name="Register" />
            </div>
            <div className="toggle_btn" onClick={handleMove}>
              <img src={toggleWhite} alt="nav_tbtn-light" />
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;

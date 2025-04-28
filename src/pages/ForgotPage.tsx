import Button from "../components/Button";
import logo from "../assets/logo.jpg";

function ForgotPage() {
  return (
    <div className="login-div">
      <Button href="/" name="Home" />
      <div className="login-container">
        <div className="login-item">
          <h5>Forgot password</h5>
          <img src={logo} alt="login-logo" />
        </div>
        <div className="login-item">
          <img src={logo} alt="login-logo" />
          <h4>Forgot password</h4>
          <form action="" className="login-form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Registered email"
            />
            <button type="submit" name="register">
              Send
            </button>
          </form>
          <div className="form-links">
            <a href="/login">Remember password?</a>
          </div>
        </div>
      </div>
      <span>Copyright @ Academic Pavilion</span>
    </div>
  );
}

export default ForgotPage;

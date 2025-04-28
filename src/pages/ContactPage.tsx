import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";

function ContactPage() {
  return (
    <>
      <PageBanner page="Contact" />
      <div className="contact">
        <div className="contact-container">
          <p>Contact Us</p>
          <form action="">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
            />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

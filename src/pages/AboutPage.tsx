import About from "../components/About";
import Footer from "../components/footer";
import News from "../components/News";
import PageBanner from "../components/PageBanner";

function AboutPage() {
  return (
    <>
      <PageBanner page="About" />
      <About />
      <News />
      <Footer />
    </>
  );
}

export default AboutPage;

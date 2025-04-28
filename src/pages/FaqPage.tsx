import Faq from "../components/Faq";
import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";

function FaqPage() {
  const Faqs = [
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
    {
      question: "What is a noun",
      answer:
        "This shows how the the reader can get distracted by just some simple things as the double 'the' in the beginning of the sentence",
    },
  ];
  return (
    <>
      <PageBanner page="FAQ" />
      <div className="faq">
        <div className="faq-container">
          <Faq data={Faqs} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FaqPage;

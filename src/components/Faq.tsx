import polygon from "../assets/Polygon.png";
import { useRef } from "react";

interface faqs {
  question: string;
  answer: string;
}

interface faqList {
  data: faqs[];
}

function Faq({ data }: faqList) {
  const faqRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    const node = faqRef.current[index];
    if (node) {
      node.classList.toggle("drop");
    }
  };
  return (
    <>
      {data.map((getFaq, index) => (
        <div
          className="faq-card"
          key={index}
          ref={(el) => {
            faqRef.current[index] = el;
          }}
          onClick={() => handleToggle}
        >
          <div className="faq-q">
            {getFaq.question}
            <img src={polygon} alt="faq_arrow" />
          </div>
          <div className="faq-a">{getFaq.answer}</div>
        </div>
      ))}
    </>
  );
}

export default Faq;

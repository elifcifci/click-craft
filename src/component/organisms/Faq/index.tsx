import FaqItem from "@/component/molecules/FaqItem";
import { faqConstants } from "@/constants/faqConstants";

const Faq = () => {
  return (
    <section className="flex flex-col items-center bg-gray-lighter w-full p-2 md:p-10">
      <ol className="w-[90%] md:w-[80%] max-w-[2000px]">
        {faqConstants.map((faq) => (
          <FaqItem key={faq.id} item={faq} />
        ))}
      </ol>
    </section>
  );
};

export default Faq;

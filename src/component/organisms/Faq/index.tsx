import FaqItem from "@/component/molecules/FaqItem";
import { faqConstants } from "@/constants/faqConstants";

const Faq = () => {
  return (
    <section className="grid grid-flow-row-dense grid-cols-3 items-start bg-gray-lighter w-full p-2 md:p-10">
      <h2 className="col-span-1 flex flex-col font-bold text-3xl md:text-4xl text-black-default border-b-2 sm:border-b-0 sm:border-l-2 mb-4 sm:mb-0 py-2 sm:pl-6 pb-4 border-black-lighter">
        <span>Frequently</span>
        <span>Asked Questions</span>
      </h2>
      <ol className="col-span-2 w-[90%] md:w-full">
        {faqConstants.map((faq) => (
          <FaqItem key={faq.id} item={faq} />
        ))}
      </ol>
    </section>
  );
};

export default Faq;

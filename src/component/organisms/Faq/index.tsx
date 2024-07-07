import FaqContent from "@/component/molecules/Faq";

const Faq = () => {
  return (
    <section className="grid md:grid-flow-row-dense md:grid-cols-3 items-start bg-gray-lighter w-full p-10">
      <h2 className="md:col-span-1 text-center md:text-left flex flex-col font-bold text-3xl md:text-4xl text-black-default border-b-2 md:border-b-0 md:border-l-2 mb-4 md:mb-0 py-2 md:pl-6 pb-4 border-black-lighter">
        <span>Frequently</span>
        <span>Asked Questions</span>
      </h2>
      <FaqContent />
    </section>
  );
};

export default Faq;

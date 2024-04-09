import NewsItem from "@/component/molecules/NewsItem";
import { newsletterConstants } from "@/constants/newsletterConstants";

const Newsletter = () => {
  return (
    <section className="bg-gray-lighter">
      <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {newsletterConstants.map((item) => {
          return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Newsletter;

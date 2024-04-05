import ExampleItem from "@/component/molecules/ExampleItem";
import { exampleConstant } from "@/constants/exampleConstants";

const Examples = () => {
  return (
    <section className="bg-gray-lighter">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exampleConstant.map((item) => {
          return <ExampleItem key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Examples;

import StatisticCounter from "@/component/atoms/StatisticCounter";
import { statisticsConstants } from "@/constants/statisticsConstants";

const Statistics = () => {
  return (
    <section className="max-h-[max-content] md:max-h-[200px] h-[30vh] bg-gray-default flex items-center justify-center">
      <ul className="grid grid-cols-2 md:grid-cols-4 w-[100vw] gap-[20px] p-2">
        {statisticsConstants.map((statistic, index) => {
          return (
            <StatisticCounter
              key={statistic.id}
              type={statistic.type}
              index={index}
              length={statisticsConstants.length}
              limit={statistic.limit}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

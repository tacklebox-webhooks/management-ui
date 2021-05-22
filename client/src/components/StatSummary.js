import { useSelector } from "react-redux";
import StatItem from "./StatItem";

const StatSummary = () => {
  const currentService = useSelector((state) => state.currentService);
  const stats = useSelector((state) => state.stats[currentService.uuid]);

  const statsArray = [
    { name: "Users", stat: "-" },
    { name: "Endpoints", stat: "-" },
    { name: "Events Created", stat: "-" },
    { name: "Messages Sent", stat: "-" },
  ];

  let hasFailures;
  let failureRate = "-";

  if (stats) {
    statsArray[0].stat = stats.users;
    statsArray[1].stat = stats.endpoints;
    statsArray[2].stat = stats.events;
    statsArray[3].stat = stats.messages;

    // if (stats.failedMessages !== 0) {
    //   failureRate = `${stats.failedMessages / stats.messages}%`;
    // } else {
    //   failureRate = "0.00%"
    // }
  }

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
        {statsArray.map((item) => (
          <StatItem item={item} />
        ))}
        <div
          className={
            hasFailures
              ? "px-4 py-5 bg-red-100 shadow rounded-lg overflow-hidden sm:p-6"
              : "px-4 py-5 bg-green-100 shadow rounded-lg overflow-hidden sm:p-6"
          }
        >
          <dt className="text-sm font-medium text-gray-800 truncate">
            Failed Messages
          </dt>
          <dd
            className={
              hasFailures
                ? "mt-1 text-3xl font-semibold text-red-800"
                : "mt-1 text-3xl font-semibold text-green-800"
            }
          >
            {failureRate}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StatSummary;

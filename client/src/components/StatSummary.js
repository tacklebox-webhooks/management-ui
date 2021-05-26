import StatItem from "./StatItem";

const calculateFailureRate = (failures, total) => {
  const rate = (failures / total) * 100;
  return rate.toFixed(2);
};

const StatSummary = ({ stats }) => {
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
    statsArray[2].stat = stats.events.total;
    statsArray[3].stat = stats.messages.total;

    if (stats.messages.failed !== 0) {
      failureRate = `${calculateFailureRate(
        Number(stats.messages.failed),
        Number(stats.messages.total)
      )}%`;
      hasFailures = true;
    } else {
      failureRate = "0.00%";
    }
  }

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
        {statsArray.map((item, idx) => (
          <StatItem key={idx} item={item} />
        ))}
        <div
          className={
            hasFailures
              ? "px-4 py-5 bg-red-100 shadow rounded-lg overflow-hidden sm:p-6"
              : "px-4 py-5 bg-green-100 shadow rounded-lg overflow-hidden sm:p-6"
          }
        >
          <dt className="text-sm font-medium text-gray-800 truncate">
            Message Failure Rate
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

import { useSelector } from "react-redux";

const StatSummary = () => {
  const currentService = useSelector((state) => state.currentService);
  const stats = useSelector((state) => state.stats[currentService.uuid]);

  const statsArray = [
    { name: "Users", stat: "-" },
    { name: "Endpoints", stat: "-" },
    { name: "Events Created", stat: "-" },
    { name: "Messages Sent", stat: "-" },
  ];

  if (stats) {
    statsArray[0].stat = stats.users;
    statsArray[1].stat = stats.endpoints;
    statsArray[2].stat = stats.events;
    statsArray[3].stat = stats.messages;
  }

  // const statsArray = [
  //   { name: "Users", stat: stats.users },
  //   { name: "Endpoints", stat: stats.endpoints },
  //   { name: "Events Created", stat: stats.events },
  //   { name: "Messages Sent", stat: stats.messages },
  // ];

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
        {statsArray.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
          >
            <dt className="text-sm font-medium text-gray-500 truncate">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
        <div className="px-4 py-5 bg-red-100 shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-800 truncate">
            Failed Messages
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-red-800">0.00%</dd>
        </div>
      </dl>
    </div>
  );
};

export default StatSummary;

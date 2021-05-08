const StatSummary = () => {
  const stats = [
    { name: "Users", stat: "12" },
    { name: "Endpoints", stat: "30" },
    { name: "Events Created", stat: "7826" },
    { name: "Messages Sent", stat: "234,783" },
  ];

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
        {stats.map((item) => (
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
          <dd className="mt-1 text-3xl font-semibold text-red-800">1.76%</dd>
        </div>
      </dl>
    </div>
  );
};

export default StatSummary;

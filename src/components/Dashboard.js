import MessagesChart from "./MessagesChart";
import EventsChartDoughnut from "./EventsChartDoughnut";
import StatSummary from "./StatSummary";
import EndpointsChartBar from "./EndpointsChartBar";
import ResponseStatusChart from "./ResponseStatusChart";

export default function Dashboard() {
  return (
    <div>
      <StatSummary />
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="col-span-2 px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <MessagesChart />
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <EventsChartDoughnut />
            </dd>
          </div>
          <div className="col-span-2 px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <EndpointsChartBar />
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <ResponseStatusChart />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

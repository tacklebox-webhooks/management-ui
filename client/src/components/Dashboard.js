import MessagesChart from './MessagesChart';
import EventsChartDoughnut from './EventsChartDoughnut';
import StatSummary from './StatSummary';
import EventsChartBar from './EventsChartBar';
import ResponseStatusChart from './ResponseStatusChart';
import * as statActions from '../actions/StatActions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Dashboard() {
  const currentService = useSelector((state) => state.currentService);
  const stats = useSelector((state) => state.stats[currentService.uuid]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentService.uuid) {
      dispatch(statActions.fetchStats(currentService.uuid));
    }
  }, [dispatch, currentService.uuid]);

  if (!stats) {
    return null;
  }

  return (
    <div>
      <StatSummary stats={stats} />
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="col-span-2 px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <MessagesChart messages={stats.messages} />
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <EventsChartDoughnut eventsByType={stats.events.byType} />
            </dd>
          </div>
          <div className="col-span-2 px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <EventsChartBar eventsByUser={stats.events.byUser} />
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate"></dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              <ResponseStatusChart messagesByStatus={stats.messages.byStatus} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

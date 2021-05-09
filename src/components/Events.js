import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/EventActions";

export default function Events() {
  const currentService = useSelector((state) => state.currentService);
  const currentUser = useSelector((state) => state.currentUser);
  const events = useSelector((state) => state.events[currentUser.uuid]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.uuid || !currentService.uuid) {
      return;
    }
    dispatch(actions.fetchEvents(currentService.uuid, currentUser.uuid));
  }, [dispatch, currentUser.uuid]);

  if (!events) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Messages
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Idempotency Key
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, eventIdx) => (
                  <tr
                    key={event.uuid}
                    className={eventIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {new Date().toISOString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.event_type_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      20
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.idempotency_key}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

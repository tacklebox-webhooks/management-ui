import { useEffect } from "react";
import { formatDateTime } from "../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/EndpointActions";

export default function Endpoints() {
  const currentService = useSelector((state) => state.currentService);
  const currentUser = useSelector((state) => state.currentUser);
  const endpoints = useSelector((state) => state.endpoints[currentUser.uuid]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.uuid || !currentService.uuid) {
      return;
    }
    dispatch(actions.fetchEndpoints(currentService.uuid, currentUser.uuid));
  }, [dispatch, currentUser.uuid]);

  if (!endpoints) {
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
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Subscribed Events
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Failure Rate
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, endpointIdx) => (
                  <tr
                    key={endpoint.uuid}
                    className={
                      endpointIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatDateTime(endpoint.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {endpoint.url}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      {endpoint.event_types.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.0%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      Test
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

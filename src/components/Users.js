// import { users } from "../lib/db";
import { useState, useEffect } from "react";
import { formatDateTime } from "../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/UserActions";

export default function Users() {
  const users = useSelector((state) => state.users);
  const currentService = useSelector((state) => state.currentService);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (users.length === 0) {
  //     dispatch(actions.fetchUsers(currentService.uuid));
  //   }
  // }, [dispatch, currentService]);

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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, userIdx) => (
                  <tr
                    key={user.uuid}
                    className={userIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatDateTime(user.created_at, true)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      Endpoints
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      Events
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                      Messages
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
